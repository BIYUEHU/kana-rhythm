///|
enum GameStatus {
  Idle
  Playing
  Paused
  Finished
} derive(Eq, Show)

///|
struct Question {
  kana : String
  romaji : String
  choices : Array[String]
} derive(Eq)

///|
struct Record {
  score : String
  time : String
  question_count : String
  kana_mode : String
} derive(Eq)

///|
typealias Array[Record] as Records

///|
enum KanaMode {
  Hiragana
  Katakana
  Both
} derive(Eq, Show)

///|
fn KanaMode::from_string(mode : String) -> KanaMode {
  match mode {
    "hiragana" | "1" => Hiragana
    "katakana" | "2" => Katakana
    _ => Both
  }
}

///|
fn KanaMode::to_int(self : KanaMode) -> Int {
  match self {
    Hiragana => 1
    Katakana => 2
    Both => 3
  }
}

///|
struct GameState {
  status : GameStatus
  current_question : Question?
  score : @lib.Nat
  question_index : @lib.Nat
  time_left : @lib.Nat
  records : Records
  config_kana_mode : KanaMode
  config_question_count : Int
} derive(Eq)

///|
impl Default for GameState with default() -> GameState {
  {
    status: Idle,
    current_question: None,
    score: 0 |> @lib.Nat::from_int,
    question_index: 0 |> @lib.Nat::from_int,
    time_left: THINKING_TIME |> @lib.Nat::from_int,
    records: get_records(),
    config_kana_mode: get_kana_mode(),
    config_question_count: get_question_count(),
  }
}

///|
enum AnswerQuestionType {
  First
  Second
  Third
  Literal(String)
  Timeout
}

///|
fn AnswerQuestionType::get_answer(
  self : AnswerQuestionType,
  question : Question,
) -> String {
  match self {
    Literal(literal) => literal
    First => question.choices[0]
    Second => question.choices[1]
    Third => question.choices[2]
    Timeout => ""
  }
}

///|
enum GameAction {
  StartGame
  PauseGame
  ResumeGame
  AnswerQuestion(AnswerQuestionType)
  TimeTick
  SaveScore
  SetQuestionNumber(Int)
  SetKanaMode(KanaMode)
}

///| transform :: State -> Action -> State
fn GameState::transform(self : GameState, action : GameAction) -> GameState {
  match (self.status, action) {
    (_, StartGame) =>
      {
        ..Default::default(),
        records: self.records,
        status: Playing,
        current_question: Some(self.generate_question()),
      }
    (Playing, PauseGame) => { ..self, status: Paused }
    (Paused, ResumeGame) => { ..self, status: Playing }
    (Playing, AnswerQuestion(answer)) => self.answer_question(answer)
    (Playing, TimeTick) => self.handle_time_tick()
    (Finished, SaveScore) => self.set_score()
    (Idle, SetQuestionNumber(count)) | (Finished, SetQuestionNumber(count)) =>
      self.set_config_question_count(count)
    (Idle, SetKanaMode(mode)) | (Finished, SetKanaMode(mode)) =>
      self.set_config_kana_mode(mode)
    _ => self
  }
}

///|
fn GameState::generate_question(self : GameState) -> Question {
  let maps = match self.config_kana_mode {
    Hiragana => hiragana_to_romaji_map
    Katakana => katakana_to_romaji_map
    Both => kana_to_romaji_map
  }
  let keys = maps.keys().to_array()
  let get_random_int = () => keys.length() |> @js.random_int
  let num1 = get_random_int()
  let num2 = loop get_random_int() {
    target if target != num1 => break target
    _ => continue get_random_int()
  }
  let num3 = loop get_random_int() {
    target if target != num1 && target != num2 => break target
    _ => continue get_random_int()
  }
  {
    kana: keys[num1],
    romaji: maps.get(keys[num1]).unwrap(),
    choices: [num1, num2, num3]
    .shuffle(rand=@js.random_int)
    .map(index => maps.get(keys[index]).unwrap()),
  }
}

///|
fn GameState::calculate_score(self : GameState) -> @lib.Nat {
  @lib.Nat::from_int(
    match self.time_left.to_int() {
      6..=7 => 3
      3..=5 => 2
      _ => 1
    },
  )
}

///|
fn GameState::answer_question(
  self : GameState,
  answer : AnswerQuestionType,
) -> GameState {
  match self.current_question {
    Some(question) => {
      let score = if answer.get_answer(question) == question.romaji {
        "/correct.mp3" |> @js.play_sound
        self.time_left |> Some |> play_animation
        self.score + self.calculate_score()
      } else {
        "/incorrect.mp3" |> @js.play_sound
        None |> play_animation
        self.score
      }
      let question_index = @lib.S(self.question_index)
      if question_index.to_int() >= self.config_question_count {
        { ..self, status: Finished, score }
      } else {
        {
          ..self,
          score,
          question_index,
          current_question: self.generate_question() |> Some,
          time_left: THINKING_TIME |> @lib.Nat::from_int,
        }
      }
    }
    None => self
  }
}

///|
fn GameState::set_score(self : GameState) -> GameState {
  let records = [
      {
        score: self.score.to_string(),
        time: @js.Date::now().to_string(),
        question_count: self.config_question_count.to_string(),
        kana_mode: self.config_kana_mode.to_string(),
      },
      ..get_records(),
    ]
  set_records(records)
  { ..self, records, }
}

///|
fn GameState::set_config_kana_mode(
  self : GameState,
  mode : KanaMode,
) -> GameState {
  set_kana_mode(mode)
  { ..self, config_kana_mode: mode }
}

///|
fn GameState::set_config_question_count(
  self : GameState,
  count : Int,
) -> GameState {
  println("Setting question count to \{count}")
  set_question_count(count)
  { ..self, config_question_count: count }
}

///|
fn GameState::handle_time_tick(self : GameState) -> GameState {
  if self.time_left <= S(Z) {
    self.answer_question(Timeout)
  } else {
    { ..self, time_left: self.time_left - S(Z) }
  }
}

///|
fn GameState::is_gaming(self : GameState) -> Bool {
  ![Idle, Finished].contains(self.status)
}
