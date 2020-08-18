
// --------------------------------------------
// Static 
// --------------------------------------------

// !!!
// static properties and methods are not accessable
// !!!

class X {
  static staticAttr = 42;
  static method() { }
  attr: string;
}

interface Y {
  Attr1: { new (...args): X }
  Attr2: new(...args: any[]) => X
}

//Will filter static values
let fn = (arg: X | Y) => {
  (new arg.Attr1()).attr;
  (new arg.Attr1()).staticAttr;
  (new arg.Attr2()).attr;
  (new arg.Attr2()).staticAttr;
}
