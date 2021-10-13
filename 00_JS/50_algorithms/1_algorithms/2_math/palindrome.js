

// --------------------------------------------------
// PALINDROME
//
// A palindrome is a word, phrase, number, or other sequence of characters 
// which reads the same backward or forward. 
// --------------------------------------------------

/*
123 is not a palindrom
12321 is a palindrome
*/

const palindromeNumber = (number) => {
    let origin = number;
    let final = 0;
    while (number > 0) {
        let afterDot = number % 10;
        number = parseInt(number / 10);
        final = (final * 10) + afterDot;
    }
    if (final == origin) {
        console.log("The input number is Palindrome");
    }
    else {
        console.log("The input number is not palindrome");
    }
}



palindromeNumber(123);
palindromeNumber(12321);