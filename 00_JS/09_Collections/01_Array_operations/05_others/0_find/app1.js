// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// 1 ---- using find + primitives
//
// Transform - Array (primitives) > primitive
//
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

var items = [1, 2, 3, 4, 5];

// BEST SOLUTION = oneliner ----------------------------------------

var result = items.find(item => item % 2 == 0);
console.log(result);

// -----------------------------------------------------------------
// OTHER SOLUTIONS -------------------------------------------------

// ------------------------------------------------
// ECMA 5 - FOR - DON'T USE IT
// IMPERATIVE WAY - BAD
// ------------------------------------------------

// has side-effect (changing variables outside the scope)

var filteredItems1 = undefined;

for (var i = 0; i < items.length; i++) {
  const element = items[i];
  if (element % 2 == 0) {
    filteredItems1 = element;
    break;
  }
}

console.log(filteredItems1);

// ------------------------------------------------
// ECMA 6
// DELARATIVE WAY - BETTER
// ------------------------------------------------

// no side-effect

// 1 - one condition
var filteredItems2 = items.find(function(item) {
  return item % 2 == 0;
});

console.log(filteredItems2);
