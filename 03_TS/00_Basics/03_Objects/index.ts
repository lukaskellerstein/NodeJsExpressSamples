
// -----------------------------------------------------------------------
// Objects = Object literals
// -----------------------------------------------------------------------

const obj1 = {
    id: "1",
    name: "a"
}


// -----------------------------------------------------------------------
// What is really Object ??? 
// -----------------------------------------------------------------------

// 2. - Object = "object"
const obj3: object = {id: "1", name: "a"};
console.log(obj3);


// 1. - Object = "{ [key: string]: any }" 
// Not really, because Object is also Array 
// and Map<string,any> is not for Array (should be Map<number, any>)) 
const obj2: { [key: string]: any } = {id: "1", name: "a"};
console.log(obj2);

// 3. - Object = Map 
// Not really, because Object is also Array 
// and Map<string,any> is not for Array (should be Map<number, any>)) 
const aMap: Map<string,any> = new Map<string,any>();
aMap.set("prop1","val1");





