

// --------------------------------------------------
// FACTORIAL
//
// Factorial of a non-negative integer, is multiplication of all integers smaller than or equal to n. 
// For example factorial of 6 is 6*5*4*3*2*1 which is 720.
// --------------------------------------------------

// recursion version
const factorial = (n) => {

    if (n === 0) return 1;

    return n * factorial(n - 1);
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
