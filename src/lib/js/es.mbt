///|
pub extern "js" fn set_timeout(callback : () -> Unit, delay : Int) -> Int = "setTimeout"

///|
pub extern "js" fn set_interval(callback : () -> Unit, delay : Int) -> Int = "setInterval"

///|
pub extern "js" fn clear_timeout(handle : Int) = "clearTimeout"

///|
pub extern "js" fn clear_interval(handle : Int) = "clearInterval"

///|
pub extern "js" fn random_int(limit : Int) -> Int =
  #|limit => Math.floor(Math.random() * limit);
