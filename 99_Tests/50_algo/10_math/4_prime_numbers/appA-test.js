function main() {
    // --------------------------------------------------
    // PRIME NUMBERS
    //
    // A prime number is a number that is divisible by 1 and itself only
    // --------------------------------------------------

    // -------------------------------------
    // implement method which return true/false if number is prime number
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
    // -------------------------------------
    // TEST data
    console.log(testPrime(1));
    console.log(testPrime(2));
    console.log(testPrime(3));
    console.log(testPrime(4));
    console.log(testPrime(5));
    console.log(testPrime(22));
    console.log(testPrime(37));


    // -------------------------------------
    // implement method which return "all factors" for specific number
    // "All factors" = all number which this number 
    // can be divided without aliquot (beze zbytku)
    const printPrimeFactors = (n) => {
        let result = [];
        for (let i = n; i > 0; i--) {
            if (n % i === 0) result.push(i);
        }
        return result;
    }

    // -------------------------------------
    // TEST data
    console.log(printPrimeFactors(1));
    console.log(printPrimeFactors(2));
    console.log(printPrimeFactors(3));
    console.log(printPrimeFactors(4));
    console.log(printPrimeFactors(5));
    console.log(printPrimeFactors(22));
    console.log(printPrimeFactors(37));

};
main();
