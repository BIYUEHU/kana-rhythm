///|
struct Ref[T] {
  mut value : T
}

///|
let game_state_ref : Ref[GameState] = Ref::{
  value: { ..Default::default(), records: load_records() },
}

///|
fn render(dom : @js.Elm, state~ : GameState? = None) -> Unit {
  match state {
    Some(state) if state != game_state_ref.value => {
      game_state_ref.value = state
      view(game_state_ref.value).render(dom)
    }
    None => view(game_state_ref.value).render(dom)
    _ => ()
  }
}

///|
fn set_click_listener(dom : @js.Elm) -> Unit {
  @js.add_event_listener(dom, "click", event => {
    let { value: game_state } = game_state_ref
    let target = @js.get_target(event)
    render(
      dom,
      state=Some(
        transition(
          game_state,
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
  })
}

///|
fn set_keyboard_listener(dom : @js.Elm) -> Unit {
  @js.listen_key(@js.get_document(), (key, _) => {
    let { value: game_state } = game_state_ref
    render(
      dom,
      state=Some(
        transition(
          game_state,
          match key {
            "1" => AnswerQuestion(First)
            "2" => AnswerQuestion(Second)
            "3" => AnswerQuestion(Third)
            " " if game_state.status == Playing => PauseGame
            " " if game_state.status == Paused => ResumeGame
            " " if [Idle, Finished].contains(game_state.status) => StartGame
            _ => return
          },
        ),
      ),
    )
  })
}

///|
fn set_timer(dom : @js.Elm) -> Unit {
  let _ = @js.set_interval(
    () => render(dom, state=Some(transition(game_state_ref.value, TimeTick))),
    1000,
  )

}

///|
fn main {
  let bind_dom = @js.query_element("#app")
  set_click_listener(bind_dom)
  set_keyboard_listener(bind_dom)
  set_timer(bind_dom)
  render(bind_dom)
}
