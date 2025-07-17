///|
pub extern "js" fn set_timeout(callback : () -> Unit, delay : Int) -> Int = "setTimeout"

///|
pub extern "js" fn clear_timeout(handle : Int) = "clearTimeout"
