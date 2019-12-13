
// ------------------------------------------------------------------------
// OVERVIEW
// ------------------------------------------------------------------------


// NO INTERFACES !!!!!

// Classes
class Car {
  constructor(name, maxSpeed, horsePower) {
    this.name = name;
    this.maxSpeed = maxSpeed;
    this.horsePower = horsePower;
  }
  statistics() {
    return `Name ${name}, Maximal speed: ${maxSpeed}, Power: ${horsePower} KW`;
  }
  logThis() {
    console.log(this);
  }
}

//Inheritance ----------------------------

class FreeCar extends Car {
  constructor(name, maxSpeed, horsePower) {
    super(name, maxSpeed, horsePower);
  }
}

class PaidCar extends Car {
  constructor(name, maxSpeed, horsePower, price) {
    super(name, maxSpeed, horsePower);
    this.price = price;
  }
}

//Polymorphism -----------------------------

class FastCar extends Car {
  constructor(name, maxSpeed, horsePower) {
    super(name, maxSpeed, horsePower);
  }

  // overriding
  statistics() {
    return `FAAAAAAAAST`;
  }
}

class SlowCar extends Car {
  constructor(name, maxSpeed, horsePower) {
    super(name, maxSpeed, horsePower);
  }

  // overriding
  statistics(input) {
    return `SLOOOOOOOW ${input}`;
  }

}

// USAGE

let trabant = new SlowCar('Trabant', 70, 40);
console.log(trabant.statistics('VERY'));
