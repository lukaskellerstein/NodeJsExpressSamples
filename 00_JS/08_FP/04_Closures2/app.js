// ---------------------------------------------
// IN-PURE CLOSURE function
// modify data
// ---------------------------------------------

const newWorld = () => {
  let var1 = 0;

  return function addNewPeople() {
    var1++;
    return var1;
  };
};

const earth = newWorld();

console.log(earth());
console.log(earth());
console.log(earth());
console.log(earth());
console.log(earth());

// ---------------------------------------------
// PURE CLOSURE function
// doesn't modify data
// ---------------------------------------------

const newWorld2 = () => {
  let var1 = 0;

  return function getAmountOfPeople() {
    return var1;
  };
};

const mars = newWorld2();

console.log(mars());
console.log(mars());
console.log(mars());
console.log(mars());
console.log(mars());
