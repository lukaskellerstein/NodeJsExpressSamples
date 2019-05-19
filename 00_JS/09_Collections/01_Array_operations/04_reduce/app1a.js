// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// 1 ---- using reduce + primitives
//
// Transform - Array (primitives) > primitive
//
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

var items = [1, 2, 3, 4, 5];

// BEST SOLUTION = oneliner ----------------------------------------

var result = items.reduce((acc, value) => acc + value, 0);
console.log(result);

// -----------------------------------------------------------------
// OTHER SOLUTIONS -------------------------------------------------

// ------------------------------------------------
// ECMA 5 - FOR - DON'T USE IT
// IMPERATIVE WAY - BAD
// ------------------------------------------------

var result1 = 0;
for (let i = 0; i < items.length; i++) {
  const element = items[i];
  result1 += element;
}

console.log(result1);

// ------------------------------------------------
// ECMA 6
// DELARATIVE WAY - BETTER
// ------------------------------------------------

// Accumulation

var result2 = items.reduce(function(acc, value) {
  return acc + value;
}, 0);

console.log(result2);
