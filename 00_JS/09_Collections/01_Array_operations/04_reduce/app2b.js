// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// 1 ---- using reduce + objects
//
// Transform - ARRAY (Objects) > object
//
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

var items = [
  { id: '1232131424', name: 'Audi', HP: 200 },
  { id: '23454363453', name: 'BMW', HP: 300 },
  { id: '3534543566', name: 'Mercedes', HP: 350 }
];

// BEST SOLUTION = oneliner ----------------------------------------
// not possible
var result = items.reduce((acc, value) => {
  acc[value.name] = value.HP;
  return acc;
}, {});
console.log(result);

// -----------------------------------------------------------------
// OTHER SOLUTIONS -------------------------------------------------

// ------------------------------------------------
// ECMA 5 - FOR - DON'T USE IT
// IMPERATIVE WAY - BAD
// ------------------------------------------------

var result1 = {};
for (let i = 0; i < items.length; i++) {
  const element = items[i];
  result1[element.name] = element.HP;
}

console.log(result1);

// ------------------------------------------------
// ECMA 6
// DELARATIVE WAY - BETTER
// ------------------------------------------------

// Accumulation

var result2 = items.reduce(function(acc, value) {
  acc[value.name] = value.HP;
  return acc;
}, []);

console.log(result2);
