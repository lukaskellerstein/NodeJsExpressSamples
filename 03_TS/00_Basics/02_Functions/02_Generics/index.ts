
// -----------------------------------------------------------------------
// Functions (normal)
// -----------------------------------------------------------------------

//void
function doSomething1<T extends string | number>(a: T, b: T){
    console.log(typeof a);
    console.log(typeof b);
}

doSomething1<number>(1,2);
doSomething1<string>("a","b");


//func
function doSomething2<T>(a:T): T{
    return a;
}

doSomething2<number>(1);
doSomething2<string>("a");
doSomething2<boolean[]>([true, false]);
doSomething2<{}>({name:"testObject", description: "test object"});



// -----------------------------------------------------------------------
// Functions (arrow)
// -----------------------------------------------------------------------

//void
const doSomething3 = <T>(a: T, b: T) => {
    console.log(typeof a);
    console.log(typeof b);
}

doSomething3<number>(1,2);
doSomething3<string>("a","b");

//func
const doSomething4 = <T>(a:T): T => {
    return a;
}

doSomething4<number>(1);
doSomething4<string>("a");
doSomething4<boolean[]>([true, false]);
doSomething4<{}>({name:"testObject", description: "test object"});


// -----------------------------------------------------------------------
// Multiple
// -----------------------------------------------------------------------
type Car = {
    engine: string;
}

const doSomething5 = <T extends string,U extends Car,V extends "Vehical" | "Human">(obj1: string, obj2: Car, type: "Vehical" | "Human") => {
    console.log(obj1);
    console.log(obj2);
    console.log(type);
}


const doSomething6 = (obj1: string, obj2: Car, type: "Vehical" | "Human") => {
    console.log(obj1);
    console.log(obj2);
    console.log(type);
}


// -----------------------------------------------------------------------
// Example - 1
// -----------------------------------------------------------------------

const merge = <T extends object, U extends object>(obj1: T, obj2: U): T & U => {
    return Object.assign(obj1,obj2);
}

type Named = {
    name: string;
}

type Unique = {
    id: string;
}

type UniqueNamed = Unique & Named;

const testMerge1: UniqueNamed = merge<Named,Unique>({name: "a"}, {id: "1"});

//cannot do that because T should be and object
const testMerge2 = merge<string,number>("test", 5);


// -----------------------------------------------------------------------
// Example - 2
// -----------------------------------------------------------------------

type HasLength = { length: number }

const getLength = <T extends HasLength>(a: T): string => {
    return `Has length ${a.length}`;
}

const testString = "some random text";
const testArray: Array<string> = ["a", "b"];

const result1 = getLength<string>(testString);
const result2 = getLength<Array<string>>(testArray);

//cannot do that, because `number` doesn't have a length
const result3 = getLength<number>(4);



// -----------------------------------------------------------------------
// Example - 3
// -----------------------------------------------------------------------

class A {}
class B {}
type C = {}
const factory = <T extends A | B>(a: new () => T): T => {
    return new a();
}

const test1 = factory(A);
const test2 = factory(B);
const test3 = factory(C);


// -----------------------------------------------------------------------
// Example - 4
// -----------------------------------------------------------------------

interface FunctionWithTypedReturn<T> extends Function {
    (...args: any[]): T;
}
