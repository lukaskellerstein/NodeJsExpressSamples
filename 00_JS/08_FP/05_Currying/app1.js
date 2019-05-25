// ----------------------------------------------------------
// CURRYING
// -- decomposing --
// one function with multiple parameters (NO CLOSURE)
// to multiple functions with one parameter (USING CLOSURE)
// ----------------------------------------------------------

const multiply = (a, b, c) => a * b * c;

// CURRYING - ver. 1 ----------------------------

//helper method - custom
const curry = curryN(f, []);
const curryN = (f, acc) => {
  acc.length === f.length ? f(...acc) : arg => curryN(f, [...acc, arg]);
};

// DO CURRYING
const multiplyBy3 = curry(multiply)(3);
const multiplyBy3And4 = curry(multiply)(3)(4);

// and then call it for different number
multiplyBy3(5, 1);
multiplyBy3(6, 2);
multiplyBy3(7, 3);
multiplyBy3(8, 4);

multiplyBy3and4(4);
multiplyBy3and4(8);

// CURRYING application - ver. 2 ------------------------------

// FINISH !!!!!
