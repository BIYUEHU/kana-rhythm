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
struct GameState {
  status : GameStatus
  current_question : Question?
  score : @lib.Nat
  question_index : @lib.Nat
  time_left : @lib.Nat
} derive(Eq)

///|
enum AnswerQuestionType {
  First
  Second
  Third
  Literal(String)
  Timeout
}

///|
enum GameAction {
  StartGame
  PauseGame
  ResumeGame
  AnswerQuestion(AnswerQuestionType)
  TimeTick
}

///|
impl Default for GameState with default() -> GameState {
  {
    status: Idle,
    current_question: None,
    score: @lib.Nat::from_int(0),
    question_index: @lib.Nat::from_int(0),
    time_left: @lib.Nat::from_int(THINKING_TIME),
  }
}

///|
fn transition(state : GameState, action : GameAction) -> GameState {
  match (state.status, action) {
    (_, StartGame) =>
      {
        ..Default::default(),
        status: Playing,
        current_question: Some(generate_question()),
      }
    (Playing, PauseGame) => { ..state, status: Paused }
    (Paused, ResumeGame) => { ..state, status: Playing }
    (Playing, AnswerQuestion(answer)) => answer_question(state, answer)
    (Playing, TimeTick) => handle_time_tick(state)
    _ => state
  }
}

///|
fn answer_question(state : GameState, answer : AnswerQuestionType) -> GameState {
  match state.current_question {
    Some(question) => {
      let answer = match answer {
        Literal(literal) => literal
        First => question.choices[0]
        Second => question.choices[1]
        Third => question.choices[2]
        Timeout => ""
      }
      let score = if answer == question.romaji {
        @js.play_sound("/correct.mp3")
        play_animation(Some(state.time_left))
        state.score +
        @lib.Nat::from_int(
          match state.time_left.to_int() {
            6..=7 => 3
            3..=5 => 2
            _ => 1
          },
        )
      } else {
        @js.play_sound("/incorrect.mp3")
        play_animation(None)
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
          current_question: Some(generate_question()),
          time_left: @lib.Nat::from_int(THINKING_TIME),
        }
      }
    }
    None => state
  }
}

///|
fn handle_time_tick(state : GameState) -> GameState {
  if state.time_left <= S(Z) {
    answer_question(state, Timeout)
  } else {
    { ..state, time_left: state.time_left - S(Z) }
  }
}

///|
fn generate_question() -> Question {
  let keys = kana_to_romaji_map.keys().to_array()
  let get_random_int = () => @js.random_int(keys.length())
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

///|
fn play_animation(time_left : @lib.Nat?) -> Unit {
  // let overlay = @js.query_element("#feedbackOverlay")
  let scoreAnimation = @js.query_element("#scoreAnimation")
  let text = match time_left {
    Some(time_left) =>
      match time_left.to_int() {
        6..=7 => "Perfect"
        3..=5 => "Nice"
        _ => "Soso"
      }
    None => "Wrong"
  }
  let class = text.to_lower()
  @js.set_text(scoreAnimation, text)
  @js.add_class(scoreAnimation, class)
  @js.add_class(scoreAnimation, "show")
  let _ = @js.set_timeout(
    () => {
      @js.remove_class(scoreAnimation, class)
      @js.remove_class(scoreAnimation, "show")
    },
    1000,
  )

}
