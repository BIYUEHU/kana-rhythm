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
  timestamp : String
} derive(Eq, Show)

///|
typealias Array[Record] as Records

///|
struct GameState {
  status : GameStatus
  current_question : Question?
  score : @lib.Nat
  question_index : @lib.Nat
  time_left : @lib.Nat
  records : Records
} derive(Eq)

///|
impl Default for GameState with default() -> GameState {
  {
    status: Idle,
    current_question: None,
    score: 0 |> @lib.Nat::from_int,
    question_index: 0 |> @lib.Nat::from_int,
    time_left: THINKING_TIME |> @lib.Nat::from_int,
    records: [],
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
}

///|
fn transition(state : GameState, action : GameAction) -> GameState {
  match (state.status, action) {
    (_, StartGame) =>
      {
        ..Default::default(),
        records: state.records,
        status: Playing,
        current_question: Some(generate_question()),
      }
    (Playing, PauseGame) => { ..state, status: Paused }
    (Paused, ResumeGame) => { ..state, status: Playing }
    (Playing, AnswerQuestion(answer)) => answer_question(state, answer)
    (Playing, TimeTick) => state |> handle_time_tick
    (Finished, SaveScore) => save_score(state)
    _ => state
  }
}

///|
fn calculate_score(state : GameState) -> @lib.Nat {
  @lib.Nat::from_int(
    match state.time_left.to_int() {
      6..=7 => 3
      3..=5 => 2
      _ => 1
    },
  )
}

///|
fn answer_question(state : GameState, answer : AnswerQuestionType) -> GameState {
  match state.current_question {
    Some(question) => {
      let answer = answer.get_answer(question)
      let score = if answer == question.romaji {
        "/correct.mp3" |> @js.play_sound
        state.time_left |> Some |> play_animation
        state.score + calculate_score(state)
      } else {
        "/incorrect.mp3" |> @js.play_sound
        None |> play_animation
        state.score
      }
      let question_index = @lib.S(state.question_index)
      if question_index >= @lib.Nat::from_int(TOTAL_QUESTIONS) {
        { ..state, status: Finished, score }
      } else {
        {
          ..state,
          score,
          question_index,
          current_question: generate_question() |> Some,
          time_left: THINKING_TIME |> @lib.Nat::from_int,
        }
      }
    }
    None => state
  }
}

///|
fn save_score(state : GameState) -> GameState {
  let timestamp = @js.Date::now().to_string()
  if state.records.search_by(record => record.timestamp == timestamp) is None {
    let records = [
        { score: state.score.to_string(), timestamp },
        ..load_records(),
      ]
    save_records(records)
    { ..state, records, }
  } else {
    state
  }
}

///|
fn handle_time_tick(state : GameState) -> GameState {
  if state.time_left <= S(Z) {
    state |> answer_question(Timeout)
  } else {
    { ..state, time_left: state.time_left - S(Z) }
  }
}

///|
fn generate_question() -> Question {
  let keys = kana_to_romaji_map.keys().to_array()
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
    romaji: kana_to_romaji_map.get(keys[num1]).unwrap(),
    choices: [num1, num2, num3]
    .shuffle(rand=@js.random_int)
    .map(index => kana_to_romaji_map.get(keys[index]).unwrap()),
  }
}
