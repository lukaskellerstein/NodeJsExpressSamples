function main() {
    // --------------------------------------------------
    // PRIME NUMBERS
    //
    // A prime number is a number that is divisible by 1 and itself only
    // --------------------------------------------------

    // start 16:02
    // end 16:11

    // start 11:25
    // end 11:31

    // -------------------------------------
    // implement method which return true/false if number is prime number


    // -------------------------------------
    // TEST data
    console.log("1 - ", testPrime(1));
    console.log("2 - ", testPrime(2));
    console.log("3 - ", testPrime(3));
    console.log("4 - ", testPrime(4));
    console.log("5 - ", testPrime(5));
    console.log("22 - ", testPrime(22));
    console.log("37 - ", testPrime(37));


    // -------------------------------------
    // implement method which return "all factors" for specific number
    // "All factors" = all number which this number 
    // can be divided without aliquot (beze zbytku)


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
