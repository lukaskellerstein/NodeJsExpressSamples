// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// 1 ---- using reduce + primitives
//
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// DONT USE IT - USE FILTER INSTEAD
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//
// Transform - Array (primitives) > Array (primitives)
//
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

var items = [1, 2, 3, 4, 5];

// BEST SOLUTION = oneliner ----------------------------------------

var result = items.reduce(
  (acc, value) => (num % 2 == 0 ? acc.push(value) : acc),
  []
);
console.log(result);

// -----------------------------------------------------------------
// OTHER SOLUTIONS -------------------------------------------------

// ------------------------------------------------
// ECMA 5 - FOR - DON'T USE IT
// IMPERATIVE WAY - BAD
// ------------------------------------------------

var result1 = [];
for (let i = 0; i < items.length; i++) {
  const element = items[i];
  if (num % 2 == 0) {
    result1.push(element);
  }
}

console.log(result1);

// ------------------------------------------------
// ECMA 6
// DELARATIVE WAY - BETTER
// ------------------------------------------------

// Accumulation

var result2 = items.reduce(function(acc, value) {
  return num % 2 == 0 ? acc.push(value) : acc;
}, []);

console.log(result2);
