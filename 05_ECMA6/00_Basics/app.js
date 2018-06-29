// "hello".startsWith("ello", 1) // true
// "hello".endsWith("hell", 4)   // true
// "hello".includes("ell")       // true
// "hello".includes("ell", 1)    // true
// "hello".includes("ell", 2)    // false

// console.log(Math.trunc(42.7)) // 42
// console.log(Math.trunc( 0.1)) // 0
// console.log(Math.trunc(-0.1)) // -0




// sort array by ... --------------------------
var arr = new Array("orange", "mango", "banana", "sugar"); 
var sorted = arr.sort(); 
console.log("Returned string is : " + sorted );


//fibonnaci -----------------------------------
function fibonacci(number) {

    var previous_first = 0, previous_second = 1, next = 1;

    for(var i = 2; i <= number; i++) {
        next = previous_first + previous_second;
        previous_first = previous_second;
        previous_second = next;
    }
    return next;
};
  
let result = fibonacci(10);
console.log(result);



//document
//windows