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
              "Status: \{state.status.to_string().to_lower()} | Score: \{state.score} | Progress: \{state.question_index}/\{state.config_question_count}"
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
        HSeq(
          [
            HTag("h2", {}, HText("Scores")),
            ..{
              let arr = state.records.map(record => @js.HTag(
                "p",
                {},
                HText(
                  "Score: \{record.score} | Question Count: \{record.question_count} | Kana Mode: \{record.kana_mode} | Time: \{record.time}",
                ),
              ))
              if arr.length() > 0 {
                arr
              } else {
                [HText("No scores yet.")]
              }
            },
          ],
        ),
      ),
      HTag(
        "div",
        { "class": "debug" },
        HSeq([
          HTag("strong", {}, HText("Question Count: ")),
          HTag(
            "input",
            {
              "type": "number",
              "id": "questionCount",
              "disabled": state.is_gaming().to_string(),
              "value": state.config_question_count.to_string(),
            },
            HEmpty,
          ),
          HTag("strong", {}, HText("<br />Kana Mode: ")),
          HTag(
            "input",
            {
              "type": "number",
              "id": "kanaMode",
              "disabled": state.is_gaming().to_string(),
              "value": state.config_kana_mode.to_int().to_string(),
            },
            HEmpty,
          ),
          HTag("span", {}, HText(" 1 = Hiragana, 2 = Katakana, 3 = Both ")),
          HTag("h3", {}, HText("Keyboard Shortcuts")),
          HTag(
            "ul",
            {},
            HSeq(
              [
                (["Space"], "Start/Pause/Resume/Restart"),
                (["1", "2", "3"], "Answer Choices"),
                (["S"], "Save Score"),
              ].map(pair => HTag(
                "li",
                {},
                HSeq([
                  HSeq(
                    pair.0.map(x => @js.HTag(
                      "span",
                      { "class": "key" },
                      HText(x),
                    )),
                  ),
                  HText(": \{pair.1}"),
                ]),
              )),
            ),
          ),
          HTag("h3", {}, HText("About")),
          HTag(
            "ul",
            {},
            HSeq([
              HTag(
                "li",
                {},
                HSeq([
                  HTag(
                    "span",
                    {},
                    HText("This is a rhythm game to practice Kana base on "),
                  ),
                  HTag(
                    "a",
                    {
                      "href": "https://www.moonbitlang.com/",
                      "target": "_blank",
                      "style": "color: #BA2583",
                    },
                    HText("MoonBit"),
                  ),
                  HTag("span", {}, HText(" Language")),
                ]),
              ),
              HTag(
                "li",
                {},
                HSeq([
                  HTag("span", {}, HText("Made with ❤️ by ")),
                  HTag(
                    "a",
                    {
                      "href": "https://github.com/BIYUEHU",
                      "target": "_blank",
                      "style": "color: deepskyblue;",
                    },
                    HText("Arimura Sena"),
                  ),
                ]),
              ),
              HTag(
                "li",
                {},
                HSeq([
                  HTag("span", {}, HText("Open Source on ")),
                  HTag(
                    "a",
                    {
                      "href": "https://github.com/BIYUEHU/kana-rhythm",
                      "target": "_blank",
                      "style": "color: gray",
                    },
                    HText("Github"),
                  ),
                ]),
              ),
            ]),
          ),
        ]),
      ),
    ],
  )
}
