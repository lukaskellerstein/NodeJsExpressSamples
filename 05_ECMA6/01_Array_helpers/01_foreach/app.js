
var colors = ['red', 'blue', 'green'];


// ------------------------------------------------
// ECMA 5 -----------------------------------------
// ------------------------------------------------

for( var i = 0; i < colors.length; i++) {
    colors[i] = colors[i] + 'A';
}

// ------------------------------------------------
// ECMA 6 -----------------------------------------
// ------------------------------------------------
var result = [];

// 1 ----
colors.forEach(function(item){
    result.push(item + 'B');
})

console.log(result);


// 2 ---- using forEach
var numbers = [1, 2, 3, 4, 5];
var sum = 0;

numbers.forEach(function(item){
    sum += item;
});

// 2 ---- using forEach + arrow function
var numbers = [1, 2, 3, 4, 5];
var sum = 0;

numbers.forEach(function(item){
    sum += item;
});

console.log(sum);

// 4 ---- using forEach + external function
sum = 0;

function summer(item) {
    sum += item;
}

numbers.forEach(summer);

console.log(sum);