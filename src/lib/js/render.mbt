///|
pub(all) enum Html {
  HSeq(Array[Html])
  HTag(String, TagAttr, Html)
  HTagS(String, TagAttr)
  HText(String)
  HEmpty
} derive(Show)

///|
fn handle_attrs(attrs : TagAttr) -> String {
  attrs
  .to_array()
  .map(attr => match attr.1 {
    "" => attr.0
    value => attr.0 + "=\"" + value + "\""
  })
  .join(" ")
}

///|
pub impl Show for Html with to_string(self : Html) -> String {
  match self {
    HSeq(children) => children.map(child => child.to_string()).join("")
    HTagS(tag_name, attrs) if attrs.is_empty() => "<\{tag_name}/>"
    HTagS(tag_name, attrs) => "<\{tag_name} \{handle_attrs(attrs)} />"
    HTag(tag_name, attrs, children) if attrs.is_empty() =>
      "<\{tag_name}>\{children}</\{tag_name}>"
    HTag(tag_name, attrs, children) =>
      "<\{tag_name} \{handle_attrs(attrs)} >\{children}</\{tag_name}>"
    HText(text) => text
    HEmpty => ""
  }
}

///|
pub(open) trait Renderable {
  to_html(Self) -> Html
}

///|
pub impl Renderable for Html with to_html(self : Html) -> Html {
  self
}

///|
pub fn Html::render(self : Html, elm : Elm) -> Unit {
  set_html(elm, self.to_string())
}

///|
pub fn[T : Renderable] render(value : T, selector : Elm) -> Unit {
  value.to_html().render(selector)
}
