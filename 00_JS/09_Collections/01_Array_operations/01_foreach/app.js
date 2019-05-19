var colors = ['red', 'blue', 'green'];

// ------------------------------------------------
// ECMA 5 - FOR - DON'T USE IT
// IMPERATIVE WAY - BAD
// ------------------------------------------------

// has side-effect (changing variables outside the scope)

var result = [];
for (var i = 0; i < colors.length; i++) {
  result.push(colors[i] + 'A');
}

console.log(result);

// ------------------------------------------------
// ECMA 6
// DELARATIVE WAY - BETTER
// ------------------------------------------------

// FOR-EACH function has also side-effects (changing variables outside the scope)
// = NON-PURE function !!!!
// MAP is better

var result = []; //<--- needs to have this outside property

// 1 ----
colors.forEach(function(item) {
  result.push(item + 'B');
});

console.log(result);

// 2 ---- using forEach
var numbers = [1, 2, 3, 4, 5];
var sum = 0;

numbers.forEach(function(item) {
  sum += item;
});

// 2 ---- using forEach + arrow function
var numbers = [1, 2, 3, 4, 5];
var sum = 0;

numbers.forEach(function(item) {
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
