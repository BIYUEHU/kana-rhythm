///|
struct Ref[T] {
  mut value : T
}

///|
let game_state_ref : Ref[GameState] = Ref::{ value: Default::default() }

///|
fn render(dom : @js.Elm, state~ : GameState? = None) -> @js.Elm {
  match state {
    Some(state) if state != game_state_ref.value => {
      game_state_ref.value = state
      view(game_state_ref.value).render(dom)
    }
    None => view(game_state_ref.value).render(dom)
    _ => ()
  }
  dom
}

///|
fn set_base_listener(dom : @js.Elm) -> @js.Elm {
  @js.add_event_listener(dom, "click", event => {
    let { value: game_state } = game_state_ref
    let target = @js.get_target(event)
    render(
      dom,
      state=Some(
        game_state.transform(
          if @js.matches_element(target, "#startBtn") {
            StartGame
          } else if @js.matches_element(target, "#pauseBtn") {
            PauseGame
          } else if @js.matches_element(target, "#resumeBtn") {
            ResumeGame
          } else if @js.matches_element(target, "#choiceBtn") {
            AnswerQuestion(Literal(@js.get_text(target)))
          } else if @js.matches_element(target, "#saveBtn") {
            SaveScore
          } else {
            return
          },
        ),
      ),
    )
    |> ignore
  })
  @js.add_event_listener(dom, "change", event => {
    let { value: game_state } = game_state_ref
    let target = @js.get_target(event)
    let value = @js.get_elm_value(target)
    render(
      dom,
      state=Some(
        game_state.transform(
          if @js.matches_element(target, "#questionCount") {
            let result = value |> @js.parse_int(10)
            if result <= 0 || !(result > 0) {
              return
            }
            SetQuestionNumber(result)
          } else if @js.matches_element(target, "#kanaMode") {
            SetKanaMode(KanaMode::from_string(value))
          } else {
            return
          },
        ),
      ),
    )
    |> ignore
  })
  dom
}

///|
fn set_keyboard_listener(dom : @js.Elm) -> @js.Elm {
  @js.listen_key(@js.get_document(), (key, _) => {
    let { value: game_state } = game_state_ref
    render(
      dom,
      state=Some(
        game_state.transform(
          match key {
            "1" => AnswerQuestion(First)
            "2" => AnswerQuestion(Second)
            "3" => AnswerQuestion(Third)
            "S" => SaveScore
            " " if game_state.status == Playing => PauseGame
            " " if game_state.status == Paused => ResumeGame
            " " if [Idle, Finished].contains(game_state.status) => StartGame
            _ => return
          },
        ),
      ),
    )
    |> ignore
  })
  dom
}

///|
fn set_timer(dom : @js.Elm) -> @js.Elm {
  @js.set_interval(
    () => render(dom, state=Some(game_state_ref.value.transform(TimeTick)))
      |> ignore,
    1000,
  )
  |> ignore
  dom
}

///|
fn main {
  @js.query_element("#app")
  |> set_base_listener
  |> set_keyboard_listener
  |> set_timer
  |> render
  |> ignore
}
