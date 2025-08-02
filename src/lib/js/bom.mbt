///|
pub extern "js" fn play_sound(url : String) =
  #| (url) => new Audio(url).play()

///|
pub extern "js" fn get_local_storage(key : String) -> String =
  #| (key) => localStorage.getItem(key) ?? ""

///|
pub extern "js" fn set_local_storage(key : String, value : String) =
  #| (key, value) => localStorage.setItem(key, value)
