// ----------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------
// DEFINITION of OBJECT - Constructor Functions
// ----------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------

var someGlobalVar = 'hahaha';

// ------------------------------------
// Normal function --------------------
// ------------------------------------

// Constructor functions - starting with CAPITAL first letter
// - using `this` like store for properties

function CarA(name, maxSpeed, horsePower) {
  this.name = name;
  this.maxSpeed = maxSpeed;
  this.horsePower = horsePower;
  this.statistics = function() {
    return `Name ${name}, Maximal speed: ${maxSpeed}, Power: ${horsePower} KW`;
  };
  this.logThis = function() {
    console.log(this);
  };
}

// + NEW keyword !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const car1 = new CarA('audi', 200, 250);
console.log(car1.statistics());
car1.logThis();
car1.logThisAgain = function() {
  console.log(this);
};
car1.logThisAgain();

const car2 = new CarA('BMW', 250, 420);
console.log(car2.statistics());

// ------------------------------------
// Arrow function ---------------------
// ------------------------------------

// Constructor functions - starting with CAPITAL first letter
// - using `this` like store for properties

function CarB(name, maxSpeed, horsePower) {
  this.name = name;
  this.maxSpeed = maxSpeed;
  this.horsePower = horsePower;
  this.statistics = () => {
    return `Name ${name}, Maximal speed: ${maxSpeed}, Power: ${horsePower} KW`;
  };
  this.logThis = () => {
    console.log(this);
  };
}

// + NEW keyword !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const car3 = new CarB('audi', 200, 250);
console.log(car3.statistics());
car3.logThis();
car3.logThisAgain = () => {
  console.log(this);
};
car3.logThisAgain();

const car4 = new CarB('BMW', 250, 420);
console.log(car4.statistics());
