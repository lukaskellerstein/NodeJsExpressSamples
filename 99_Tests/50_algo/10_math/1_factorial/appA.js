function main() {
    // --------------------------------------------------
    // FACTORIAL
    //
    // Factorial of a non-negative integer, is multiplication of all integers smaller than or equal to n. 
    // For example factorial of 6 is 6*5*4*3*2*1 which is 720.
    // --------------------------------------------------

    // start 15:28
    // end 15:36

    // start 11:11
    // end 11:17

    // -------------------------------------
    // implement here simple version



    // -------------------------------------
    // TEST Data
    // console.log(factorial1(1));
    // console.log(factorial1(2));
    // console.log(factorial1(3));
    // console.log(factorial1(4));
    // console.log(factorial1(5));
    // console.log(factorial1(6));
    // console.log(factorial1(7));

    // -------------------------------------
    // implement here recursion version

    const factorial2 = (number) => {

        if (number === 1) return 1;
        if (number === 2) return 2;

        return number * factorial2(number - 1);
    }

    // -------------------------------------
    // TEST Data
    console.log(factorial2(1)); //1
    console.log(factorial2(2)); //2
    console.log(factorial2(3)); //6
    console.log(factorial2(4)); //24
    console.log(factorial2(5)); //120
    console.log(factorial2(6)); //720
    console.log(factorial2(7)); //5040

};
main();
