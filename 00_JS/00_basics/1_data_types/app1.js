
class TestObj {
    name;
    desc;
}


var n = 5;

var arr = [1, 2, 3, 4];

var obj1 = {
    name: "AAA",
    desc: "BBB"
}

var obj2 = new TestObj();
obj2.name = "AAA";
obj2.desc = "BBB";



const changeMeNumber = (n) => n * 2;
const changeMeArray = (n) => n.push("ADDED");
const changeMeObj = (n) => n.name = "CHANGED";
const changeMeClass = (n) => n.name = "CHANGED";


console.log(changeMeNumber(n));
console.log(n);

console.log(changeMeArray(arr));
console.log(arr);

console.log(changeMeObj(obj1));
console.log(obj1);

console.log(changeMeClass(obj2));
console.log(obj2);