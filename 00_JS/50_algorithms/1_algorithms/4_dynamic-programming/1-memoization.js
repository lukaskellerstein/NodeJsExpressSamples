// -----------------------------------------
// -----------------------------------------
// RECURSION (with cache) => APPLIED DYNAMIC PROGRAMMING
//
// Memoization: Top Down
//
// using a cache mechanism for store calculated values
// -----------------------------------------
// -----------------------------------------

// FACTORIAL
let cache = {};

const factorialMemoization = (n) => {

    if (n <= 1) return n;

    if (cache[n] !== undefined) return cache[n];
    else {
        let temp = n * factorialMemoization(n - 1);
        cache[n] = temp;
        return temp;
    }
}


console.log(factorialMemoization(1));
console.log(factorialMemoization(2));
console.log(factorialMemoization(3));
console.log(factorialMemoization(4));
console.log(factorialMemoization(5));
console.log(factorialMemoization(6));
console.log(factorialMemoization(7));





// FIBONACCI
cache = {};
const fibonacciMemoization = (n) => {

    if (n < 2) return n;

    if (cache[n] !== undefined) return cache[n];
    else {
        let temp = fibonacciMemoization(n - 1) + fibonacciMemoization(n - 2);
        cache[n] = temp;
        return temp;
    }

}

console.log(fibonacciMemoization(1));
console.log(fibonacciMemoization(2));
console.log(fibonacciMemoization(3));
console.log(fibonacciMemoization(4));
console.log(fibonacciMemoization(5));
console.log(fibonacciMemoization(6));
console.log(fibonacciMemoization(7));
