// ------------------------------
// JOIN

// transformation:
// Array (primitives) -> primitive (number, string, boolean)
// Array (objects) -> primitive (number, string, boolean)

// INPUTS
// separator - string - ;,.|/

// ------------------------------

var array = [1, 2, 3, 4, 5];

var result = array.join(';');
console.log(result);
