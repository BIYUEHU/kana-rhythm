///|
pub(all) enum Nat {
  Z
  S(Nat)
} derive(Eq, Show)

///|
pub impl Show for Nat with to_string(self : Nat) -> String {
  self.to_int().to_string()
}

///|
pub impl Add for Nat with op_add(self : Nat, other : Nat) -> Nat {
  match (self, other) {
    (Z, b) => b
    (S(a), b) => S(a + b)
  }
}

///|
pub impl Sub for Nat with op_sub(self : Nat, other : Nat) -> Nat {
  match (self, other) {
    (Z, _) => Z
    (S(a), b) => a - b
  }
}

///|
pub impl Compare for Nat with compare(self : Nat, other : Nat) -> Int {
  let self = self.to_int()
  let other = other.to_int()
  if self < other {
    -1
  } else if self > other {
    1
  } else {
    0
  }
}

///|
pub fn Nat::to_int(self : Nat) -> Int {
  match self {
    Z => 0
    S(n) => Nat::to_int(n) + 1
  }
}

///|
pub fn Nat::from_int(num : Int) -> Nat {
  match num {
    1..<_ => S(Nat::from_int(num - 1))
    _ => Z
  }
}
