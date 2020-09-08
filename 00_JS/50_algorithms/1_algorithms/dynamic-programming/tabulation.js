
// -----------------------------------------
// -----------------------------------------
// Tabulation: Bottom Up
//
// Better than (simple) recursion
// using already calculated results
// -----------------------------------------
// -----------------------------------------


// FACTORIAL
const factorialTabulation = (n) => {

    // Tabulated version to find factorial x.
    let dp = [];

    // base case
    dp[0] = 1;
    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i - 1] * i;
    }

    return dp;
}


console.log(factorialTabulation(1));
console.log(factorialTabulation(2));
console.log(factorialTabulation(3));
console.log(factorialTabulation(4));
console.log(factorialTabulation(5));
console.log(factorialTabulation(6));
console.log(factorialTabulation(7));


// FIBONACCI
const fibonacciTabulation = (n) => {

    if (n <= 1) return n;

    let result = [];

    result[0] = 0;
    result[1] = 1;

    for (let i = 2; i <= n; i++) {
        result[i] = result[i - 2] + result[i - 1];
    }

    return result[n];
}

console.log(fibonacciTabulation(1));
console.log(fibonacciTabulation(2));
console.log(fibonacciTabulation(3));
console.log(fibonacciTabulation(4));
console.log(fibonacciTabulation(5));
console.log(fibonacciTabulation(6));
console.log(fibonacciTabulation(7));
