// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// BAD IDEAS - DON'T USE IT
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

// use 'map' as 'filter'

var someItems = [
  { id: '1232131424', name: 'Audi', HP: 200 },
  { id: '23454363453', name: 'BMW', HP: 300 },
  { id: '3534543566', name: 'Mercedes', HP: 350 }
];

var result = someItems.map(item => {
  if (item.HP > 300) {
    return item.name;
  }
});

console.log(result);

// ???

var ids = ['5632953c4e345e145fdf2df8', '563295464e345e145fdf2df9'];
var messages = ids.map(
  (value, index, list) => `ID of ${index} element is ${value} = ${list}`
); // implicit return

var messages2 = ids.map(item => {
  return `someething ${item}`;
});

console.log(messages);
console.log(messages2);
