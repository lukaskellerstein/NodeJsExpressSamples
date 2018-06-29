
// ------------------------------------------------
// ECMA 5 -----------------------------------------
// ------------------------------------------------
var items1 = [1,2,3,4,5];

for( var i = 0; i < items1.length; i++) {
    items1[i] = items1[i] * 2;
}

console.log(items1);

// ------------------------------------------------
// ECMA 6 -----------------------------------------
// ------------------------------------------------

// 1 ---- using map
var items2 = [1,2,3,4,5];
var newItems2 = [];

newItems2 = items2.map(function(item){
    return item * 2;
});

console.log(newItems2);

// 2 ---- using map + arrow functions
var items3 = [1,2,3,4,5];
var newItems3 = [];

newItems3 = items3.map((item) => {
    return item * 2;
});

console.log(newItems3);

// 3 ---- using map + external functions
var items4 = [1,2,3,4,5];
var newItems4 = [];

function doubledit(item){
    return item * 2;
}

newItems4 = items4.map(doubledit);

console.log(newItems4);


// ---------------------------------------
// 4 ---- using map + objects
// ---------------------------------------

// like transformation objects 

var someItems = [
    {id: "1232131424", name: "Audi", HP: 200 },
    {id: "23454363453", name: "BMW", HP: 300 },
    {id: "3534543566", name: "Mercedes", HP: 350 }
]

var result = someItems.map((item) => {
        return item.name
});

console.log(result);


// -------------------------------------------------------
// -------------------------------------------------------
// BAD IDEAS
// -------------------------------------------------------
// -------------------------------------------------------

// use 'map' as 'filter'

var someItems = [
    {id: "1232131424", name: "Audi", HP: 200 },
    {id: "23454363453", name: "BMW", HP: 300 },
    {id: "3534543566", name: "Mercedes", HP: 350 }
]

var result = someItems.map((item) => {
    if(item.HP > 300){
        return item.name
    }
});

console.log(result);



// ???

var ids = ['5632953c4e345e145fdf2df8','563295464e345e145fdf2df9']
var messages = ids.map((value, index, list) => `ID of ${index} element is ${value} = ${list}`) // implicit return

var messages2 = ids.map((item) => {
    return `someething ${item}`
});

console.log(messages);
console.log(messages2);