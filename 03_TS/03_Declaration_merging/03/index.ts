

// ----------------------------------------
// MERGING Class and Namespace - ???? - advantage ???
// ----------------------------------------


class Car {
    name: string;
    engine: Car.Engine;
}

namespace Car {
    export class Engine {
        hp: number;
        constructor(hp: number){
            this.hp = hp;
        }
    }
}



const testCar = new Car();
testCar.name = 'audi';
testCar.engine = new Car.Engine(160);
console.log(testCar);

