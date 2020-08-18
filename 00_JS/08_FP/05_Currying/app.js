// ----------------------------------------------------------
// CURRYING
// -- decomposing --
// one function with multiple parameters (NO CLOSURE)
// to multiple functions with one parameter (USING CLOSURE)
// ----------------------------------------------------------

// BEFORE -------------
// one function with multiple parameters (NO CLOSURE)
const multiply1 = (a, b, c) => a * b * c;

const result1 = multiply1(2, 5, 10);
console.log(result1);

// ----------------------------
// method for doing currying is in file app1.js
// ----------------------------

// AFTER -------------
// to multiple functions with one parameter (USING CLOSURE)
const multiply2 = a => b => c => a * b * c;

const result2 = multiply2(2)(5)(10);
console.log(result2);


//--------------
// advantage
//--------------

// 1) Can create only partial calls and store them into variables
const multiplyBy2 = multiply2(2);
// and then call it for different number
const result3 = multiplyBy2(5)(1);
const result4 = multiplyBy2(6)(2);
const result5 = multiplyBy2(7)(3);
const result6 = multiplyBy2(8)(4);
