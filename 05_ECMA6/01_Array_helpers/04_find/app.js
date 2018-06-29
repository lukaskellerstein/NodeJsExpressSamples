
// ------------------------------------------------
// ECMA 5 -----------------------------------------
// ------------------------------------------------

var someItems1 = [
    {id: "1232131424", name: "Audi", HP: 200 },
    {id: "23454363453", name: "BMW", HP: 300 },
    {id: "3534543566", name: "Mercedes", HP: 350 }
]

var filteredItems1 = [];


for( var i = 0; i < someItems1.length; i++) {
    if(someItems1[i].HP > 300){
        filteredItems1.push(someItems1[i]);
    }
}

console.log(filteredItems1);

// ------------------------------------------------
// ECMA 6 -----------------------------------------
// ------------------------------------------------

// 1 - one condition
var someItems2 = [
    {id: "1232131424", name: "Audi", HP: 200 },
    {id: "23454363453", name: "BMW", HP: 300 },
    {id: "3534543566", name: "Mercedes", HP: 350 }
]

var filteredItems2 = [];


filteredItems2 = someItems2.find(function(item){
    return item.HP > 300;
});

console.log(filteredItems2);