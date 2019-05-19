// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// 1 ---- using filter + objects
//
// Transform - ARRAY (Objects) > ARRAY (objects)
//
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

var items = [
  { id: '1232131424', name: 'Audi', HP: 200 },
  { id: '23454363453', name: 'BMW', HP: 300 },
  { id: '3534543566', name: 'Mercedes', HP: 350 }
];

// BEST SOLUTION = oneliner ----------------------------------------

var result = items.filter(item => item.HP > 300);
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
  if (items[i].HP > 300) {
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
  return item.HP > 300;
});

console.log(filteredItems2);

// 2 - more conditions
var filteredItems2 = items.filter(function(item) {
  return item.HP > 300 && item.speed > 200;
});

console.log(filteredItems2);
