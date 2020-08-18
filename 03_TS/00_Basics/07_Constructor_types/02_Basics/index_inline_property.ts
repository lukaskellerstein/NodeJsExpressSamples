module Test1 {


// differences

// new (...args: any[]) => T
// vs
// { new(...args: any[]): T }
// => RESULT: SAME


// -------------------------------------------------------
// -------------------------------------------------------
// CLASSIC
// -------------------------------------------------------
// -------------------------------------------------------


// ------------------------
// Class
// ------------------------
class Car {

    // DOESN'T MAKE SENSE TO DEFINE
    // ??? what does it mean
    // new(...args: any[]): Car {
    //     // ??? - what to return here
    //     return {} as Car;
    // };

    // prop1 = class - which contructor returns Car
    prop1: new (...args: any[]) => Car;
    // prop2 = class - which contructor returns Car
    prop2: { new(...args): Car };
    prop3: Car;

    id: string;
    name: string;
    description: string;
    hp: number;

    constructor(name: string) {
        this.name = name;
    }

    start() {
        console.log('Starting');
    }
}

const sampleCar: Car = new Car('Subaru');

sampleCar.id = '1';
sampleCar.description = 'rally car';
sampleCar.hp = 300;

// const sampleCarInstance = sampleCar.new("something");
// console.log('sampleCarInstance', sampleCarInstance);

sampleCar.prop1 = Car;
sampleCar.prop2 = Car;

const whoalaaaaInstance1 = new sampleCar.prop1();
console.log('whoalaaaaInstance1', whoalaaaaInstance1);
const whoalaaaaInstance2 = new sampleCar.prop2();
console.log('whoalaaaaInstance2', whoalaaaaInstance2);

// ------------------------
// Interface
// ------------------------
interface Movable {

    // DOESN'T MAKE SENSE TO DEFINE
    // ??? what does it mean
    // new(...args: any[]): Car;

    // prop1 = class - which contructor returns Car
    prop1: new (...args: any[]) => Car;
    // prop2 = class - which contructor returns Car
    prop2: { new(...args: any[]): Car };

    x: number;
    y: number;

    move();
}

class CarMovable implements Movable {

    // DOESN'T MAKE SENSE TO USE
    // ??? what does it mean
    // new(...args: any[]): Car {
    //     // ??? - what to return here
    //     return {} as Car;
    // };

    prop1 = Car; 
    prop2 = Car;

    x: number = 100;
    y: number = 101;

    move() {
        throw new Error("Method not implemented.");
    }
}

const sampleMovable: Movable = {

    // DOESN'T MAKE SENSE TO USE
    // ??? what does it mean
    // new(...args: any[]): Car
    // {
    //     // ??? - what to return here
    //     return {} as Car;
    // },

    prop1: Car,
    prop2: Car,

    x: 100,
    y: 101,

    move() {
        throw new Error("Method not implemented.");
    }
}

// ------------------------
// Type = type alias
// ------------------------

type Movable2 = {

    // DOESN'T MAKE SENSE TO DEFINE
    // ??? what does it mean
    // new(...args: any[]): Car;

    // prop1 = class - which contructor returns Car
    prop1: new (...args: any[]) => Car;
    // prop2 = class - which contructor returns Car
    prop2: { new(...args: any[]): Car };

    x: number;
    y: number;

    move();
}


const sampleMovable2: Movable2 = {

    // DOESN'T MAKE SENSE TO USE
    // ??? what does it mean
    // new(...args: any[]): Car
    // {
    //     // ??? - what to return here
    //     return {} as Car;
    // },

    prop1: Car,
    prop2: Car,

    x: 100,
    y: 101,

    move() {
        throw new Error("Method not implemented.");
    }
}


// ------------------------
// Object = object literal
// ------------------------
const obj1 = {

    // DOESN'T MAKE SENSE TO DEFINE
    // new(...args: any[]): Car
    // {
    //     // ??? - what to return here
    //     return {} as Car;
    // },

    prop1: Car,
    prop2: Car,

    text: 'random text'
}


// ------------------------
// Function
// ------------------------
// ??? 


// -------------------------------------------------------
// -------------------------------------------------------
// GENERIC
// -------------------------------------------------------
// -------------------------------------------------------


// ------------------------
// Class
// ------------------------
class HasContructor1<T> {

    // DOESN'T MAKE SENSE TO DEFINE
    // ???
    // new(...args: any[]): T
    // {
    //     // ???
    //     return null;
    // }

    // prop1 = class - which contructor returns T
    prop1: new (...args: any[]) => T;
    // prop2 = class - which contructor returns T
    prop2: { new(...args): T };
}


// ------------------------
// Interface
// ------------------------
interface HasContructor2<T>
{
    // DOESN'T MAKE SENSE TO DEFINE
    // ???
    // new(...args: any[]): T;

    // prop1 = class - which contructor returns T
    prop1: new (...args: any[]) => T;
    // prop2 = class - which contructor returns T
    prop2: { new(...args: any[]): T };

}


// ------------------------
// Type = type alias
// ------------------------
type HasContructor3<T> = { 
    // DOESN'T MAKE SENSE TO DEFINE
    // ??? 
    // new(...args: any[]): Movable;

    // prop1 = class - which contructor returns T
    prop1: new (...args: any[]) => T;
    // prop2 = class - which contructor returns T
    prop2: { new(...args: any[]): T };
}



// ------------------------
// Object = object literal
// ------------------------
// cant be done in generic way
}