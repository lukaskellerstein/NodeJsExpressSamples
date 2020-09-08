
// --------------------------------------------------------
// (SIMPLE) RECURSION
// --------------------------------------------------------
const fib = (n) => {

    if (n < 2) return n;

    return fib(n - 1) + fib(n - 2);
}


console.log(fib(0)); // zero index of fibonacci sequence
console.log(fib(1)); // first index of fibonacci sequence
console.log(fib(2)); // second index of fibonacci sequence
console.log(fib(3)); // ...
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));
console.log(fib(10));
console.log(fib(11));