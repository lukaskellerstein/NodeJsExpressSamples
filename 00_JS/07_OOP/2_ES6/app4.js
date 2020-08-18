// -----------------------------------------------------------------------
//
// COMPOSITION (Composition over Inheritance)
//
// -----------------------------------------------------------------------


//---------------------------
// OBJECTS
//---------------------------

const mydetails = {}
const firstname = { firstname: "Lukas" }
const surname = { surname: "Kellerstein" }
const occupation = { occupation: "Software Developer" }
const nationality = { nationality: "Czech" }
const tagged = {tags: []};
console.log(mydetails);
Object.assign(mydetails,surname, firstname, occupation, nationality, tagged);
console.log(mydetails);


//---------------------------
// CLASSES
//---------------------------

// helper method for mixin classes
function classMixin(cls, ...src) {
    for (let _cl of src) {
        for (var key of Object.getOwnPropertyNames(_cl.prototype)) {
            cls.prototype[key] = _cl.prototype[key]
        }
    }
}

class Wheel {
    drive() {
        console.log('drive');
    }
}
class Tyre {
    brake() {
        console.log('brake');
    }
}
class Steering{
    steer(x, y) {
        console.log('steer', x,y);
    }
}
class Wiper {
    wipe(speed) {
        console.log('wipe', speed);
    }
}
class Engine {
    start() {
        console.log('start');
    }
}


classMixin(Car, Wheel, Tyre, Steering, Wiper, Engine)

const car = new Car()
car.brake() 
car.wipe(200)
car.start()
car.drive() 
car.steer(10,20) 