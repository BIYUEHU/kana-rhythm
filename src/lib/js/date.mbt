///|
type Date

///|
extern "js" fn get_date(int : Int) -> Date =
  #|int => new Date(int);

///|
extern "js" fn get_date_now() -> Date =
  #|() => new Date();

///|
extern "js" fn get_date_timestamp(date : Date) -> Int =
  #|date => date.getTime();

///|
extern "js" fn get_date_year(date : Date) -> Int =
  #|date => date.getFullYear();

///|
extern "js" fn get_date_month(date : Date) -> Int =
  #|date => date.getMonth();

///|
extern "js" fn get_date_day(date : Date) -> Int =
  #|date => date.getDate();

///|
extern "js" fn get_date_hours(date : Date) -> Int =
  #|date => date.getHours();

///|
extern "js" fn get_date_minutes(date : Date) -> Int =
  #|date => date.getMinutes();

///|
extern "js" fn get_date_seconds(date : Date) -> Int =
  #|date => date.getSeconds();

///|
extern "js" fn get_date_milliseconds(date : Date) -> Int =
  #|date => date.getMilliseconds();

///|
extern "js" fn set_date_year(date : Date, year : Int) =
  #|(date, year) => date.setFullYear(year);

///|
extern "js" fn set_date_month(date : Date, month : Int) =
  #|(date, month) => date.setMonth(month);

///|
extern "js" fn set_date_day(date : Date, day : Int) =
  #|(date, day) => date.setDate(day);

///|
extern "js" fn set_date_hours(date : Date, hours : Int) =
  #|(date, hours) => date.setHours(hours);

///|
extern "js" fn set_date_minutes(date : Date, minutes : Int) =
  #|(date, minutes) => date.setMinutes(minutes);

///|
extern "js" fn set_date_seconds(date : Date, seconds : Int) =
  #|(date, seconds) => date.setSeconds(seconds);

///|
extern "js" fn set_date_milliseconds(date : Date, milliseconds : Int) =
  #|(date, milliseconds) => date.setMilliseconds(milliseconds);

///|
extern "js" fn get_date_timezone_offset(date : Date) -> Int =
  #|date => date.getTimezoneOffset();

///|
extern "js" fn set_date_timezone_offset(date : Date, offset : Int) =
  #|(date, offset) => date.setTimezoneOffset(offset);

///|
extern "js" fn date_to_string(date : Date) -> String =
  #|date => date.toString();

///|
pub fn Date::new(int : Int) -> Date {
  get_date(int)
}

///|
pub fn Date::get_timestamp(self : Date) -> Int {
  get_date_timestamp(self)
}

///|
pub fn Date::now() -> Date {
  get_date_now()
}

///|
pub fn Date::get_year(self : Date) -> Int {
  get_date_year(self)
}

///|
pub fn Date::get_month(self : Date) -> Int {
  get_date_month(self)
}

///|
pub fn Date::get_day(self : Date) -> Int {
  get_date_day(self)
}

///|
pub fn Date::get_hours(self : Date) -> Int {
  get_date_hours(self)
}

///|
pub fn Date::get_minutes(self : Date) -> Int {
  get_date_minutes(self)
}

///|
pub fn Date::get_seconds(self : Date) -> Int {
  get_date_seconds(self)
}

///|
pub fn Date::get_milliseconds(self : Date) -> Int {
  get_date_milliseconds(self)
}

///|
pub fn Date::set_year(self : Date, year : Int) -> Unit {
  set_date_year(self, year)
}

///|
pub fn Date::set_month(self : Date, month : Int) -> Unit {
  set_date_month(self, month)
}

///|
pub fn Date::set_day(self : Date, day : Int) -> Unit {
  set_date_day(self, day)
}

///|
pub fn Date::set_hours(self : Date, hours : Int) -> Unit {
  set_date_hours(self, hours)
}

///|
pub fn Date::set_minutes(self : Date, minutes : Int) -> Unit {
  set_date_minutes(self, minutes)
}

///|
pub fn Date::set_seconds(self : Date, seconds : Int) -> Unit {
  set_date_seconds(self, seconds)
}

///|
pub fn Date::set_milliseconds(self : Date, milliseconds : Int) -> Unit {
  set_date_milliseconds(self, milliseconds)
}

///|
pub fn Date::get_timezone_offset(self : Date) -> Int {
  get_date_timezone_offset(self)
}

///|
pub fn Date::set_timezone_offset(self : Date, offset : Int) -> Unit {
  set_date_timezone_offset(self, offset)
}

///|
pub impl Show for Date with to_string(self : Date) -> String {
  let add_zero = (n : Int) => if n < 10 {
    "0\{n.to_string()}"
  } else {
    n.to_string()
  }
  "\{self.get_year()}-\{self.get_month() |> add_zero}-\{self.get_day() |> add_zero} \{self.get_hours() |> add_zero}:\{self.get_minutes() |> add_zero}:\{self.get_seconds() |> add_zero}"
}

///|
pub impl Show for Date with output(self : Date, logger : &Logger) -> Unit {
  logger.write_string(date_to_string(self))
}
