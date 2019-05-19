//object
var obj1 = {
  prop1: 'aaa',
  func1: function() {
    return 'bbb';
  },

  //object
  prop2: {
    name: 'haha',
    address: 'blbalbla'
  }
};

// ----------------------------------------------
// ----------------------------------------------
// COPYING OBJECTS
// ----------------------------------------------
// ----------------------------------------------

// Shallow copy of object ----------------
// inner objects/arrays are only referenced, not copied !!!!!!

//spread operator
let obj2 = { ...obj1 };

//object assign
let obj3 = Object.assign({}, obj1);

// Deep copy of object -------------------
// inner objects/arrays are copied

// libraries like lodash ... etc. - cloneDeep()
