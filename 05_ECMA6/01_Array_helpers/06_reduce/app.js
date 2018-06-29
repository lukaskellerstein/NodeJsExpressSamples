
// ------------------------------------------------
// ECMA 6 -----------------------------------------
// ------------------------------------------------

// Accumulation

let tempValues = ["a", "b", "c", "d"];

var result = tempValues.reduce(function(acc, value){
    return acc + value;
});

console.log(result);


