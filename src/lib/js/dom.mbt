///|
pub type Elm

///|
pub extern "js" fn query_element(selector : String) -> Elm =
  #|selector => document.querySelector(selector)

///|
pub extern "js" fn set_text(elm : Elm, text : String) =
  #|(elm, text) => { elm.textContent = text }

///|
pub extern "js" fn get_text(elm : Elm) -> String =
  #|elm => elm.textContent

///|
pub extern "js" fn set_attribute(
  elm : Elm,
  attr_name : String,
  attr_value : String
) =
  #|(elm, attrName, attrValue) => elm.setAttribute(attrName, attrValue)

///|
pub extern "js" fn get_attribute(elm : Elm, attr_name : String) -> String =
  #|elm => elm.getAttribute(attrName)

///|
pub extern "js" fn set_html(elm : Elm, html : String) =
  #|(elm, html) => { elm.innerHTML = html }

///|
pub extern "js" fn get_html(elm : Elm) -> String = "elm.innerHTML"

///|
pub extern "js" fn matches_element(elm : Elm, selector : String) -> Bool =
  #|(elm, selector) => elm.matches(selector)

///|
pub type Event

///|
pub extern "js" fn add_event_listener(
  elm : Elm,
  event_name : String,
  callback : (Event) -> Unit
) =
  #|(elm, eventName, callback) => elm.addEventListener(eventName, callback)

///|
pub extern "js" fn get_target(event : Event) -> Elm =
  #|event => event.target

///|
pub extern "js" fn on_load(callback : () -> Unit) =
  #|() => window.addEventListener("load", callback)

///|
pub typealias Map[String, String] as TagAttr
