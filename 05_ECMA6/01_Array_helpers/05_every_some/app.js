
// ------------------------------------------------
// ECMA 6 -----------------------------------------
// ------------------------------------------------


// EVERY (every element in array has ...)

var result = someItems1.every(function(item){
    return item.HP > 100;
})
console.log(result);

result = someItems1.every(function(item){
    return item.HP > 300;
})
console.log(result);


// SOME (at least one element in array has ...)

result = someItems1.some(function(item){
    return item.HP > 100;
})
console.log(result);

result = someItems1.some(function(item){
    return item.HP > 300;
});
console.log(result);