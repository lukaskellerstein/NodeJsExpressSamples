function main() {
    // --------------------------------------------------
    // PALINDROME
    //
    // A palindrome is a word, phrase, number, or other sequence of characters 
    // which reads the same backward or forward. 
    // --------------------------------------------------

    /*
    palindrome(“race car”) should return true
    palindrome(“not a palindrome”) should return false
    palindrome(“A man, a plan, a canal. Panama”) should return true
    palindrome(“never odd or even”) should return true
    palindrome(“nope”) should return false
    palindrome(“almostomla”) should return false
    palindrome(“My age is 0, 0 si ega ym.”) should return true
    palindrome(“1 eye for of 1 eye.”) should return false
    palindrome(“0_0 (: /-\ :) 0–0”) should return true
    */

    // -------------------------------------
    // implement here
    const palindrome = (str) => {
        var re = /[^A-Za-z0-9]/g;
        var lowRegStr = str.toLowerCase().replace(re, '');
        var reverseStr = lowRegStr.split('').reverse().join('');
        return reverseStr === lowRegStr;
    }
    // -------------------------------------
    // TEST data
    console.log(palindrome("race car")); // true
    console.log(palindrome("not a palindrome")); // false
    console.log(palindrome("A man, a plan, a canal. Panama")); // true
    console.log(palindrome("never odd or even")); // true
    console.log(palindrome("nope")); // false
    console.log(palindrome("My age is 0, 0 si ega ym.")); // true
    console.log(palindrome("1 eye for of 1 eye.")); // false
    console.log(palindrome("0_0 (: /-\ :) 0–0")); // true
    console.log(palindrome("123454321")); // true
    console.log(palindrome("12345")); // false

};
main();