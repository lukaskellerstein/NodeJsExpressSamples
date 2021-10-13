

// --------------------------------------------------
// PRIME NUMBERS
//
// A prime number is a number that is divisible by 1 and itself only
// --------------------------------------------------
const testPrime = (n) => {

    if (n === 1) {
        return false;
    }
    else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}



console.log(testPrime(1));
console.log(testPrime(2));
console.log(testPrime(3));
console.log(testPrime(4));
console.log(testPrime(5));
console.log(testPrime(22));
console.log(testPrime(37));



const printPrimeFactors = (n) => {


    let result = [];


    for (let i = n; i > 0; i--) {
        if (n % i === 0) result.push(i);
    }

    console.log(result);
}



printPrimeFactors(1);
printPrimeFactors(2);
printPrimeFactors(3);
printPrimeFactors(4);
printPrimeFactors(5);
printPrimeFactors(22);
printPrimeFactors(37);

var iii = 5;