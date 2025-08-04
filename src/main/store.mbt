///|
fn get_records() -> Records {
  let raw = STORAGE_KEY_RECORDS |> @js.get_local_storage
  if raw.is_empty() {
    []
  } else {
    raw
    .split("|")
    .filter_map(s => {
      let arr = s.split(",").collect()
      if arr.length() == 4 {
        Some({
          score: arr[0].to_string(),
          question_count: arr[1].to_string(),
          kana_mode: arr[2].to_string(),
          time: arr[3].to_string(),
        })
      } else {
        None
      }
    })
    .collect()
  }
}

///|
fn set_records(records : Records) -> Unit {
  STORAGE_KEY_RECORDS
  |> @js.set_local_storage(
    records
    .map(record => "\{record.score},\{record.question_count},\{record.kana_mode},\{record.time}")
    .join("|"),
  )
}

///|
fn get_question_count() -> Int {
  let result = STORAGE_KEY_QUESTION_COUNT
    |> @js.get_local_storage
    |> @js.parse_int(10)
  if result <= 0 || !(result > 0) {
    TOTAL_QUESTIONS
  } else {
    result
  }
}

///|
fn set_question_count(count : Int) -> Unit {
  STORAGE_KEY_QUESTION_COUNT |> @js.set_local_storage(count.to_string())
}

///|
fn get_kana_mode() -> KanaMode {
  KanaMode::from_string(STORAGE_KEY_KANA_MODE |> @js.get_local_storage)
}

///|
fn set_kana_mode(mode : KanaMode) -> Unit {
  STORAGE_KEY_KANA_MODE |> @js.set_local_storage(mode.to_int().to_string())
}
