class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  for (let i = 0; i < a; i++) {
    arr[i] = b;
  }
  return arr;
}
const moonbitlang$core$builtin$$JSArray$push = (arr, val) => { arr.push(val); };
const $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$0$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$0$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$0$.prototype.$tag = 1;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$0$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$0$.prototype.$tag = 2;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$0$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$0$.prototype.$tag = 3;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$0$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$0$.prototype.$tag = 4;
const moonbitlang$core$array$$JSArray$copy = (arr) => arr.slice(0);
const $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$1$ = { $tag: 0 };
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$1$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Break$1$.prototype.$tag = 1;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$1$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$1$.prototype.$tag = 2;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$1$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$Error$1$.prototype.$tag = 3;
function $64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$1$(param0) {
  this._0 = param0;
}
$64$moonbitlang$47$core$47$builtin$46$ForeachResult$JumpOuter$1$.prototype.$tag = 4;
const $64$himeno$47$kana$45$rhythm$47$lib$46$Nat$Z = { $tag: 0 };
function $64$himeno$47$kana$45$rhythm$47$lib$46$Nat$S(param0) {
  this._0 = param0;
}
$64$himeno$47$kana$45$rhythm$47$lib$46$Nat$S.prototype.$tag = 1;
const himeno$kana$45$rhythm$lib$js$$set_html = (elm, html) => { elm.innerHTML = html };
const himeno$kana$45$rhythm$lib$js$$set_timeout = setTimeout;
const himeno$kana$45$rhythm$lib$js$$set_interval = setInterval;
const himeno$kana$45$rhythm$lib$js$$random_int = limit => Math.floor(Math.random() * limit);
const himeno$kana$45$rhythm$lib$js$$parse_int = (string, radix) => parseInt(string, radix);
const himeno$kana$45$rhythm$lib$js$$query_element = selector => document.querySelector(selector);
const himeno$kana$45$rhythm$lib$js$$set_text = (elm, text) => { elm.textContent = text };
const himeno$kana$45$rhythm$lib$js$$get_text = elm => elm.textContent;
const himeno$kana$45$rhythm$lib$js$$matches_element = (elm, selector) => elm.matches(selector);
const himeno$kana$45$rhythm$lib$js$$add_event_listener = (elm, eventName, callback) => elm.addEventListener(eventName, callback);
const himeno$kana$45$rhythm$lib$js$$get_target = event => event.target;
const himeno$kana$45$rhythm$lib$js$$get_elm_value = elm => elm.value;
const himeno$kana$45$rhythm$lib$js$$listen_key = (elm, callback) => elm.addEventListener("keydown", (event) => callback(event.key, event));
const himeno$kana$45$rhythm$lib$js$$get_document = () => document;
const himeno$kana$45$rhythm$lib$js$$add_class = (elm, className) => elm.classList.add(className);
const himeno$kana$45$rhythm$lib$js$$remove_class = (elm, className) => elm.classList.remove(className);
const himeno$kana$45$rhythm$lib$js$$get_date_now = () => new Date();;
const himeno$kana$45$rhythm$lib$js$$get_date_year = date => date.getFullYear();;
const himeno$kana$45$rhythm$lib$js$$get_date_month = date => date.getMonth();;
const himeno$kana$45$rhythm$lib$js$$get_date_day = date => date.getDate();;
const himeno$kana$45$rhythm$lib$js$$get_date_hours = date => date.getHours();;
const himeno$kana$45$rhythm$lib$js$$get_date_minutes = date => date.getMinutes();;
const himeno$kana$45$rhythm$lib$js$$get_date_seconds = date => date.getSeconds();;
const himeno$kana$45$rhythm$lib$js$$play_sound = (url) => new Audio(url).play();
const himeno$kana$45$rhythm$lib$js$$get_local_storage = (key) => localStorage.getItem(key) ?? "";
const himeno$kana$45$rhythm$lib$js$$set_local_storage = (key, value) => localStorage.setItem(key, value);
function $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HSeq(param0) {
  this._0 = param0;
}
$64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HSeq.prototype.$tag = 0;
function $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
$64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag.prototype.$tag = 1;
function $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTagS(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTagS.prototype.$tag = 2;
function $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText(param0) {
  this._0 = param0;
}
$64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText.prototype.$tag = 3;
const $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HEmpty = { $tag: 4 };
const AnswerQuestionType$First = { $tag: 0 };
const AnswerQuestionType$Second = { $tag: 1 };
const AnswerQuestionType$Third = { $tag: 2 };
function AnswerQuestionType$Literal(param0) {
  this._0 = param0;
}
AnswerQuestionType$Literal.prototype.$tag = 3;
const AnswerQuestionType$Timeout = { $tag: 4 };
const GameAction$StartGame = { $tag: 0 };
const GameAction$PauseGame = { $tag: 1 };
const GameAction$ResumeGame = { $tag: 2 };
function GameAction$AnswerQuestion(param0) {
  this._0 = param0;
}
GameAction$AnswerQuestion.prototype.$tag = 3;
const GameAction$TimeTick = { $tag: 4 };
const GameAction$SaveScore = { $tag: 5 };
function GameAction$SetQuestionNumber(param0) {
  this._0 = param0;
}
GameAction$SetQuestionNumber.prototype.$tag = 6;
function GameAction$SetKanaMode(param0) {
  this._0 = param0;
}
GameAction$SetKanaMode.prototype.$tag = 7;
const himeno$kana$45$rhythm$lib$js$$handle_attrs$46$42$bind$124$159 = " ";
const himeno$kana$45$rhythm$lib$js$$to_string$46$42$bind$124$160 = "";
const himeno$kana$45$rhythm$main$$get_records$46$42$bind$124$155 = "|";
const himeno$kana$45$rhythm$main$$get_records$46$42$bind$124$160 = ",";
const himeno$kana$45$rhythm$main$$set_records$46$42$bind$124$161 = "|";
const himeno$kana$45$rhythm$main$$game_state_ref = { value: moonbitlang$core$builtin$$Default$default$0$() };
const himeno$kana$45$rhythm$main$$hiragana_to_romaji_map = moonbitlang$core$builtin$$Map$from_array$1$([{ _0: "あ", _1: "a" }, { _0: "い", _1: "i" }, { _0: "う", _1: "u" }, { _0: "え", _1: "e" }, { _0: "お", _1: "o" }, { _0: "か", _1: "ka" }, { _0: "き", _1: "ki" }, { _0: "く", _1: "ku" }, { _0: "け", _1: "ke" }, { _0: "こ", _1: "ko" }, { _0: "さ", _1: "sa" }, { _0: "し", _1: "shi" }, { _0: "す", _1: "su" }, { _0: "せ", _1: "se" }, { _0: "そ", _1: "so" }, { _0: "た", _1: "ta" }, { _0: "ち", _1: "chi" }, { _0: "つ", _1: "tsu" }, { _0: "て", _1: "te" }, { _0: "と", _1: "to" }, { _0: "な", _1: "na" }, { _0: "に", _1: "ni" }, { _0: "ぬ", _1: "nu" }, { _0: "ね", _1: "ne" }, { _0: "の", _1: "no" }, { _0: "は", _1: "ha" }, { _0: "ひ", _1: "hi" }, { _0: "ふ", _1: "fu" }, { _0: "へ", _1: "he" }, { _0: "ほ", _1: "ho" }, { _0: "ま", _1: "ma" }, { _0: "み", _1: "mi" }, { _0: "む", _1: "mu" }, { _0: "め", _1: "me" }, { _0: "も", _1: "mo" }, { _0: "や", _1: "ya" }, { _0: "ゆ", _1: "yu" }, { _0: "よ", _1: "yo" }, { _0: "ら", _1: "ra" }, { _0: "り", _1: "ri" }, { _0: "る", _1: "ru" }, { _0: "れ", _1: "re" }, { _0: "ろ", _1: "ro" }, { _0: "わ", _1: "wa" }, { _0: "を", _1: "wo" }, { _0: "ん", _1: "n" }, { _0: "が", _1: "ga" }, { _0: "ぎ", _1: "gi" }, { _0: "ぐ", _1: "gu" }, { _0: "げ", _1: "ge" }, { _0: "ご", _1: "go" }, { _0: "ざ", _1: "za" }, { _0: "じ", _1: "ji" }, { _0: "ず", _1: "zu" }, { _0: "ぜ", _1: "ze" }, { _0: "ぞ", _1: "zo" }, { _0: "だ", _1: "da" }, { _0: "ぢ", _1: "ji" }, { _0: "づ", _1: "zu" }, { _0: "で", _1: "de" }, { _0: "ど", _1: "do" }, { _0: "ば", _1: "ba" }, { _0: "び", _1: "bi" }, { _0: "ぶ", _1: "bu" }, { _0: "べ", _1: "be" }, { _0: "ぼ", _1: "bo" }, { _0: "ぱ", _1: "pa" }, { _0: "ぴ", _1: "pi" }, { _0: "ぷ", _1: "pu" }, { _0: "ぺ", _1: "pe" }, { _0: "ぽ", _1: "po" }]);
const himeno$kana$45$rhythm$main$$katakana_to_romaji_map = moonbitlang$core$builtin$$Map$from_array$1$([{ _0: "ア", _1: "a" }, { _0: "イ", _1: "i" }, { _0: "ウ", _1: "u" }, { _0: "エ", _1: "e" }, { _0: "オ", _1: "o" }, { _0: "カ", _1: "ka" }, { _0: "キ", _1: "ki" }, { _0: "ク", _1: "ku" }, { _0: "ケ", _1: "ke" }, { _0: "コ", _1: "ko" }, { _0: "サ", _1: "sa" }, { _0: "シ", _1: "shi" }, { _0: "ス", _1: "su" }, { _0: "セ", _1: "se" }, { _0: "ソ", _1: "so" }, { _0: "タ", _1: "ta" }, { _0: "チ", _1: "chi" }, { _0: "ツ", _1: "tsu" }, { _0: "テ", _1: "te" }, { _0: "ト", _1: "to" }, { _0: "ナ", _1: "na" }, { _0: "ニ", _1: "ni" }, { _0: "ヌ", _1: "nu" }, { _0: "ネ", _1: "ne" }, { _0: "ノ", _1: "no" }, { _0: "ハ", _1: "ha" }, { _0: "ヒ", _1: "hi" }, { _0: "フ", _1: "fu" }, { _0: "ヘ", _1: "he" }, { _0: "ホ", _1: "ho" }, { _0: "マ", _1: "ma" }, { _0: "ミ", _1: "mi" }, { _0: "ム", _1: "mu" }, { _0: "メ", _1: "me" }, { _0: "モ", _1: "mo" }, { _0: "ヤ", _1: "ya" }, { _0: "ユ", _1: "yu" }, { _0: "ヨ", _1: "yo" }, { _0: "ラ", _1: "ra" }, { _0: "リ", _1: "ri" }, { _0: "ル", _1: "ru" }, { _0: "レ", _1: "re" }, { _0: "ロ", _1: "ro" }, { _0: "ワ", _1: "wa" }, { _0: "ヲ", _1: "wo" }, { _0: "ン", _1: "n" }, { _0: "ガ", _1: "ga" }, { _0: "ギ", _1: "gi" }, { _0: "グ", _1: "gu" }, { _0: "ゲ", _1: "ge" }, { _0: "ゴ", _1: "go" }, { _0: "ザ", _1: "za" }, { _0: "ジ", _1: "ji" }, { _0: "ズ", _1: "zu" }, { _0: "ゼ", _1: "ze" }, { _0: "ゾ", _1: "zo" }, { _0: "ダ", _1: "da" }, { _0: "ヂ", _1: "ji" }, { _0: "ヅ", _1: "zu" }, { _0: "デ", _1: "de" }, { _0: "ド", _1: "do" }, { _0: "バ", _1: "ba" }, { _0: "ビ", _1: "bi" }, { _0: "ブ", _1: "bu" }, { _0: "ベ", _1: "be" }, { _0: "ボ", _1: "bo" }, { _0: "パ", _1: "pa" }, { _0: "ピ", _1: "pi" }, { _0: "プ", _1: "pu" }, { _0: "ペ", _1: "pe" }, { _0: "ポ", _1: "po" }]);
const _self = [];
moonbitlang$core$array$$Array$push_iter$2$(_self, moonbitlang$core$array$$Array$iter$2$(moonbitlang$core$builtin$$Map$to_array$1$(himeno$kana$45$rhythm$main$$hiragana_to_romaji_map)));
moonbitlang$core$array$$Array$push_iter$2$(_self, moonbitlang$core$array$$Array$iter$2$(moonbitlang$core$builtin$$Map$to_array$1$(himeno$kana$45$rhythm$main$$katakana_to_romaji_map)));
const himeno$kana$45$rhythm$main$$kana_to_romaji_map = moonbitlang$core$builtin$$Map$of$1$(moonbitlang$core$array$$FixedArray$from_array$2$(_self));
function moonbitlang$core$abort$$abort$3$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$4$(msg) {
  return $panic();
}
function moonbitlang$core$abort$$abort$5$(msg) {
  $panic();
}
function moonbitlang$core$builtin$$op_le$6$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$6$(self_, other) <= 0;
}
function moonbitlang$core$int$$Int$next_power_of_two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$Map$new$1$(capacity) {
  const capacity$2 = moonbitlang$core$int$$Int$next_power_of_two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return { entries: _bind$3, size: 0, capacity: capacity$2, capacity_mask: _bind, grow_at: _bind$2, head: _bind$4, tail: -1 };
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$1$(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    const _p = _tmp[_bind];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function moonbitlang$core$builtin$$Map$set_entry$1$(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function moonbitlang$core$builtin$$Map$push_away$1$(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      moonbitlang$core$builtin$$Map$set_entry$1$(self, entry$2, idx$2);
      break;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        moonbitlang$core$builtin$$Map$set_entry$1$(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$set$1$(self, key, value) {
  if (self.size >= self.grow_at) {
    moonbitlang$core$builtin$$Map$grow$1$(self);
  }
  const hash = moonbitlang$core$builtin$$Hash$hash$7$(key);
  let _bind;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind$2 = _tmp$3[idx];
    if (_bind$2 === undefined) {
      _bind = { _0: idx, _1: psl };
      break;
    } else {
      const _Some = _bind$2;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        moonbitlang$core$builtin$$Map$push_away$1$(self, idx, _curr_entry);
        _bind = { _0: idx, _1: psl };
        break;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
  const _idx = _bind._0;
  const _psl = _bind._1;
  const _bind$2 = self.tail;
  const _bind$3 = undefined;
  const entry = { prev: _bind$2, next: _bind$3, psl: _psl, hash: hash, key: key, value: value };
  moonbitlang$core$builtin$$Map$add_entry_to_tail$1$(self, _idx, entry);
}
function moonbitlang$core$builtin$$Map$grow$1$(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      moonbitlang$core$builtin$$Map$set$1$(self, _key, _value);
      _tmp = _next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$from_array$1$(arr) {
  const m = moonbitlang$core$builtin$$Map$new$1$(arr.length);
  const _p = arr.length;
  let _tmp = 0;
  while (true) {
    const _p$2 = _tmp;
    if (_p$2 < _p) {
      const _p$3 = arr[_p$2];
      const e = _p$3;
      moonbitlang$core$builtin$$Map$set$1$(m, e._0, e._1);
      _tmp = _p$2 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$builtin$$StringBuilder$new(size_hint) {
  return { val: "" };
}
function moonbitlang$core$builtin$$Logger$write_char$8$(self, ch) {
  const _bind = self;
  _bind.val = `${_bind.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$builtin$$op_notequal$0$(x, y) {
  return !moonbitlang$core$builtin$$Eq$op_equal$0$(x, y);
}
function moonbitlang$core$array$$Array$op_get$9$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$op_get$3$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$array$$Array$op_get$2$(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function moonbitlang$core$builtin$$Logger$write_string$8$(self, str) {
  const _bind = self;
  _bind.val = `${_bind.val}${str}`;
}
function moonbitlang$core$builtin$$Hasher$combine$9$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$9$(value, self);
}
function moonbitlang$core$builtin$$Hasher$avalanche(self) {
  let acc = self.acc;
  acc = acc ^ (acc >>> 15 | 0);
  acc = Math.imul(acc, -2048144777) | 0;
  acc = acc ^ (acc >>> 13 | 0);
  acc = Math.imul(acc, -1028477379) | 0;
  acc = acc ^ (acc >>> 16 | 0);
  return acc;
}
function moonbitlang$core$builtin$$Hasher$finalize(self) {
  return moonbitlang$core$builtin$$Hasher$avalanche(self);
}
function moonbitlang$core$builtin$$Hasher$new(seed) {
  return { acc: (seed >>> 0) + (374761393 >>> 0) | 0 };
}
function moonbitlang$core$builtin$$Hash$hash$7$(self) {
  const _self$2 = moonbitlang$core$builtin$$Hasher$new(0);
  moonbitlang$core$builtin$$Hasher$combine$9$(_self$2, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self$2);
}
function moonbitlang$core$builtin$$Show$to_string$10$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new(0);
  moonbitlang$core$builtin$$Show$output$11$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$8$, method_1: moonbitlang$core$builtin$$Logger$write_substring$8$, method_2: moonbitlang$core$builtin$$Logger$write_char$8$ });
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$12$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new(0);
  const _p = { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$8$, method_1: moonbitlang$core$builtin$$Logger$write_substring$8$, method_2: moonbitlang$core$builtin$$Logger$write_char$8$ };
  if (self) {
    _p.method_0(_p.self, "true");
  } else {
    _p.method_0(_p.self, "false");
  }
  return logger.val;
}
function moonbitlang$core$builtin$$Show$to_string$13$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new(0);
  moonbitlang$core$builtin$$Show$output$14$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$8$, method_1: moonbitlang$core$builtin$$Logger$write_substring$8$, method_2: moonbitlang$core$builtin$$Logger$write_char$8$ });
  return logger.val;
}
function moonbitlang$core$builtin$$output$46$write_digits$124$1825(_env, num) {
  const radix = _env._1;
  const logger = _env._0;
  const num2 = num / radix | 0;
  if (num2 !== 0) {
    moonbitlang$core$builtin$$output$46$write_digits$124$1825(_env, num2);
  }
  const _p = "0123456789abcdefghijklmnopqrstuvwxyz";
  const _p$2 = num % radix | 0;
  const _p$3 = _p$2 < 0 ? 0 - _p$2 | 0 : _p$2;
  $bound_check(_p, _p$3);
  logger.method_2(logger.self, _p.charCodeAt(_p$3));
}
function moonbitlang$core$int$$Int$output(self, logger, radix) {
  if (self < 0) {
    logger.method_2(logger.self, 45);
  }
  const _env = { _0: logger, _1: radix };
  moonbitlang$core$builtin$$output$46$write_digits$124$1825(_env, self < 0 ? 0 - self | 0 : self);
}
function moonbitlang$core$int$$Int$output_size_hint(radix) {
  return radix >= 2 && radix < 7 ? 36 : radix >= 8 && radix < 15 ? 18 : radix >= 16 && radix <= 36 ? 10 : moonbitlang$core$abort$$abort$4$("radix must be between 2 and 36");
}
function moonbitlang$core$int$$Int$to_string(self, radix) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new(moonbitlang$core$int$$Int$output_size_hint(radix));
  moonbitlang$core$int$$Int$output(self, { self: buf, method_0: moonbitlang$core$builtin$$Logger$write_string$8$, method_1: moonbitlang$core$builtin$$Logger$write_substring$8$, method_2: moonbitlang$core$builtin$$Logger$write_char$8$ }, radix);
  return buf.val;
}
function moonbitlang$core$builtin$$Show$to_string$4$(self) {
  return moonbitlang$core$int$$Int$to_string(self, 10);
}
function moonbitlang$core$string$$String$substring(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    end$2 = _Some;
  }
  return start >= 0 && (start <= end$2 && end$2 <= len) ? self.substring(start, end$2) : $panic();
}
function moonbitlang$core$builtin$$Logger$write_substring$8$(self, str, start, len) {
  const _bind = self;
  _bind.val = `${_bind.val}${moonbitlang$core$string$$String$substring(str, start, start + len | 0)}`;
}
function moonbitlang$core$array$$Array$iter$15$(self) {
  const _p = (yield_) => {
    const _len = self.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const v = self[_i];
        const _bind = yield_(v);
        if (_bind === 1) {
        } else {
          return 0;
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  };
  return _p;
}
function moonbitlang$core$array$$Array$iter$16$(self) {
  const _p = (yield_) => {
    const _len = self.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const v = self[_i];
        const _bind = yield_(v);
        if (_bind === 1) {
        } else {
          return 0;
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  };
  return _p;
}
function moonbitlang$core$array$$Array$iter$2$(self) {
  const _p = (yield_) => {
    const _len = self.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const v = self[_i];
        const _bind = yield_(v);
        if (_bind === 1) {
        } else {
          return 0;
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Eq$op_equal$17$(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return moonbitlang$core$builtin$$Eq$op_equal$18$(_x, _y);
    }
  }
}
function moonbitlang$core$builtin$$Map$get$1$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$7$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$keys$1$(self) {
  const _p = (yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _next = _x.next;
        const _bind = yield_(_key);
        if (_bind === 1) {
          _tmp = _next;
          continue;
        } else {
          return 0;
        }
      }
    }
  };
  return _p;
}
function moonbitlang$core$builtin$$Map$to_array$1$(self) {
  const arr = new Array(self.size);
  let i = 0;
  let _tmp = self.head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      break;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _next = _x.next;
      arr[i] = { _0: _key, _1: _value };
      i = i + 1 | 0;
      _tmp = _next;
      continue;
    }
  }
  return arr;
}
function moonbitlang$core$builtin$$Map$of$1$(arr) {
  const length = arr.length;
  const m = moonbitlang$core$builtin$$Map$new$1$(length);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < length) {
      $bound_check(arr, i);
      const e = arr[i];
      moonbitlang$core$builtin$$Map$set$1$(m, e._0, e._1);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function moonbitlang$core$array$$Array$push$15$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$16$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$9$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$3$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$2$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$builtin$$Iter$run$3$(self, f) {
  const _func = self;
  return _func(f);
}
function moonbitlang$core$builtin$$Iter$each$19$(self, f) {
  const _foreach_result = { val: $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$0$ };
  self((a) => {
    f(a);
    return 1;
  });
  const _tmp = _foreach_result.val;
  switch (_tmp.$tag) {
    case 0: {
      return;
    }
    case 1: {
      const _break = _tmp;
      _break._0;
      return;
    }
    case 2: {
      const _return = _tmp;
      return _return._0;
    }
    case 3: {
      $panic();
      return;
    }
    default: {
      $panic();
      return;
    }
  }
}
function moonbitlang$core$builtin$$Iter$each$20$(self, f) {
  const _foreach_result = { val: $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$0$ };
  self((a) => {
    f(a);
    return 1;
  });
  const _tmp = _foreach_result.val;
  switch (_tmp.$tag) {
    case 0: {
      return;
    }
    case 1: {
      const _break = _tmp;
      _break._0;
      return;
    }
    case 2: {
      const _return = _tmp;
      return _return._0;
    }
    case 3: {
      $panic();
      return;
    }
    default: {
      $panic();
      return;
    }
  }
}
function moonbitlang$core$builtin$$Iter$filter_map$21$(self, f) {
  return (yield_) => moonbitlang$core$builtin$$Iter$run$3$(self, (a) => {
    const _bind = f(a);
    if (_bind === undefined) {
      return 1;
    } else {
      const _Some = _bind;
      const _b = _Some;
      return yield_(_b);
    }
  });
}
function moonbitlang$core$builtin$$Iter$to_array$9$(self) {
  const result = [];
  self((e) => {
    moonbitlang$core$array$$Array$push$9$(result, e);
    return 1;
  });
  return result;
}
function moonbitlang$core$builtin$$Iter$collect$16$(self) {
  const result = [];
  moonbitlang$core$builtin$$Iter$each$19$(self, (e) => {
    moonbitlang$core$array$$Array$push$16$(result, e);
  });
  return result;
}
function moonbitlang$core$builtin$$Iter$collect$3$(self) {
  const result = [];
  moonbitlang$core$builtin$$Iter$each$20$(self, (e) => {
    moonbitlang$core$array$$Array$push$3$(result, e);
  });
  return result;
}
function moonbitlang$core$builtin$$Hasher$consume4(self, input) {
  const _p = (self.acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0;
  const _p$2 = 17;
  self.acc = Math.imul(_p << _p$2 | (_p >>> (32 - _p$2 | 0) | 0), 668265263) | 0;
}
function moonbitlang$core$builtin$$Hasher$combine_uint(self, value) {
  self.acc = (self.acc >>> 0) + (4 >>> 0) | 0;
  moonbitlang$core$builtin$$Hasher$consume4(self, value);
}
function moonbitlang$core$builtin$$Hasher$combine_string(self, value) {
  const _end863 = value.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end863) {
      moonbitlang$core$builtin$$Hasher$combine_uint(self, value.charCodeAt(i));
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$Hash$hash_combine$9$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_string(hasher, self);
}
function moonbitlang$core$builtin$$println$9$(input) {
  console.log(input);
}
function moonbitlang$core$builtin$$Eq$op_equal$22$(self, other) {
  const self_len = self.length;
  const other_len = other.length;
  if (self_len === other_len) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < self_len) {
        if (moonbitlang$core$builtin$$Eq$op_equal$16$(self[i], other[i])) {
        } else {
          return false;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
function moonbitlang$core$builtin$$Eq$op_equal$23$(self, other) {
  const self_len = self.length;
  const other_len = other.length;
  if (self_len === other_len) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < self_len) {
        if (self[i] === other[i]) {
        } else {
          return false;
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
function moonbitlang$core$array$$Array$contains$11$(self, value) {
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      if (moonbitlang$core$builtin$$Eq$op_equal$11$(v, value)) {
        return true;
      }
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function moonbitlang$core$array$$Array$swap$4$(self, i, j) {
  if (i >= self.length || (j >= self.length || (i < 0 || j < 0))) {
    const len = self.length;
    moonbitlang$core$abort$$abort$5$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$4$(len)} but the index is (${moonbitlang$core$builtin$$Show$to_string$4$(i)}, ${moonbitlang$core$builtin$$Show$to_string$4$(j)})`);
  }
  const temp = self[i];
  self[i] = self[j];
  self[j] = temp;
}
function moonbitlang$core$array$$ArrayView$join(self, separator) {
  if (self.len === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _bind = self.buf;
    const _bind$2 = 1 + self.start | 0;
    const _some = self.len;
    const _bind$3 = _some - 1 | 0;
    const _x = { buf: _bind, start: _bind$2, len: _bind$3 };
    let size_hint = _hd.length;
    const _len = _x.len;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const s = _bind[_bind$2 + _i | 0];
        size_hint = size_hint + (s.length + (separator.end - separator.start | 0) | 0) | 0;
        _tmp = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    size_hint = size_hint << 1;
    const buf = moonbitlang$core$builtin$$StringBuilder$new(size_hint);
    moonbitlang$core$builtin$$Logger$write_string$8$(buf, _hd);
    if (moonbitlang$core$string$$String$char_length_eq(separator.str, 0, separator.start, separator.end)) {
      const _len$2 = _x.len;
      let _tmp$2 = 0;
      while (true) {
        const _i = _tmp$2;
        if (_i < _len$2) {
          const s = _bind[_bind$2 + _i | 0];
          moonbitlang$core$builtin$$Logger$write_string$8$(buf, s);
          _tmp$2 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _len$2 = _x.len;
      let _tmp$2 = 0;
      while (true) {
        const _i = _tmp$2;
        if (_i < _len$2) {
          const s = _bind[_bind$2 + _i | 0];
          moonbitlang$core$builtin$$Logger$write_substring$8$(buf, separator.str, separator.start, separator.end - separator.start | 0);
          moonbitlang$core$builtin$$Logger$write_string$8$(buf, s);
          _tmp$2 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return buf.val;
  }
}
function moonbitlang$core$array$$FixedArray$makei$24$(length, value) {
  if (length <= 0) {
    return [];
  } else {
    const array = $make_array_len_and_init(length, value(0));
    let _tmp = 1;
    while (true) {
      const i = _tmp;
      if (i < length) {
        $bound_check(array, i);
        array[i] = value(i);
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return array;
  }
}
function moonbitlang$core$array$$FixedArray$from_array$2$(array) {
  return moonbitlang$core$array$$FixedArray$makei$24$(array.length, (i) => moonbitlang$core$array$$Array$op_get$2$(array, i));
}
function moonbitlang$core$array$$Array$copy$4$(self) {
  return moonbitlang$core$array$$JSArray$copy(self);
}
function moonbitlang$core$array$$Array$push_iter$15$(self, iter) {
  iter((x) => {
    moonbitlang$core$array$$Array$push$15$(self, x);
    return 1;
  });
}
function moonbitlang$core$array$$Array$push_iter$16$(self, iter) {
  iter((x) => {
    moonbitlang$core$array$$Array$push$16$(self, x);
    return 1;
  });
}
function moonbitlang$core$array$$Array$push_iter$2$(self, iter) {
  iter((x) => {
    moonbitlang$core$array$$Array$push$2$(self, x);
    return 1;
  });
}
function moonbitlang$core$array$$Array$shuffle_in_place$4$(self, rand) {
  const n = self.length;
  let _tmp = n - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i > 0) {
      const j = rand(i + 1 | 0) % (i + 1 | 0) | 0;
      moonbitlang$core$array$$Array$swap$4$(self, i, j);
      _tmp = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$shuffle$4$(self, rand) {
  const new_arr = moonbitlang$core$array$$Array$copy$4$(self);
  moonbitlang$core$array$$Array$shuffle_in_place$4$(new_arr, rand);
  return new_arr;
}
function moonbitlang$core$array$$Array$join(self, separator) {
  return moonbitlang$core$array$$ArrayView$join({ buf: self, start: 0, len: self.length }, separator);
}
function moonbitlang$core$char$$Char$is_ascii_uppercase(self) {
  return self >= 65 && self <= 90;
}
function moonbitlang$core$builtin$$Show$to_string$25$(self) {
  return String.fromCodePoint(self);
}
function moonbitlang$core$string$$String$view(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length) ? { str: self, start: start_offset, end: end_offset$2 } : moonbitlang$core$abort$$abort$3$("Invalid index for View");
}
function moonbitlang$core$string$$StringView$view(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0)) ? { str: self.str, start: self.start + start_offset | 0, end: self.start + end_offset$2 | 0 } : moonbitlang$core$abort$$abort$3$("Invalid index for View");
}
function moonbitlang$core$string$$String$char_length_eq(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (55296 <= c1 && c1 <= 56319 && (index + 1 | 0) < end_offset$2) {
        const _tmp$3 = index + 1 | 0;
        const c2 = self.charCodeAt(_tmp$3);
        if (56320 <= c2 && c2 <= 57343) {
          _tmp = index + 2 | 0;
          _tmp$2 = count + 1 | 0;
          continue;
        } else {
          moonbitlang$core$abort$$abort$5$("invalid surrogate pair");
        }
      }
      _tmp = index + 1 | 0;
      _tmp$2 = count + 1 | 0;
      continue;
    } else {
      return count === len && index === end_offset$2;
    }
  }
}
function moonbitlang$core$builtin$$Show$to_string$3$(self) {
  return moonbitlang$core$string$$String$substring(self.str, self.start, self.end);
}
function moonbitlang$core$string$$code_point_of_surrogate_pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function moonbitlang$core$string$$StringView$iter(self) {
  const _p = (yield_) => {
    const _start513 = self.start;
    const _end514 = self.end;
    let _tmp = _start513;
    while (true) {
      const index = _tmp;
      if (index < _end514) {
        const _tmp$2 = self.str;
        const c1 = _tmp$2.charCodeAt(index);
        if (55296 <= c1 && c1 <= 56319 && (index + 1 | 0) < self.end) {
          const _tmp$3 = self.str;
          const _tmp$4 = index + 1 | 0;
          const c2 = _tmp$3.charCodeAt(_tmp$4);
          if (56320 <= c2 && c2 <= 57343) {
            const c = moonbitlang$core$string$$code_point_of_surrogate_pair(c1, c2);
            const _bind = yield_(c);
            if (_bind === 1) {
              _tmp = index + 2 | 0;
              continue;
            } else {
              return 0;
            }
          }
        }
        const _bind = yield_(c1);
        if (_bind === 1) {
        } else {
          return 0;
        }
        _tmp = index + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  };
  return _p;
}
function moonbitlang$core$string$$StringView$iter2(self) {
  const _p = (yield_) => {
    const len = self.end - self.start | 0;
    let _tmp = 0;
    let _tmp$2 = 0;
    while (true) {
      const index = _tmp;
      const n = _tmp$2;
      if (index < len) {
        const _tmp$3 = self.str;
        const _tmp$4 = self.start + index | 0;
        const c1 = _tmp$3.charCodeAt(_tmp$4);
        if (55296 <= c1 && c1 <= 56319 && (index + 1 | 0) < len) {
          const _tmp$5 = self.str;
          const _tmp$6 = (self.start + index | 0) + 1 | 0;
          const c2 = _tmp$5.charCodeAt(_tmp$6);
          if (56320 <= c2 && c2 <= 57343) {
            const c = moonbitlang$core$string$$code_point_of_surrogate_pair(c1, c2);
            const _bind = yield_(n, c);
            if (_bind === 1) {
              _tmp = index + 2 | 0;
              _tmp$2 = n + 1 | 0;
              continue;
            } else {
              return 0;
            }
          }
        }
        const _bind = yield_(n, c1);
        if (_bind === 1) {
        } else {
          return 0;
        }
        _tmp = index + 1 | 0;
        _tmp$2 = n + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  };
  return _p;
}
function moonbitlang$core$string$$boyer_moore_horspool_find(haystack, needle) {
  const haystack_len = haystack.end - haystack.start | 0;
  const needle_len = needle.end - needle.start | 0;
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const skip_table = $make_array_len_and_init(256, needle_len);
      const _end330 = needle_len - 1 | 0;
      let _tmp = 0;
      while (true) {
        const i = _tmp;
        if (i < _end330) {
          const _tmp$2 = needle.str;
          const _tmp$3 = needle.start + i | 0;
          const _tmp$4 = _tmp$2.charCodeAt(_tmp$3) & 255;
          $bound_check(skip_table, _tmp$4);
          skip_table[_tmp$4] = (needle_len - 1 | 0) - i | 0;
          _tmp = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      let _tmp$2 = 0;
      while (true) {
        const i = _tmp$2;
        if (i <= (haystack_len - needle_len | 0)) {
          const _end336 = needle_len - 1 | 0;
          let _tmp$3 = 0;
          while (true) {
            const j = _tmp$3;
            if (j <= _end336) {
              const _p = i + j | 0;
              const _tmp$4 = haystack.str;
              const _tmp$5 = haystack.start + _p | 0;
              const _tmp$6 = _tmp$4.charCodeAt(_tmp$5);
              const _tmp$7 = needle.str;
              const _tmp$8 = needle.start + j | 0;
              if (_tmp$6 !== _tmp$7.charCodeAt(_tmp$8)) {
                break;
              }
              _tmp$3 = j + 1 | 0;
              continue;
            } else {
              return i;
            }
          }
          const _p = (i + needle_len | 0) - 1 | 0;
          const _tmp$4 = haystack.str;
          const _tmp$5 = haystack.start + _p | 0;
          const _tmp$6 = _tmp$4.charCodeAt(_tmp$5) & 255;
          $bound_check(skip_table, _tmp$6);
          _tmp$2 = i + skip_table[_tmp$6] | 0;
          continue;
        } else {
          break;
        }
      }
      return undefined;
    } else {
      return undefined;
    }
  } else {
    return 0;
  }
}
function moonbitlang$core$string$$brute_force_find(haystack, needle) {
  const haystack_len = haystack.end - haystack.start | 0;
  const needle_len = needle.end - needle.start | 0;
  if (needle_len > 0) {
    if (haystack_len >= needle_len) {
      const _p = 0;
      const _tmp = needle.str;
      const _tmp$2 = needle.start + _p | 0;
      const needle_first = _tmp.charCodeAt(_tmp$2);
      const forward_len = haystack_len - needle_len | 0;
      let i = 0;
      while (true) {
        if (i <= forward_len) {
          while (true) {
            let _tmp$3;
            if (i <= forward_len) {
              const _p$2 = i;
              const _tmp$4 = haystack.str;
              const _tmp$5 = haystack.start + _p$2 | 0;
              _tmp$3 = _tmp$4.charCodeAt(_tmp$5) !== needle_first;
            } else {
              _tmp$3 = false;
            }
            if (_tmp$3) {
              i = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (i <= forward_len) {
            let _tmp$3 = 1;
            while (true) {
              const j = _tmp$3;
              if (j < needle_len) {
                const _p$2 = i + j | 0;
                const _tmp$4 = haystack.str;
                const _tmp$5 = haystack.start + _p$2 | 0;
                const _tmp$6 = _tmp$4.charCodeAt(_tmp$5);
                const _tmp$7 = needle.str;
                const _tmp$8 = needle.start + j | 0;
                if (_tmp$6 !== _tmp$7.charCodeAt(_tmp$8)) {
                  break;
                }
                _tmp$3 = j + 1 | 0;
                continue;
              } else {
                return i;
              }
            }
            i = i + 1 | 0;
          }
          continue;
        } else {
          break;
        }
      }
      return undefined;
    } else {
      return undefined;
    }
  } else {
    return 0;
  }
}
function moonbitlang$core$string$$StringView$find(self, str) {
  return (str.end - str.start | 0) <= 4 ? moonbitlang$core$string$$brute_force_find(self, str) : moonbitlang$core$string$$boyer_moore_horspool_find(self, str);
}
function moonbitlang$core$string$$StringView$find_by(self, pred) {
  const _foreach_result = { val: $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Continue$1$ };
  const _bind = moonbitlang$core$string$$StringView$iter2(self);
  _bind((i, c) => {
    if (pred(c)) {
      _foreach_result.val = new $64$moonbitlang$47$core$47$builtin$46$ForeachResult$Return$1$(i);
      return 0;
    }
    return 1;
  });
  const _tmp = _foreach_result.val;
  switch (_tmp.$tag) {
    case 0: {
      break;
    }
    case 1: {
      const _break = _tmp;
      _break._0;
      break;
    }
    case 2: {
      const _return = _tmp;
      return _return._0;
    }
    case 3: {
      $panic();
      break;
    }
    default: {
      $panic();
    }
  }
  return undefined;
}
function moonbitlang$core$string$$String$find_by(self, pred) {
  return moonbitlang$core$string$$StringView$find_by({ str: self, start: 0, end: self.length }, pred);
}
function moonbitlang$core$string$$StringView$split(self, sep) {
  const sep_len = sep.end - sep.start | 0;
  if (sep_len === 0) {
    const _bind = moonbitlang$core$string$$StringView$iter(self);
    return (_p) => _bind((_p$2) => _p(moonbitlang$core$string$$String$view(moonbitlang$core$builtin$$Show$to_string$25$(_p$2), 0, undefined)));
  }
  const _p = (yield_) => {
    let view = self;
    while (true) {
      const _bind = moonbitlang$core$string$$StringView$find(view, sep);
      if (_bind === undefined) {
        return yield_(view);
      } else {
        const _Some = _bind;
        const _end = _Some;
        const _bind$2 = yield_(moonbitlang$core$string$$StringView$view(view, 0, _end));
        if (_bind$2 === 1) {
          view = moonbitlang$core$string$$StringView$view(view, _end + sep_len | 0, undefined);
        } else {
          return 0;
        }
        continue;
      }
    }
  };
  return _p;
}
function moonbitlang$core$string$$String$split(self, sep) {
  return moonbitlang$core$string$$StringView$split({ str: self, start: 0, end: self.length }, sep);
}
function moonbitlang$core$string$$String$to_lower(self) {
  const _bind = moonbitlang$core$string$$String$find_by(self, (x) => moonbitlang$core$char$$Char$is_ascii_uppercase(x));
  if (_bind === undefined) {
    return self;
  } else {
    const _Some = _bind;
    const _idx = _Some;
    const buf = moonbitlang$core$builtin$$StringBuilder$new(self.length);
    const head = moonbitlang$core$string$$String$view(self, 0, _idx);
    moonbitlang$core$builtin$$Logger$write_substring$8$(buf, head.str, head.start, head.end - head.start | 0);
    const _bind$2 = moonbitlang$core$string$$StringView$iter(moonbitlang$core$string$$String$view(self, _idx, undefined));
    _bind$2((c) => {
      if (moonbitlang$core$char$$Char$is_ascii_uppercase(c)) {
        moonbitlang$core$builtin$$Logger$write_char$8$(buf, c + 32 | 0);
      } else {
        moonbitlang$core$builtin$$Logger$write_char$8$(buf, c);
      }
      return 1;
    });
    return buf.val;
  }
}
function moonbitlang$core$builtin$$Eq$op_equal$6$(_x_25, _x_26) {
  let _tmp = _x_25;
  let _tmp$2 = _x_26;
  while (true) {
    const _x_25$2 = _tmp;
    const _x_26$2 = _tmp$2;
    if (_x_25$2.$tag === 0) {
      if (_x_26$2.$tag === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      const _S = _x_25$2;
      const _$42$x0_27 = _S._0;
      if (_x_26$2.$tag === 1) {
        const _S$2 = _x_26$2;
        const _$42$y0_28 = _S$2._0;
        _tmp = _$42$x0_27;
        _tmp$2 = _$42$y0_28;
        continue;
      } else {
        return false;
      }
    }
  }
}
function himeno$kana$45$rhythm$lib$$Nat$to_int(self) {
  if (self.$tag === 0) {
    return 0;
  } else {
    const _S = self;
    const _n = _S._0;
    return himeno$kana$45$rhythm$lib$$Nat$to_int(_n) + 1 | 0;
  }
}
function moonbitlang$core$builtin$$Show$to_string$6$(self) {
  return moonbitlang$core$int$$Int$to_string(himeno$kana$45$rhythm$lib$$Nat$to_int(self), 10);
}
function moonbitlang$core$builtin$$Add$op_add$6$(self, other) {
  if (self.$tag === 0) {
    return other;
  } else {
    const _S = self;
    const _a = _S._0;
    return new $64$himeno$47$kana$45$rhythm$47$lib$46$Nat$S(moonbitlang$core$builtin$$Add$op_add$6$(_a, other));
  }
}
function moonbitlang$core$builtin$$Sub$op_sub$6$(self, other) {
  let _tmp = other;
  while (true) {
    const other$2 = _tmp;
    if (self.$tag === 0) {
      return $64$himeno$47$kana$45$rhythm$47$lib$46$Nat$Z;
    } else {
      const _S = self;
      const _a = _S._0;
      if (other$2.$tag === 0) {
        return _a;
      } else {
        const _S$2 = other$2;
        const _b = _S$2._0;
        _tmp = _b;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Compare$compare$6$(self, other) {
  const self$2 = himeno$kana$45$rhythm$lib$$Nat$to_int(self);
  const other$2 = himeno$kana$45$rhythm$lib$$Nat$to_int(other);
  return self$2 < other$2 ? -1 : self$2 > other$2 ? 1 : 0;
}
function himeno$kana$45$rhythm$lib$$Nat$from_int(num) {
  return num >= 1 ? new $64$himeno$47$kana$45$rhythm$47$lib$46$Nat$S(himeno$kana$45$rhythm$lib$$Nat$from_int(num - 1 | 0)) : $64$himeno$47$kana$45$rhythm$47$lib$46$Nat$Z;
}
function himeno$kana$45$rhythm$lib$js$$handle_attrs(attrs) {
  const _p = moonbitlang$core$builtin$$Map$to_array$1$(attrs);
  const _p$2 = new Array(_p.length);
  const _p$3 = _p.length;
  let _tmp = 0;
  while (true) {
    const _p$4 = _tmp;
    if (_p$4 < _p$3) {
      const _p$5 = _p[_p$4];
      const attr = _p$5;
      let _tmp$2;
      _L: {
        _L$2: {
          const _bind = attr._1;
          switch (_bind) {
            case "": {
              break _L$2;
            }
            case "on": {
              break _L$2;
            }
            case "true": {
              break _L$2;
            }
            case "off": {
              _tmp$2 = "";
              break;
            }
            case "false": {
              _tmp$2 = "";
              break;
            }
            default: {
              _tmp$2 = `${attr._0}=\"${_bind}\"`;
            }
          }
          break _L;
        }
        _tmp$2 = attr._0;
      }
      _p$2[_p$4] = _tmp$2;
      _tmp = _p$4 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return moonbitlang$core$array$$Array$join(_p$2, { str: himeno$kana$45$rhythm$lib$js$$handle_attrs$46$42$bind$124$159, start: 0, end: himeno$kana$45$rhythm$lib$js$$handle_attrs$46$42$bind$124$159.length });
}
function moonbitlang$core$builtin$$Show$to_string$15$(self) {
  switch (self.$tag) {
    case 0: {
      const _HSeq = self;
      const _children = _HSeq._0;
      const _p = new Array(_children.length);
      const _p$2 = _children.length;
      let _tmp = 0;
      while (true) {
        const _p$3 = _tmp;
        if (_p$3 < _p$2) {
          const _p$4 = _children[_p$3];
          const child = _p$4;
          _p[_p$3] = moonbitlang$core$builtin$$Show$to_string$15$(child);
          _tmp = _p$3 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return moonbitlang$core$array$$Array$join(_p, { str: himeno$kana$45$rhythm$lib$js$$to_string$46$42$bind$124$160, start: 0, end: himeno$kana$45$rhythm$lib$js$$to_string$46$42$bind$124$160.length });
    }
    case 2: {
      const _HTagS = self;
      const _tag_name = _HTagS._0;
      const _attrs = _HTagS._1;
      return _attrs.size === 0 ? `<${_tag_name}/>` : `<${_tag_name} ${himeno$kana$45$rhythm$lib$js$$handle_attrs(_attrs)} />`;
    }
    case 1: {
      const _HTag = self;
      const _tag_name$2 = _HTag._0;
      const _attrs$2 = _HTag._1;
      const _children$2 = _HTag._2;
      return _attrs$2.size === 0 ? `<${_tag_name$2}>${moonbitlang$core$builtin$$Show$to_string$15$(_children$2)}</${_tag_name$2}>` : `<${_tag_name$2} ${himeno$kana$45$rhythm$lib$js$$handle_attrs(_attrs$2)} >${moonbitlang$core$builtin$$Show$to_string$15$(_children$2)}</${_tag_name$2}>`;
    }
    case 3: {
      const _HText = self;
      return _HText._0;
    }
    default: {
      return "";
    }
  }
}
function himeno$kana$45$rhythm$lib$js$$Html$render(self, elm) {
  himeno$kana$45$rhythm$lib$js$$set_html(elm, moonbitlang$core$builtin$$Show$to_string$15$(self));
}
function himeno$kana$45$rhythm$lib$js$$Date$now() {
  return himeno$kana$45$rhythm$lib$js$$get_date_now();
}
function himeno$kana$45$rhythm$lib$js$$Date$get_year(self) {
  return himeno$kana$45$rhythm$lib$js$$get_date_year(self);
}
function himeno$kana$45$rhythm$lib$js$$Date$get_month(self) {
  return himeno$kana$45$rhythm$lib$js$$get_date_month(self);
}
function himeno$kana$45$rhythm$lib$js$$Date$get_day(self) {
  return himeno$kana$45$rhythm$lib$js$$get_date_day(self);
}
function himeno$kana$45$rhythm$lib$js$$Date$get_hours(self) {
  return himeno$kana$45$rhythm$lib$js$$get_date_hours(self);
}
function himeno$kana$45$rhythm$lib$js$$Date$get_minutes(self) {
  return himeno$kana$45$rhythm$lib$js$$get_date_minutes(self);
}
function himeno$kana$45$rhythm$lib$js$$Date$get_seconds(self) {
  return himeno$kana$45$rhythm$lib$js$$get_date_seconds(self);
}
function himeno$kana$45$rhythm$lib$js$$to_string$46$add_zero$124$9(n) {
  return n < 10 ? `0${moonbitlang$core$int$$Int$to_string(n, 10)}` : moonbitlang$core$int$$Int$to_string(n, 10);
}
function moonbitlang$core$builtin$$Show$to_string$26$(self) {
  return `${moonbitlang$core$builtin$$Show$to_string$4$(himeno$kana$45$rhythm$lib$js$$Date$get_year(self))}-${himeno$kana$45$rhythm$lib$js$$to_string$46$add_zero$124$9(himeno$kana$45$rhythm$lib$js$$Date$get_month(self))}-${himeno$kana$45$rhythm$lib$js$$to_string$46$add_zero$124$9(himeno$kana$45$rhythm$lib$js$$Date$get_day(self))} ${himeno$kana$45$rhythm$lib$js$$to_string$46$add_zero$124$9(himeno$kana$45$rhythm$lib$js$$Date$get_hours(self))}:${himeno$kana$45$rhythm$lib$js$$to_string$46$add_zero$124$9(himeno$kana$45$rhythm$lib$js$$Date$get_minutes(self))}:${himeno$kana$45$rhythm$lib$js$$to_string$46$add_zero$124$9(himeno$kana$45$rhythm$lib$js$$Date$get_seconds(self))}`;
}
function moonbitlang$core$builtin$$Eq$op_equal$0$(_x_100, _x_101) {
  return moonbitlang$core$builtin$$Eq$op_equal$11$(_x_100.status, _x_101.status) && moonbitlang$core$builtin$$Eq$op_equal$17$(_x_100.current_question, _x_101.current_question) && moonbitlang$core$builtin$$Eq$op_equal$6$(_x_100.score, _x_101.score) && moonbitlang$core$builtin$$Eq$op_equal$6$(_x_100.question_index, _x_101.question_index) && moonbitlang$core$builtin$$Eq$op_equal$6$(_x_100.time_left, _x_101.time_left) && moonbitlang$core$builtin$$Eq$op_equal$22$(_x_100.records, _x_101.records) && moonbitlang$core$builtin$$Eq$op_equal$14$(_x_100.config_kana_mode, _x_101.config_kana_mode) && _x_100.config_question_count === _x_101.config_question_count;
}
function moonbitlang$core$builtin$$Eq$op_equal$18$(_x_96, _x_97) {
  return _x_96.kana === _x_97.kana && _x_96.romaji === _x_97.romaji && moonbitlang$core$builtin$$Eq$op_equal$23$(_x_96.choices, _x_97.choices);
}
function moonbitlang$core$builtin$$Eq$op_equal$16$(_x_92, _x_93) {
  return _x_92.score === _x_93.score && _x_92.time === _x_93.time && _x_92.question_count === _x_93.question_count && _x_92.kana_mode === _x_93.kana_mode;
}
function moonbitlang$core$builtin$$Eq$op_equal$14$(_x_88, _x_89) {
  switch (_x_88) {
    case 0: {
      if (_x_89 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_89 === 1) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_89 === 2) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function moonbitlang$core$builtin$$Show$output$14$(_x_84, _x_85) {
  switch (_x_84) {
    case 0: {
      _x_85.method_0(_x_85.self, "Hiragana");
      return;
    }
    case 1: {
      _x_85.method_0(_x_85.self, "Katakana");
      return;
    }
    default: {
      _x_85.method_0(_x_85.self, "Both");
      return;
    }
  }
}
function moonbitlang$core$builtin$$Eq$op_equal$11$(_x_80, _x_81) {
  switch (_x_80) {
    case 0: {
      if (_x_81 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_81 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_81 === 2) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_81 === 3) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function moonbitlang$core$builtin$$Show$output$11$(_x_76, _x_77) {
  switch (_x_76) {
    case 0: {
      _x_77.method_0(_x_77.self, "Idle");
      return;
    }
    case 1: {
      _x_77.method_0(_x_77.self, "Playing");
      return;
    }
    case 2: {
      _x_77.method_0(_x_77.self, "Paused");
      return;
    }
    default: {
      _x_77.method_0(_x_77.self, "Finished");
      return;
    }
  }
}
function himeno$kana$45$rhythm$main$$GameState$is_gaming(self) {
  return !moonbitlang$core$array$$Array$contains$11$([0, 3], self.status);
}
function himeno$kana$45$rhythm$main$$KanaMode$to_int(self) {
  switch (self) {
    case 0: {
      return 1;
    }
    case 1: {
      return 2;
    }
    default: {
      return 3;
    }
  }
}
function himeno$kana$45$rhythm$main$$view(state) {
  const _self$2 = [];
  let _tmp;
  _L: {
    _L$2: {
      const _bind = state.status;
      switch (_bind) {
        case 0: {
          _tmp = "Game states will be displayed here.";
          break;
        }
        case 1: {
          break _L$2;
        }
        case 2: {
          break _L$2;
        }
        default: {
          _tmp = "Status: finished";
        }
      }
      break _L;
    }
    _tmp = `Status: ${moonbitlang$core$string$$String$to_lower(moonbitlang$core$builtin$$Show$to_string$10$(state.status))} | Score: ${moonbitlang$core$builtin$$Show$to_string$6$(state.score)} | Progress: ${moonbitlang$core$builtin$$Show$to_string$6$(state.question_index)}/${moonbitlang$core$builtin$$Show$to_string$4$(state.config_question_count)}`;
  }
  moonbitlang$core$array$$Array$push$15$(_self$2, new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("div", moonbitlang$core$builtin$$Map$from_array$1$([{ _0: "class", _1: "game-state" }, { _0: "id", _1: "gameState" }]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText(_tmp)));
  let _tmp$2;
  _L$2: {
    _L$3: {
      const _bind = state.status;
      const _bind$2 = state.current_question;
      switch (_bind) {
        case 1: {
          if (_bind$2 === undefined) {
            break _L$3;
          } else {
            const _Some = _bind$2;
            const _question = _Some;
            _tmp$2 = new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText(_question.kana);
          }
          break;
        }
        case 3: {
          _tmp$2 = new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HSeq([new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText("Game Over!"), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("br", moonbitlang$core$builtin$$Map$from_array$1$([]), $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HEmpty), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("span", moonbitlang$core$builtin$$Map$from_array$1$([]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText(`You scored ${moonbitlang$core$builtin$$Show$to_string$6$(state.score)} points!`))]);
          break;
        }
        default: {
          break _L$3;
        }
      }
      break _L$2;
    }
    _tmp$2 = new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText("Press Space to begin the game");
  }
  moonbitlang$core$array$$Array$push$15$(_self$2, new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("div", moonbitlang$core$builtin$$Map$from_array$1$([{ _0: "class", _1: "question" }, { _0: "id", _1: "question" }]), _tmp$2));
  const _tmp$3 = new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("div", moonbitlang$core$builtin$$Map$from_array$1$([{ _0: "class", _1: "timer" }, { _0: "id", _1: "timer" }]), moonbitlang$core$builtin$$Eq$op_equal$11$(state.status, 1) ? new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText(`Time left: ${moonbitlang$core$builtin$$Show$to_string$6$(state.time_left)}`) : $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HEmpty);
  let _tmp$4;
  _L$3: {
    _L$4: {
      const _bind = state.status;
      const _bind$2 = state.current_question;
      if (_bind === 1) {
        if (_bind$2 === undefined) {
          break _L$4;
        } else {
          const _Some = _bind$2;
          const _question = _Some;
          const _p = _question.choices;
          const _p$2 = new Array(_p.length);
          const _p$3 = _p.length;
          let _tmp$5 = 0;
          while (true) {
            const _p$4 = _tmp$5;
            if (_p$4 < _p$3) {
              const _p$5 = _p[_p$4];
              const v = _p$5;
              _p$2[_p$4] = new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("button", moonbitlang$core$builtin$$Map$from_array$1$([{ _0: "class", _1: "choice-btn" }, { _0: "id", _1: "choiceBtn" }]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText(v));
              _tmp$5 = _p$4 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _tmp$4 = new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HSeq(_p$2);
        }
      } else {
        break _L$4;
      }
      break _L$3;
    }
    _tmp$4 = $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HEmpty;
  }
  moonbitlang$core$array$$Array$push_iter$15$(_self$2, moonbitlang$core$array$$Array$iter$15$([_tmp$3, new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("div", moonbitlang$core$builtin$$Map$from_array$1$([{ _0: "class", _1: "choices" }, { _0: "id", _1: "choices" }]), _tmp$4)]));
  const _bind = state.status;
  let _tmp$5;
  switch (_bind) {
    case 1: {
      _tmp$5 = [new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("button", moonbitlang$core$builtin$$Map$from_array$1$([{ _0: "class", _1: "btn" }, { _0: "id", _1: "pauseBtn" }]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText("Pause")), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("button", moonbitlang$core$builtin$$Map$from_array$1$([{ _0: "class", _1: "btn" }, { _0: "id", _1: "startBtn" }]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText("Restart"))];
      break;
    }
    case 2: {
      _tmp$5 = [new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("button", moonbitlang$core$builtin$$Map$from_array$1$([{ _0: "class", _1: "btn" }, { _0: "id", _1: "resumeBtn" }]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText("Resume")), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("button", moonbitlang$core$builtin$$Map$from_array$1$([{ _0: "class", _1: "btn" }, { _0: "id", _1: "startBtn" }]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText("Restart"))];
      break;
    }
    case 3: {
      _tmp$5 = [new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("button", moonbitlang$core$builtin$$Map$from_array$1$([{ _0: "class", _1: "btn" }, { _0: "id", _1: "startBtn" }]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText("Play Again")), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("button", moonbitlang$core$builtin$$Map$from_array$1$([{ _0: "class", _1: "btn" }, { _0: "id", _1: "saveBtn" }]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText("Save Score"))];
      break;
    }
    default: {
      _tmp$5 = [new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("button", moonbitlang$core$builtin$$Map$from_array$1$([{ _0: "class", _1: "btn" }, { _0: "id", _1: "startBtn" }]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText("Start Game"))];
    }
  }
  moonbitlang$core$array$$Array$push$15$(_self$2, new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("div", moonbitlang$core$builtin$$Map$from_array$1$([{ _0: "class", _1: "controls" }]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HSeq(_tmp$5)));
  const _self$3 = [];
  moonbitlang$core$array$$Array$push$15$(_self$3, new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("h2", moonbitlang$core$builtin$$Map$from_array$1$([]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText("Scores")));
  const _p = state.records;
  const _p$2 = new Array(_p.length);
  const _p$3 = _p.length;
  let _tmp$6 = 0;
  while (true) {
    const _p$4 = _tmp$6;
    if (_p$4 < _p$3) {
      const _p$5 = _p[_p$4];
      const record = _p$5;
      _p$2[_p$4] = new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("p", moonbitlang$core$builtin$$Map$from_array$1$([]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText(`Score: ${record.score} | Question Count: ${record.question_count} | Kana Mode: ${record.kana_mode} | Time: ${record.time}`));
      _tmp$6 = _p$4 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const arr = _p$2;
  moonbitlang$core$array$$Array$push_iter$15$(_self$3, moonbitlang$core$array$$Array$iter$15$(arr.length > 0 ? arr : [new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText("No scores yet.")]));
  moonbitlang$core$array$$Array$push$15$(_self$2, new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("div", moonbitlang$core$builtin$$Map$from_array$1$([{ _0: "class", _1: "scores" }, { _0: "id", _1: "scores" }]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HSeq(_self$3)));
  const _tmp$7 = new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("strong", moonbitlang$core$builtin$$Map$from_array$1$([]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText("Question Count: "));
  const _tmp$8 = new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("input", moonbitlang$core$builtin$$Map$from_array$1$([{ _0: "type", _1: "number" }, { _0: "id", _1: "questionCount" }, { _0: "disabled", _1: moonbitlang$core$builtin$$Show$to_string$12$(himeno$kana$45$rhythm$main$$GameState$is_gaming(state)) }, { _0: "value", _1: moonbitlang$core$int$$Int$to_string(state.config_question_count, 10) }]), $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HEmpty);
  const _tmp$9 = new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("strong", moonbitlang$core$builtin$$Map$from_array$1$([]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText("<br />Kana Mode: "));
  const _tmp$10 = new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("input", moonbitlang$core$builtin$$Map$from_array$1$([{ _0: "type", _1: "number" }, { _0: "id", _1: "kanaMode" }, { _0: "disabled", _1: moonbitlang$core$builtin$$Show$to_string$12$(himeno$kana$45$rhythm$main$$GameState$is_gaming(state)) }, { _0: "value", _1: moonbitlang$core$int$$Int$to_string(himeno$kana$45$rhythm$main$$KanaMode$to_int(state.config_kana_mode), 10) }]), $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HEmpty);
  const _tmp$11 = new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("span", moonbitlang$core$builtin$$Map$from_array$1$([]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText(" 1 = Hiragana, 2 = Katakana, 3 = Both "));
  const _tmp$12 = new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("h3", moonbitlang$core$builtin$$Map$from_array$1$([]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText("Keyboard Shortcuts"));
  const _p$4 = [{ _0: ["Space"], _1: "Start/Pause/Resume/Restart" }, { _0: ["1", "2", "3"], _1: "Answer Choices" }, { _0: ["S"], _1: "Save Score" }];
  const _p$5 = new Array(_p$4.length);
  const _p$6 = _p$4.length;
  let _tmp$13 = 0;
  while (true) {
    const _p$7 = _tmp$13;
    if (_p$7 < _p$6) {
      const _p$8 = _p$4[_p$7];
      const pair = _p$8;
      const _p$9 = pair._0;
      const _p$10 = new Array(_p$9.length);
      const _p$11 = _p$9.length;
      let _tmp$14 = 0;
      while (true) {
        const _p$12 = _tmp$14;
        if (_p$12 < _p$11) {
          const _p$13 = _p$9[_p$12];
          const x = _p$13;
          _p$10[_p$12] = new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("span", moonbitlang$core$builtin$$Map$from_array$1$([{ _0: "class", _1: "key" }]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText(x));
          _tmp$14 = _p$12 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const _tmp$15 = new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HSeq(_p$10);
      _p$5[_p$7] = new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("li", moonbitlang$core$builtin$$Map$from_array$1$([]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HSeq([_tmp$15, new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText(`: ${pair._1}`)]));
      _tmp$13 = _p$7 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp$14 = new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("ul", moonbitlang$core$builtin$$Map$from_array$1$([]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HSeq(_p$5));
  const _tmp$15 = new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("h3", moonbitlang$core$builtin$$Map$from_array$1$([]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText("About"));
  moonbitlang$core$array$$Array$push$15$(_self$2, new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("div", moonbitlang$core$builtin$$Map$from_array$1$([{ _0: "class", _1: "debug" }]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HSeq([_tmp$7, _tmp$8, _tmp$9, _tmp$10, _tmp$11, _tmp$12, _tmp$14, _tmp$15, new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("ul", moonbitlang$core$builtin$$Map$from_array$1$([]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HSeq([new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("li", moonbitlang$core$builtin$$Map$from_array$1$([]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HSeq([new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("span", moonbitlang$core$builtin$$Map$from_array$1$([]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText("This is a rhythm game to practice Kana base on ")), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("a", moonbitlang$core$builtin$$Map$from_array$1$([{ _0: "href", _1: "https://www.moonbitlang.com/" }, { _0: "target", _1: "_blank" }, { _0: "style", _1: "color: #BA2583" }]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText("MoonBit")), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("span", moonbitlang$core$builtin$$Map$from_array$1$([]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText(" Language"))])), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("li", moonbitlang$core$builtin$$Map$from_array$1$([]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HSeq([new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("span", moonbitlang$core$builtin$$Map$from_array$1$([]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText("Made with ❤️ by ")), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("a", moonbitlang$core$builtin$$Map$from_array$1$([{ _0: "href", _1: "https://github.com/BIYUEHU" }, { _0: "target", _1: "_blank" }, { _0: "style", _1: "color: deepskyblue;" }]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText("Arimura Sena"))])), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("li", moonbitlang$core$builtin$$Map$from_array$1$([]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HSeq([new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("span", moonbitlang$core$builtin$$Map$from_array$1$([]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText("Open Source on ")), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HTag("a", moonbitlang$core$builtin$$Map$from_array$1$([{ _0: "href", _1: "https://github.com/BIYUEHU/kana-rhythm" }, { _0: "target", _1: "_blank" }, { _0: "style", _1: "color: gray" }]), new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HText("Github"))]))]))])));
  return new $64$himeno$47$kana$45$rhythm$47$lib$47$js$46$Html$HSeq(_self$2);
}
function himeno$kana$45$rhythm$main$$get_records() {
  const raw = himeno$kana$45$rhythm$lib$js$$get_local_storage("kana-rhythm-data-reecordS");
  return raw === "" ? [] : moonbitlang$core$builtin$$Iter$collect$16$(moonbitlang$core$builtin$$Iter$filter_map$21$(moonbitlang$core$string$$String$split(raw, { str: himeno$kana$45$rhythm$main$$get_records$46$42$bind$124$155, start: 0, end: himeno$kana$45$rhythm$main$$get_records$46$42$bind$124$155.length }), (s) => {
    const arr = moonbitlang$core$builtin$$Iter$collect$3$(moonbitlang$core$string$$StringView$split(s, { str: himeno$kana$45$rhythm$main$$get_records$46$42$bind$124$160, start: 0, end: himeno$kana$45$rhythm$main$$get_records$46$42$bind$124$160.length }));
    if (arr.length === 4) {
      const _bind = moonbitlang$core$builtin$$Show$to_string$3$(moonbitlang$core$array$$Array$op_get$3$(arr, 0));
      const _bind$2 = moonbitlang$core$builtin$$Show$to_string$3$(moonbitlang$core$array$$Array$op_get$3$(arr, 1));
      const _bind$3 = moonbitlang$core$builtin$$Show$to_string$3$(moonbitlang$core$array$$Array$op_get$3$(arr, 2));
      const _bind$4 = moonbitlang$core$builtin$$Show$to_string$3$(moonbitlang$core$array$$Array$op_get$3$(arr, 3));
      return { score: _bind, time: _bind$4, question_count: _bind$2, kana_mode: _bind$3 };
    } else {
      return undefined;
    }
  }));
}
function himeno$kana$45$rhythm$main$$set_records(records) {
  const _p = new Array(records.length);
  const _p$2 = records.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = records[_p$3];
      const record = _p$4;
      _p[_p$3] = `${record.score},${record.question_count},${record.kana_mode},${record.time}`;
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  himeno$kana$45$rhythm$lib$js$$set_local_storage("kana-rhythm-data-reecordS", moonbitlang$core$array$$Array$join(_p, { str: himeno$kana$45$rhythm$main$$set_records$46$42$bind$124$161, start: 0, end: himeno$kana$45$rhythm$main$$set_records$46$42$bind$124$161.length }));
}
function himeno$kana$45$rhythm$main$$get_question_count() {
  const result = himeno$kana$45$rhythm$lib$js$$parse_int(himeno$kana$45$rhythm$lib$js$$get_local_storage("kana-rhythm-data-question-count"), 10);
  return result <= 0 || !(result > 0) ? 10 : result;
}
function himeno$kana$45$rhythm$main$$set_question_count(count) {
  himeno$kana$45$rhythm$lib$js$$set_local_storage("kana-rhythm-data-question-count", moonbitlang$core$int$$Int$to_string(count, 10));
}
function himeno$kana$45$rhythm$main$$KanaMode$from_string(mode) {
  switch (mode) {
    case "hiragana": {
      return 0;
    }
    case "1": {
      return 0;
    }
    case "katakana": {
      return 1;
    }
    case "2": {
      return 1;
    }
    default: {
      return 2;
    }
  }
}
function himeno$kana$45$rhythm$main$$get_kana_mode() {
  return himeno$kana$45$rhythm$main$$KanaMode$from_string(himeno$kana$45$rhythm$lib$js$$get_local_storage("kana-rhythm-data-kana-mode"));
}
function himeno$kana$45$rhythm$main$$set_kana_mode(mode) {
  himeno$kana$45$rhythm$lib$js$$set_local_storage("kana-rhythm-data-kana-mode", moonbitlang$core$int$$Int$to_string(himeno$kana$45$rhythm$main$$KanaMode$to_int(mode), 10));
}
function himeno$kana$45$rhythm$main$$render(dom, state) {
  if (state === undefined) {
    himeno$kana$45$rhythm$lib$js$$Html$render(himeno$kana$45$rhythm$main$$view(himeno$kana$45$rhythm$main$$game_state_ref.value), dom);
  } else {
    const _Some = state;
    const _state = _Some;
    if (moonbitlang$core$builtin$$op_notequal$0$(_state, himeno$kana$45$rhythm$main$$game_state_ref.value)) {
      himeno$kana$45$rhythm$main$$game_state_ref.value = _state;
      himeno$kana$45$rhythm$lib$js$$Html$render(himeno$kana$45$rhythm$main$$view(himeno$kana$45$rhythm$main$$game_state_ref.value), dom);
    }
  }
  return dom;
}
function himeno$kana$45$rhythm$main$$play_animation(time_left) {
  const scoreAnimation = himeno$kana$45$rhythm$lib$js$$query_element("#scoreAnimation");
  let text;
  if (time_left === undefined) {
    text = "Wrong";
  } else {
    const _Some = time_left;
    const _time_left = _Some;
    const _bind = himeno$kana$45$rhythm$lib$$Nat$to_int(_time_left);
    text = _bind >= 6 && _bind <= 7 ? "Perfect" : _bind >= 3 && _bind <= 5 ? "Nice" : "Soso";
  }
  const class_ = moonbitlang$core$string$$String$to_lower(text);
  himeno$kana$45$rhythm$lib$js$$set_text(scoreAnimation, text);
  himeno$kana$45$rhythm$lib$js$$add_class(scoreAnimation, class_);
  himeno$kana$45$rhythm$lib$js$$add_class(scoreAnimation, "show");
  himeno$kana$45$rhythm$lib$js$$set_timeout(() => {
    himeno$kana$45$rhythm$lib$js$$remove_class(scoreAnimation, class_);
    himeno$kana$45$rhythm$lib$js$$remove_class(scoreAnimation, "show");
  }, 1000);
}
function himeno$kana$45$rhythm$main$$AnswerQuestionType$get_answer(self, question) {
  switch (self.$tag) {
    case 3: {
      const _Literal = self;
      return _Literal._0;
    }
    case 0: {
      return moonbitlang$core$array$$Array$op_get$9$(question.choices, 0);
    }
    case 1: {
      return moonbitlang$core$array$$Array$op_get$9$(question.choices, 1);
    }
    case 2: {
      return moonbitlang$core$array$$Array$op_get$9$(question.choices, 2);
    }
    default: {
      return "";
    }
  }
}
function himeno$kana$45$rhythm$main$$GameState$calculate_score(self) {
  const _bind = himeno$kana$45$rhythm$lib$$Nat$to_int(self.time_left);
  return himeno$kana$45$rhythm$lib$$Nat$from_int(_bind >= 6 && _bind <= 7 ? 3 : _bind >= 3 && _bind <= 5 ? 2 : 1);
}
function himeno$kana$45$rhythm$main$$generate_question$46$get_random_int$124$23(keys) {
  return himeno$kana$45$rhythm$lib$js$$random_int(keys.length);
}
function himeno$kana$45$rhythm$main$$GameState$generate_question(self) {
  const _bind = self.config_kana_mode;
  let maps;
  switch (_bind) {
    case 0: {
      maps = himeno$kana$45$rhythm$main$$hiragana_to_romaji_map;
      break;
    }
    case 1: {
      maps = himeno$kana$45$rhythm$main$$katakana_to_romaji_map;
      break;
    }
    default: {
      maps = himeno$kana$45$rhythm$main$$kana_to_romaji_map;
    }
  }
  const keys = moonbitlang$core$builtin$$Iter$to_array$9$(moonbitlang$core$builtin$$Map$keys$1$(maps));
  const num1 = himeno$kana$45$rhythm$main$$generate_question$46$get_random_int$124$23(keys);
  let num2;
  let _tmp = himeno$kana$45$rhythm$main$$generate_question$46$get_random_int$124$23(keys);
  while (true) {
    const _param = _tmp;
    if (_param !== num1) {
      num2 = _param;
      break;
    } else {
      _tmp = himeno$kana$45$rhythm$main$$generate_question$46$get_random_int$124$23(keys);
      continue;
    }
  }
  let num3;
  let _tmp$2 = himeno$kana$45$rhythm$main$$generate_question$46$get_random_int$124$23(keys);
  while (true) {
    const _param = _tmp$2;
    if (_param !== num1 && _param !== num2) {
      num3 = _param;
      break;
    } else {
      _tmp$2 = himeno$kana$45$rhythm$main$$generate_question$46$get_random_int$124$23(keys);
      continue;
    }
  }
  const _tmp$3 = moonbitlang$core$array$$Array$op_get$9$(keys, num1);
  const _p = moonbitlang$core$builtin$$Map$get$1$(maps, moonbitlang$core$array$$Array$op_get$9$(keys, num1));
  let _tmp$4;
  if (_p === undefined) {
    _tmp$4 = $panic();
  } else {
    const _p$2 = _p;
    _tmp$4 = _p$2;
  }
  const _tmp$5 = _tmp$4;
  const _p$2 = moonbitlang$core$array$$Array$shuffle$4$([num1, num2, num3], himeno$kana$45$rhythm$lib$js$$random_int);
  const _p$3 = new Array(_p$2.length);
  const _p$4 = _p$2.length;
  let _tmp$6 = 0;
  while (true) {
    const _p$5 = _tmp$6;
    if (_p$5 < _p$4) {
      const _p$6 = _p$2[_p$5];
      const index = _p$6;
      const _p$7 = moonbitlang$core$builtin$$Map$get$1$(maps, moonbitlang$core$array$$Array$op_get$9$(keys, index));
      let _tmp$7;
      if (_p$7 === undefined) {
        _tmp$7 = $panic();
      } else {
        const _p$8 = _p$7;
        _tmp$7 = _p$8;
      }
      _p$3[_p$5] = _tmp$7;
      _tmp$6 = _p$5 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return { kana: _tmp$3, romaji: _tmp$5, choices: _p$3 };
}
function himeno$kana$45$rhythm$main$$GameState$answer_question(self, answer) {
  const _bind = self.current_question;
  if (_bind === undefined) {
    return self;
  } else {
    const _Some = _bind;
    const _question = _Some;
    let score;
    if (himeno$kana$45$rhythm$main$$AnswerQuestionType$get_answer(answer, _question) === _question.romaji) {
      himeno$kana$45$rhythm$lib$js$$play_sound("/correct.mp3");
      himeno$kana$45$rhythm$main$$play_animation(self.time_left);
      score = moonbitlang$core$builtin$$Add$op_add$6$(self.score, himeno$kana$45$rhythm$main$$GameState$calculate_score(self));
    } else {
      himeno$kana$45$rhythm$lib$js$$play_sound("/incorrect.mp3");
      himeno$kana$45$rhythm$main$$play_animation(undefined);
      score = self.score;
    }
    const question_index = new $64$himeno$47$kana$45$rhythm$47$lib$46$Nat$S(self.question_index);
    return himeno$kana$45$rhythm$lib$$Nat$to_int(question_index) >= self.config_question_count ? { ...self, status: 3, score: score } : { ...self, score: score, question_index: question_index, current_question: himeno$kana$45$rhythm$main$$GameState$generate_question(self), time_left: himeno$kana$45$rhythm$lib$$Nat$from_int(7) };
  }
}
function himeno$kana$45$rhythm$main$$GameState$handle_time_tick(self) {
  return moonbitlang$core$builtin$$op_le$6$(self.time_left, new $64$himeno$47$kana$45$rhythm$47$lib$46$Nat$S($64$himeno$47$kana$45$rhythm$47$lib$46$Nat$Z)) ? himeno$kana$45$rhythm$main$$GameState$answer_question(self, AnswerQuestionType$Timeout) : { ...self, time_left: moonbitlang$core$builtin$$Sub$op_sub$6$(self.time_left, new $64$himeno$47$kana$45$rhythm$47$lib$46$Nat$S($64$himeno$47$kana$45$rhythm$47$lib$46$Nat$Z)) };
}
function himeno$kana$45$rhythm$main$$GameState$set_config_kana_mode(self, mode) {
  himeno$kana$45$rhythm$main$$set_kana_mode(mode);
  return { ...self, config_kana_mode: mode };
}
function himeno$kana$45$rhythm$main$$GameState$set_config_question_count(self, count) {
  moonbitlang$core$builtin$$println$9$(`Setting question count to ${moonbitlang$core$builtin$$Show$to_string$4$(count)}`);
  himeno$kana$45$rhythm$main$$set_question_count(count);
  return { ...self, config_question_count: count };
}
function himeno$kana$45$rhythm$main$$GameState$set_score(self) {
  const _self$2 = [];
  moonbitlang$core$array$$Array$push$16$(_self$2, { score: moonbitlang$core$builtin$$Show$to_string$6$(self.score), time: moonbitlang$core$builtin$$Show$to_string$26$(himeno$kana$45$rhythm$lib$js$$Date$now()), question_count: moonbitlang$core$int$$Int$to_string(self.config_question_count, 10), kana_mode: moonbitlang$core$builtin$$Show$to_string$13$(self.config_kana_mode) });
  moonbitlang$core$array$$Array$push_iter$16$(_self$2, moonbitlang$core$array$$Array$iter$16$(himeno$kana$45$rhythm$main$$get_records()));
  const records = _self$2;
  himeno$kana$45$rhythm$main$$set_records(records);
  return { ...self, records: records };
}
function himeno$kana$45$rhythm$main$$GameState$transform(self, action) {
  _L: {
    let mode;
    _L$2: {
      let count;
      _L$3: {
        const _bind = self.status;
        if (action.$tag === 0) {
          return { ...moonbitlang$core$builtin$$Default$default$0$(), records: self.records, status: 1, current_question: himeno$kana$45$rhythm$main$$GameState$generate_question(self) };
        } else {
          switch (_bind) {
            case 1: {
              switch (action.$tag) {
                case 1: {
                  return { ...self, status: 2 };
                }
                case 3: {
                  const _AnswerQuestion = action;
                  const _answer = _AnswerQuestion._0;
                  return himeno$kana$45$rhythm$main$$GameState$answer_question(self, _answer);
                }
                case 4: {
                  return himeno$kana$45$rhythm$main$$GameState$handle_time_tick(self);
                }
                default: {
                  break _L;
                }
              }
            }
            case 2: {
              if (action.$tag === 2) {
                return { ...self, status: 1 };
              } else {
                break _L;
              }
            }
            case 3: {
              switch (action.$tag) {
                case 5: {
                  return himeno$kana$45$rhythm$main$$GameState$set_score(self);
                }
                case 6: {
                  const _SetQuestionNumber = action;
                  const _count = _SetQuestionNumber._0;
                  count = _count;
                  break _L$3;
                }
                case 7: {
                  const _SetKanaMode = action;
                  const _mode = _SetKanaMode._0;
                  mode = _mode;
                  break _L$2;
                }
                default: {
                  break _L;
                }
              }
            }
            default: {
              switch (action.$tag) {
                case 6: {
                  const _SetQuestionNumber$2 = action;
                  const _count$2 = _SetQuestionNumber$2._0;
                  count = _count$2;
                  break _L$3;
                }
                case 7: {
                  const _SetKanaMode$2 = action;
                  const _mode$2 = _SetKanaMode$2._0;
                  mode = _mode$2;
                  break _L$2;
                }
                default: {
                  break _L;
                }
              }
            }
          }
        }
      }
      return himeno$kana$45$rhythm$main$$GameState$set_config_question_count(self, count);
    }
    return himeno$kana$45$rhythm$main$$GameState$set_config_kana_mode(self, mode);
  }
  return self;
}
function himeno$kana$45$rhythm$main$$set_base_listener(dom) {
  himeno$kana$45$rhythm$lib$js$$add_event_listener(dom, "click", (event) => {
    const _game_state = himeno$kana$45$rhythm$main$$game_state_ref.value;
    const target = himeno$kana$45$rhythm$lib$js$$get_target(event);
    let _tmp;
    if (himeno$kana$45$rhythm$lib$js$$matches_element(target, "#startBtn")) {
      _tmp = GameAction$StartGame;
    } else {
      if (himeno$kana$45$rhythm$lib$js$$matches_element(target, "#pauseBtn")) {
        _tmp = GameAction$PauseGame;
      } else {
        if (himeno$kana$45$rhythm$lib$js$$matches_element(target, "#resumeBtn")) {
          _tmp = GameAction$ResumeGame;
        } else {
          if (himeno$kana$45$rhythm$lib$js$$matches_element(target, "#choiceBtn")) {
            _tmp = new GameAction$AnswerQuestion(new AnswerQuestionType$Literal(himeno$kana$45$rhythm$lib$js$$get_text(target)));
          } else {
            if (himeno$kana$45$rhythm$lib$js$$matches_element(target, "#saveBtn")) {
              _tmp = GameAction$SaveScore;
            } else {
              return undefined;
            }
          }
        }
      }
    }
    himeno$kana$45$rhythm$main$$render(dom, himeno$kana$45$rhythm$main$$GameState$transform(_game_state, _tmp));
  });
  himeno$kana$45$rhythm$lib$js$$add_event_listener(dom, "change", (event) => {
    const _game_state = himeno$kana$45$rhythm$main$$game_state_ref.value;
    const target = himeno$kana$45$rhythm$lib$js$$get_target(event);
    const value = himeno$kana$45$rhythm$lib$js$$get_elm_value(target);
    let _tmp;
    if (himeno$kana$45$rhythm$lib$js$$matches_element(target, "#questionCount")) {
      const result = himeno$kana$45$rhythm$lib$js$$parse_int(value, 10);
      if (result <= 0 || !(result > 0)) {
        return undefined;
      }
      _tmp = new GameAction$SetQuestionNumber(result);
    } else {
      if (himeno$kana$45$rhythm$lib$js$$matches_element(target, "#kanaMode")) {
        _tmp = new GameAction$SetKanaMode(himeno$kana$45$rhythm$main$$KanaMode$from_string(value));
      } else {
        return undefined;
      }
    }
    himeno$kana$45$rhythm$main$$render(dom, himeno$kana$45$rhythm$main$$GameState$transform(_game_state, _tmp));
  });
  return dom;
}
function himeno$kana$45$rhythm$main$$set_keyboard_listener(dom) {
  himeno$kana$45$rhythm$lib$js$$listen_key(himeno$kana$45$rhythm$lib$js$$get_document(), (key, _discard_) => {
    const _game_state = himeno$kana$45$rhythm$main$$game_state_ref.value;
    let _tmp;
    _L: {
      _L$2: {
        switch (key) {
          case "1": {
            _tmp = new GameAction$AnswerQuestion(AnswerQuestionType$First);
            break;
          }
          case "2": {
            _tmp = new GameAction$AnswerQuestion(AnswerQuestionType$Second);
            break;
          }
          case "3": {
            _tmp = new GameAction$AnswerQuestion(AnswerQuestionType$Third);
            break;
          }
          case "S": {
            _tmp = GameAction$SaveScore;
            break;
          }
          case " ": {
            if (moonbitlang$core$builtin$$Eq$op_equal$11$(_game_state.status, 1)) {
              _tmp = GameAction$PauseGame;
            } else {
              if (moonbitlang$core$builtin$$Eq$op_equal$11$(_game_state.status, 2)) {
                _tmp = GameAction$ResumeGame;
              } else {
                if (moonbitlang$core$array$$Array$contains$11$([0, 3], _game_state.status)) {
                  _tmp = GameAction$StartGame;
                } else {
                  break _L$2;
                }
              }
            }
            break;
          }
          default: {
            break _L$2;
          }
        }
        break _L;
      }
      return undefined;
    }
    himeno$kana$45$rhythm$main$$render(dom, himeno$kana$45$rhythm$main$$GameState$transform(_game_state, _tmp));
  });
  return dom;
}
function himeno$kana$45$rhythm$main$$set_timer(dom) {
  himeno$kana$45$rhythm$lib$js$$set_interval(() => {
    himeno$kana$45$rhythm$main$$render(dom, himeno$kana$45$rhythm$main$$GameState$transform(himeno$kana$45$rhythm$main$$game_state_ref.value, GameAction$TimeTick));
  }, 1000);
  return dom;
}
function moonbitlang$core$builtin$$Default$default$0$() {
  return { status: 0, current_question: undefined, score: himeno$kana$45$rhythm$lib$$Nat$from_int(0), question_index: himeno$kana$45$rhythm$lib$$Nat$from_int(0), time_left: himeno$kana$45$rhythm$lib$$Nat$from_int(7), records: himeno$kana$45$rhythm$main$$get_records(), config_kana_mode: himeno$kana$45$rhythm$main$$get_kana_mode(), config_question_count: himeno$kana$45$rhythm$main$$get_question_count() };
}
(() => {
  himeno$kana$45$rhythm$main$$render(himeno$kana$45$rhythm$main$$set_timer(himeno$kana$45$rhythm$main$$set_keyboard_listener(himeno$kana$45$rhythm$main$$set_base_listener(himeno$kana$45$rhythm$lib$js$$query_element("#app")))), undefined);
})();
