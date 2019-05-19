// ------------------------------
// REDUCE

// transformation:
// Array (primitives) -> primitive (number, string, boolean)
// Array (primitives) -> Array(primitives) - DON’T USE - USE FILTER INSTEAD
// Array (objects) -> primitive
// Array (objects) -> object
// Array (objects) -> Array (primitives)
// Array (objects) -> Array (objects)

// INPUTS
// cumulate function = (value, i, arr){}
// initial value

// ---------------
// is used for:
// 1) combining data into one value
// 2) transformation data into another data

// ------------------------------

var array = [1, 2, 3, 4, 5];

var result = array.reduce((prev, curr, i, arr) => {
  //return accumulative value/object
}, {});
