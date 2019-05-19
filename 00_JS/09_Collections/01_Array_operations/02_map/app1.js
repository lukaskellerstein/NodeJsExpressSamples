// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// 1 ---- using map + primitives
//
// Transform - Array (primitives) > Array (primitives)
//
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

var items = [1, 2, 3, 4, 5];

// BEST SOLUTION = oneliner ----------------------------------------

var newItems3b = items.map(item => item * 2);
console.log(newItems3b);

// OTHER SOLUTIONS -------------------------------------------------

// ------------------------------------------------
// ECMA 5 - FOR - DON'T USE IT
// IMPERATIVE WAY - BAD
// ------------------------------------------------

// has side-effect (changing variables outside the scope)

var result = [];
for (var i = 0; i < items.length; i++) {
  result.push(items[i] * 2);
}

console.log(result);

// ------------------------------------------------
// ECMA 6
// DELARATIVE WAY - BETTER
// ------------------------------------------------

// no side-effect

// 1 ---- using map
var newItems2 = items.map(function(item) {
  return item * 2;
});

console.log(newItems2);

// 2 ---- using map + arrow functions
var newItems3 = items.map(item => {
  return item * 2;
});

console.log(newItems3);

// 3 ---- using map + external functions
function doubledit(item) {
  return item * 2;
}

var newItems4 = items.map(doubledit);

console.log(newItems4);
