///|
fn load_records() -> Records {
  let raw = LOCAL_STORAGE_KEY |> @js.get_local_storage
  if raw.is_empty() {
    []
  } else {
    raw
    .split("|")
    .filter_map(s => {
      let arr = s.split(",").collect()
      if arr.length() == 2 {
        Some({ score: arr[0].to_string(), timestamp: arr[1].to_string() })
      } else {
        None
      }
    })
    .collect()
  }
}

///|
fn save_records(records : Records) -> Unit {
  LOCAL_STORAGE_KEY
  |> @js.set_local_storage(
    records.map(record => "\{record.score},\{record.timestamp}").join("|"),
  )
}
