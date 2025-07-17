///|
pub type Elm

///|
pub extern "js" fn query_element(selector : String) -> Elm =
  #|selector => document.querySelector(selector)

///|
pub extern "js" fn set_text(elm : Elm, text : String) -> Unit =
  #|(elm, text) => { elm.textContent = text }

///|
pub extern "js" fn get_text(elm : Elm) -> String =
  #|elm => elm.textContent

///|
pub extern "js" fn set_attribute(
  elm : Elm,
  attr_name : String,
  attr_value : String
) -> Unit =
  #|(elm, attrName, attrValue) => elm.setAttribute(attrName, attrValue)

///|
pub extern "js" fn get_attribute(elm : Elm, attr_name : String) -> String =
  #|elm => elm.getAttribute(attrName)

///|
pub extern "js" fn set_html(elm : Elm, html : String) -> Unit =
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
) -> Unit =
  #|(elm, eventName, callback) => elm.addEventListener(eventName, callback)

///|
pub extern "js" fn get_target(event : Event) -> Elm =
  #|event => event.target

///|
pub extern "js" fn on_load(callback : () -> Unit) =
  #|() => window.addEventListener("load", callback)

///|
pub typealias Map[String, String] as TagAttr

///|
pub extern "js" fn listen_key(
  elm : Elm,
  callback : (String, Event) -> Unit
) -> Unit =
  #|(elm, callback) => elm.addEventListener("keydown", (event) => callback(event.key, event));

///|
pub extern "js" fn get_window() -> Elm =
  #|() => window

///|
pub extern "js" fn get_document() -> Elm =
  #|() => document

///|
pub extern "js" fn add_class(elm : Elm, class_name : String) -> Unit =
  #|(elm, className) => elm.classList.add(className)

///|
pub extern "js" fn remove_class(elm : Elm, class_name : String) -> Unit =
  #|(elm, className) => elm.classList.remove(className)
