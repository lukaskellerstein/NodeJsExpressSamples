//-------------------------------
// NO INTERFACES !!!!!
//-------------------------------

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

  // overloading
  statistics(input) {
    return `SLOOOOOOOW ${input}`;
  }

  // WARNING - NOT POSSIBLE !!!!!
  // SECOND METHOD WILL OVERRIDE THE PREVIOUS !!!!!
  //   statistics(a, b) {
  //     return `slow ${a} - ${b}`;
  //   }
}

// USAGE

let trabant = new SlowCar('Trabant', 70, 40);
console.log(trabant.statistics('VERY'));
// console.log(trabant.statistics(50, 60));
