// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// 2 ---- using map + objects
//
// Transform - ARRAY (Objects) > ARRAY (objects)
//
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

var someItems = [
  { id: '1232131424', name: 'Audi', HP: 200 },
  { id: '23454363453', name: 'BMW', HP: 300 },
  { id: '3534543566', name: 'Mercedes', HP: 350 }
];

// BEST SOLUTION = oneliner ----------------------------------------

var newItems = someItems.map(item => item.name);
console.log(newItems);

// OTHER SOLUTIONS -------------------------------------------------

// ------------------------------------------------
// ECMA 5 - FOR - DON'T USE IT
// IMPERATIVE WAY - BAD
// ------------------------------------------------

// has side-effect (changing variables outside the scope)

var result = [];

for (let i = 0; i < someItems.length; i++) {
  const element = someItems[i];
  result.push(element.name);
}

console.log(result);

// ------------------------------------------------
// ECMA 6
// DELARATIVE WAY - BETTER
// ------------------------------------------------

// no side-effect

// 1 ---- using map
var newItems2 = someItems.map(function(item) {
  return item.name;
});

console.log(newItems2);

// 2 ---- using map + arrow functions
var newItems3 = someItems.map(item => {
  return item.name;
});

console.log(newItems3);

// 3 ---- using map + external functions
function selectName(item) {
  return item.name;
}

var newItems4 = someItems.map(selectName);

console.log(newItems4);
