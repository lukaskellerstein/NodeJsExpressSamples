// ----------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------
// INSTANCE of OBJECT
// ----------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------

// 1a ------------------------ with normal function ES5

const car1a = {
    name: 'Audi',
    maxSpeed: 200,
    horsePower: 250,
    statistics: function() {
      return `Maximal speed: ${maxSpeed}, Power: ${horsePower} KW`;
    },
    logThis: function() {
      console.log(this);
    }
  };

  car1a.logThis();

// 1b ------------------------ normal function ES6

const car1b = {
    name: 'BMW',
    maxSpeed: 250,
    horsePower: 420,
    statistics() {
      return `Maximal speed: ${maxSpeed}, Power: ${horsePower} KW`;
    },
    logThis() {
      console.log(this);
    }
  };


  car1b.logThis();
  

 // 1c ------------------------ with arrow function

const car1c = {
    name: 'Mercedes',
    maxSpeed: 300,
    horsePower: 550,
    statistics = () => {
      return `Maximal speed: ${maxSpeed}, Power: ${horsePower} KW`;
    },
    logThis = () => {
      console.log(this);
    }
  };
 
  car1c.logThis();

// -------------------------------------------------------------
// Factory pattern / function (for create and instance of object)
// -------------------------------------------------------------

function createCar(name, maxSpeed, horsePower) {
    return {
        name: name,
        maxSpeed: maxSpeed,
        horsePower: horsePower,
        statistics = () => {
          return `Maximal speed: ${maxSpeed}, Power: ${horsePower} KW`;
        }
      };
}

const car2a = createCar('Subaru', 250, 300);
const car2a = createCar('Honda', 150, 200);

