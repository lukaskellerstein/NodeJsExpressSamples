// ----------------------------------------------------------
// PARTIAL APPLICATION
// -- decomposing --
// without currying and rewriting existing code
// but advantage of currying remains the same
// ----------------------------------------------------------

const multiply = (a, b, c) => a * b * c;

// PARTIAL application - ver. 1 ----------------------------

//helper method - custom
const partialApplication = (f, ...argListOrigin) => (...argListWithoutRest) =>
  f(...argListOrigin, ...argListWithoutRest);

// DO PARTIAL APPLICATION
const multiplyBy3 = partialApplication(multiply, 3);
const multiplyBy3And4 = partialApplication(multiply, 3, 4);

// and then call it for different number
multiplyBy3(5, 1);
multiplyBy3(6, 2);
multiplyBy3(7, 3);
multiplyBy3(8, 4);

multiplyBy3and4(4);
multiplyBy3and4(8);

// PARTIAL application - ver. 2 ------------------------------

// DO PARTIAL APPLICATION - with 'bind'
const multiplyBy2 = multiply.bind(null, 2);
const multiplyBy2and3 = multiply.bind(null, 2, 3);

// and then call it for different number
multiplyBy2(5, 1);
multiplyBy2(6, 2);
multiplyBy2(7, 3);
multiplyBy2(8, 4);

multiplyBy2and3(4);
multiplyBy2and3(8);

// PARTIAL application - ver. 3 ------------------------------

// DO PARTIAL APPLICATION - with 'LODASH'

// FINISH !!!

// PARTIAL application - ver. 4 ------------------------------

// DO PARTIAL APPLICATION - with '?????'

// FINISH !!!
