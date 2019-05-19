//---------------------------------------------------
// HOF = high ordered functions
// Functions which
// a) function has function as input parameter
// b) function which returns another function
//---------------------------------------------------

function multiplyBy(num1) {
  return function(num2) {
    return num1 * num2;
  };
}

var multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(2));
console.log(multiplyByTwo(10));

var multiplyByTen = multiplyBy(10);
console.log(multiplyTen(2));
console.log(multiplyTen(10));

// vs.

// Arrow functions - cleaner code
const multiplyBy = num1 => num2 => {
  return num1 * num2;
};

multiplyBy(2)(2);
multiplyBy(2)(10);
multiplyBy(10)(2);
multiplyBy(10)(10);
