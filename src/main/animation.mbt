///|
fn play_animation(time_left : @lib.Nat?) -> Unit {
  let scoreAnimation = "#scoreAnimation" |> @js.query_element
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
