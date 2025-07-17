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
  timer : Int?
} derive(Eq)

///|
enum GameAction {
  StartGame
  PauseGame
  ResumeGame
  AnswerQuestion(String)
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
    timer: None,
  }
}

///|
fn transition(state : GameState, action : GameAction) -> GameState {
  println(state.status)
  match (state.status, action) {
    (Idle, StartGame) =>
      { ..state, status: Playing, current_question: Some(generate_question()) }
    (Playing, PauseGame) => { ..state, status: Paused }
    (Playing, ResumeGame) => { ..state, status: Playing }
    (Playing, AnswerQuestion(answer)) => answer_question(state, answer)
    (Playing, TimeTick) => handle_time_tick(state)
    _ => state
  }
}

///|
fn answer_question(state : GameState, answer : String) -> GameState {
  match state.current_question {
    Some(question) => {
      let score = if answer == question.romaji {
        @lib.S(state.score)
      } else {
        state.score
      }
      let question_index = @lib.S(state.question_index)
      if question_index >= @lib.Nat::from_int(TOTAL_QUESTIONS) {
        { ..state, status: Finished, score }
      } else {
        {
          ..state,
          current_question: Some(generate_question()),
          status: Playing,
          score,
          question_index,
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
    answer_question(state, "")
  } else {
    { ..state, time_left: state.time_left - S(Z) }
  }
}

///|
fn generate_question() -> Question {
  let keys = kana_to_romaji_map.keys().to_array()
  let get_random_int = () => @random.Rand::int(
    @random.Rand::new(),
    limit=keys.length(),
  )
  let num1 = get_random_int()
  let num2 = loop get_random_int() {
    target if target != num1 => target
    _ => continue get_random_int()
  }
  let num3 = loop get_random_int() {
    target if target != num1 && target != num2 => target
    _ => continue get_random_int()
  }
  {
    kana: keys[num1],
    romaji: kana_to_romaji_map.get(keys[num1]).unwrap(),
    choices: [num1, num2, num3]
    .shuffle(rand=upper => {
      let rng = @random.Rand::new()
      rng.int(limit=upper)
    })
    .map(index => kana_to_romaji_map.get(keys[index]).unwrap()),
  }
}

///|
fn main {
  println("hello world")
  let mut game_state : GameState = Default::default()
  let bind_dom = @js.query_element("#app")
  let render_page = () => view(game_state).render(bind_dom)
  @js.add_event_listener(bind_dom, "click", event => {
    println("event")
    let target = @js.get_target(event)
    let state = if @js.matches_element(target, "#startBtn") {
      transition(game_state, StartGame)
    } else if @js.matches_element(target, "#pauseBtn") {
      transition(game_state, PauseGame)
    } else if @js.matches_element(target, "#resumeBtn") {
      transition(game_state, ResumeGame)
    } else if @js.matches_element(target, "#choice") {
      transition(game_state, AnswerQuestion(@js.get_text(target)))
    } else {
      return
    }
    if state != game_state {
      game_state = state
      render_page()
    }
  })
  render_page()
}
