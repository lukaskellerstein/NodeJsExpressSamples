// ES5 ----------------------------------
function newWorld1() {
  var var1 = 0;

  return function addNewPeople() {
    var1++;
    return var1;
  };
}

var earth1 = newWorld1();

console.log(earth1());
console.log(earth1());
console.log(earth1());
console.log(earth1());
console.log(earth1());

// ES6 ----------------------------------
const newWorld2 = () => {
  let var1 = 0;

  return () => {
    var1++;
    return var1;
  };
};

const earth = newWorld2();

console.log(earth2());
console.log(earth2());
console.log(earth2());
console.log(earth2());
console.log(earth2());
