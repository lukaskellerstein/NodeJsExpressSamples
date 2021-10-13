function main() {
    // --------------------------------------------------
    // PALINDROME
    //
    // A palindrome is a word, phrase, number, or other sequence of characters 
    // which reads the same backward or forward. 
    // --------------------------------------------------

    // -------------------------------------
    // implement here
    const palindromeNumber = (number) => {
        // origin
        let origin = number;
        // reversed
        let reversed = 0;
        while (number > 0) {
            // get the last number character
            let cutLast = number % 10;
            // remove the last number character from number
            number = parseInt(number / 10);
            // add last number character to result
            reversed = (reversed * 10) + cutLast;
        }

        if (origin === reversed) {
            console.log('number is palindrome');
        } else {
            console.log('number is not a palindrome');
        }
    }
    // -------------------------------------
    // TEST data
    /*
    123 is not a palindrom
    12321 is a palindrome
    */
    palindromeNumber(123);
    palindromeNumber(12321);

};
main();