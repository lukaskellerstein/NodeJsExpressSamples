function palindrome(someText){
    var reverseText = Array.from(someText).reverse().join('');

    if(someText === reverseText){
        console.log(`IT IS PALINDROME - ${someText}`);
    }
}

palindrome("HELLO");
palindrome("LEVEL");