var obj1 = {
  prop1: 'aaa',
  func1: function() {
    return 'bbb';
  }
};

// Read only property

Object.defineProperty(obj1, 'prop2', {
  value: 55,
  writable: false,
  enumerable: true,
  configurable: false //other can't change configuration (writable, enumerable) of this property in the future
});

// Non-iterable property

Object.defineProperty(obj1, 'prop3', {
  value: 110,
  writable: true,
  enumerable: false,
  configurable: false //other can't change configuration (writable, enumerable) of this property in the future
});

// keys
Object.keys(obj1).forEach(o => {
  console.log(o);
});

// values
Object.values(obj1).forEach(o => {
  console.log(o);
});

// entries
Object.entries(obj1).forEach(o => {
  console.log(o);
});
