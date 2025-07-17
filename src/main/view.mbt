///|
pub fn view(state : GameState) -> @js.Html {
  HTag(
    "div",
    {},
    [
      HTag("div", { "class": "game-state", "id": "gameState" }, [
        HText(
          match state.status {
            Idle => "游戏状态将在这里显示"
            Playing | Paused => {
              let display = if state.status == Playing {
                "playing"
              } else {
                "paused"
              }
              "状态: \{display} | 分数: \{state.score} | 进度: \{state.question_index}/\{TOTAL_QUESTIONS}"
            }
            Finished => "状态：finished"
          },
        ),
      ]),
      HTag("div", { "class": "question", "id": "question" }, [
        match (state.status, state.current_question) {
          (Playing, Some(question)) => HText(question.kana)
          (Finished, _) => HText("游戏结束！")
          _ => HText("按开始按钮开始游戏")
        },
      ]),
      ..[
        @js.HTag(
          "div",
          { "class": "timer", "id": "timer" },
          if state.status == Playing {
            [HText("剩余时间: \{state.time_left}")]
          } else {
            []
          },
        ),
        HTag(
          "div",
          { "class": "choices", "id": "choices" },
          match state.current_question {
            Some(question) =>
              question.choices.map(v => @js.HTag(
                "button",
                { "class": "choice-btn", "id": "choice" },
                [HText(v)],
              ))
            None => []
          },
        ),
      ],
      HTag("div", { "class": "controls" }, [
        HTag("button", { "class": "btn", "id": "startBtn" }, [
          HText("开始游戏"),
        ]),
        HTag("button", { "class": "btn", "id": "pauseBtn" }, [HText("暂停")]),
        HTag("button", { "class": "btn", "id": "resumeBtn" }, [HText("继续")]),
      ]),
      HTag("div", { "class": "scores", "id": "scores" }, []),
    ],
  )
}
