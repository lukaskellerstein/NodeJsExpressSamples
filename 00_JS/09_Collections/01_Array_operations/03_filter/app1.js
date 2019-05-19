// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// 1 ---- using filter + primitives
//
// Transform - Array (primitives) > Array (primitives)
//
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

var items = [1, 2, 3, 4, 5];

// BEST SOLUTION = oneliner ----------------------------------------

var result = items.filter(item => item / 2 == 1);
console.log(result);

// -----------------------------------------------------------------
// OTHER SOLUTIONS -------------------------------------------------

// ------------------------------------------------
// ECMA 5 - FOR - DON'T USE IT
// IMPERATIVE WAY - BAD
// ------------------------------------------------

// has side-effect (changing variables outside the scope)

var filteredItems1 = [];

for (var i = 0; i < items.length; i++) {
  if (items[i] / 2 == 1) {
    filteredItems1.push(items[i]);
  }
}

console.log(filteredItems1);

// ------------------------------------------------
// ECMA 6
// DELARATIVE WAY - BETTER
// ------------------------------------------------

// no side-effect

// 1 - one condition
var filteredItems2 = items.filter(function(item) {
  return item / 2 == 1;
});

console.log(filteredItems2);
