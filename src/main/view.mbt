///|
fn view(state : GameState) -> @js.Html {
  HSeq(
    [
      HTag(
        "div",
        { "class": "game-state", "id": "gameState" },
        HText(
          match state.status {
            Idle => "Game states will be displayed here."
            Playing | Paused =>
              "Status: \{state.status.to_string().to_lower()} | Score: \{state.score} | Progress: \{state.question_index}/\{TOTAL_QUESTIONS}"
            Finished => "Status: finished"
          },
        ),
      ),
      HTag(
        "div",
        { "class": "question", "id": "question" },
        match (state.status, state.current_question) {
          (Playing, Some(question)) => HText(question.kana)
          (Finished, _) =>
            HSeq([
              HText("Game Over!"),
              HTag("br", {}, HEmpty),
              HTag("span", {}, HText("You scored \{state.score} points!")),
            ])
          _ => HText("Press Space to begin the game")
        },
      ),
      ..[
        @js.HTag(
          "div",
          { "class": "timer", "id": "timer" },
          if state.status == Playing {
            HText("Time left: \{state.time_left}")
          } else {
            HEmpty
          },
        ),
        HTag(
          "div",
          { "class": "choices", "id": "choices" },
          match (state.status, state.current_question) {
            (Playing, Some(question)) =>
              HSeq(
                question.choices.map(v => @js.HTag(
                  "button",
                  { "class": "choice-btn", "id": "choiceBtn" },
                  HText(v),
                )),
              )
            _ => HEmpty
          },
        ),
      ],
      HTag(
        "div",
        { "class": "controls" },
        HSeq(
          match state.status {
            Playing =>
              [
                HTag(
                  "button",
                  { "class": "btn", "id": "pauseBtn" },
                  HText("Pause"),
                ),
                HTag(
                  "button",
                  { "class": "btn", "id": "startBtn" },
                  HText("Restart"),
                ),
              ]
            Paused =>
              [
                HTag(
                  "button",
                  { "class": "btn", "id": "resumeBtn" },
                  HText("Resume"),
                ),
                HTag(
                  "button",
                  { "class": "btn", "id": "startBtn" },
                  HText("Restart"),
                ),
              ]
            Finished =>
              [
                HTag(
                  "button",
                  { "class": "btn", "id": "startBtn" },
                  HText("Play Again"),
                ),
                HTag(
                  "button",
                  { "class": "btn", "id": "saveBtn" },
                  HText("Save Score"),
                ),
              ]
            Idle =>
              [
                HTag(
                  "button",
                  { "class": "btn", "id": "startBtn" },
                  HText("Start Game"),
                ),
              ]
          },
        ),
      ),
      HTag(
        "div",
        { "class": "scores", "id": "scores" },
        {
          let arr = state.records.map(state => @js.HText(
            "Score: \{state.score} | Time: \{state.timestamp}<br />",
          ))
          if arr.length() > 0 {
            HSeq(arr)
          } else {
            HText("No scores yet.")
          }
        },
      ),
    ],
  )
}
