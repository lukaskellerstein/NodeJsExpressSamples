
// -----------------------------------------------------------------------
// TYPE alias (as Interface but more powerfull) 
// -----------------------------------------------------------------------
type Product = { id: number, description: string }
type Car = { id: string, name: string, speed: number, description: string, doSomething(), getSomething() };

//instantiate
const var2: Car = { name: "Subaru", speed: 250 }
console.log(var2);


//type inside a type
type CarExchange = { car1: Car, car2: Car };

//instantiate
const var3: CarExchange = { car1: var2, car2: var2 }


// type unions
type Telephone = string | number;
type Address = { street: string, city: string, zip: string } | { latitude: number, longitude: number }

//generic
type Movable<T> = { move(o: T): void }
