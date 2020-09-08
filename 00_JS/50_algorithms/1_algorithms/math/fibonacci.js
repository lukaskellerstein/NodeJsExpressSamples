
// --------------------------------------------------
// FIBONACCI NUMBER
//
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
// --------------------------------------------------

// recursive version
const fibonacci = (n) => {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}


console.log(fibonacci(0)); // zero index of fibonacci sequence
console.log(fibonacci(1)); // first index of fibonacci sequence
console.log(fibonacci(2)); // second index of fibonacci sequence
console.log(fibonacci(3)); // ...
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(9));
console.log(fibonacci(10));
console.log(fibonacci(11));