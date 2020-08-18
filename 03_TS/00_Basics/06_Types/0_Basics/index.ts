
// -----------------------------------------------------------------------
// TYPE alias (as Interface but more powerfull) 
// -----------------------------------------------------------------------
type Product = { id: number, description: string, warehouse: string }
type Car = { id: number, name: string, speed: number, description: string, doSomething(), getSomething() };
type ProductType = "Phone" | "Laptop" | "Game Console";

//instantiate
const var2: Car = { name: "Subaru", speed: 250 } as Car;
console.log(var2);

//type inside a type
type CarExchange = { car1: Car, car2: Car };

//instantiate
const var3: CarExchange = { car1: var2, car2: var2 }


// type "exclusive or"
type Telephone = string | number;
type Address = { street: string, city: string, zip: string } | { latitude: number, longitude: number }

//generic
type Movable<T> = { move(o: T): void }
