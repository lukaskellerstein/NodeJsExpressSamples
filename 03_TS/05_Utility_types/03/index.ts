// -------------------------------------------------
// ReturnType
//
// Obtain the return type of a function type
// -------------------------------------------------

/*

type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

*/


let func1 = (text: string) => ({ a: 23, b: 33, c: text });

type Func1Type = ReturnType<typeof func1>;
const var1: Func1Type = {
    a: 99,
    b: 99,
    c: 'blabla'
} as Func1Type;
console.log(JSON.stringify(var1, null, 2));



// -------------------------------------------------
// Parameters
//
// Obtain the parameters of a function type in a tuple
// -------------------------------------------------

/*

type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

*/

let func2 = (text1: string, text2: string) => ({ a: 23, b: 33, c: text1, d: text2 });

type Func2ParamsType = Parameters<typeof func2>;
const var2: Func2ParamsType = ['aaa', 'bbb'] as Func2ParamsType;


// -------------------------------------------------
// InstanceType
//
// Obtain the return type of a constructor function type
// -------------------------------------------------

/*

type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;

*/

class User {
    name: string;
    age: number;
    address: string;
    height: number;
    width: number;
}

type User1Type = InstanceType<typeof User>;

const var3: User1Type = {
    name: '',
    age: 33
};
console.log(JSON.stringify(var3, null, 2));


// -------------------------------------------------
// Constructor Parameters
//
// Obtain the parameters of a constructor function type in a tuple
// -------------------------------------------------

/*

type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;

*/

class Car {
    name: string;
    hp: number;
    spz: string;
    speed: number;

    constructor(name: string, hp: number){
        this.name = name;
        this.hp = hp;
    }
}

type CarParams = ConstructorParameters<typeof Car>;
const var4: CarParams = ['Audi', 400] as CarParams;