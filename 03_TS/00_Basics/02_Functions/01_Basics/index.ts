
// -----------------------------------------------------------------------
//Functions 
// -----------------------------------------------------------------------

function doSomething(a: number, b: number){
    return a+b;
}

//arrow function 
const doSomething2 = (a:number, b: number) => {
    return a+b;
}

const doSomething3 = (a: number, b:number) => a+b;


//override
function add(a:string, b:string):string;
function add(a:number, b:number): number;
function add(a: any, b:any): any {
    return a + b;
}

// -----------------------------------------------------------------------
// What is really Function ??? 
// -----------------------------------------------------------------------

const aa= () => {}

// 1. - Function = "(...args: any[]) => any"
const func1: (...args: any[]) => any = (a: number, b: number) => {return a+b};
console.log(func1(1,2,3,4));

// 2. - Function = "{(...args: any[]): any}"
const func2: {(...args: any[]): any} = (a: number, b:number) => {return a+b};
console.log(func2(1,2,3,4));

// 3. - Function = "Function" type
const func3: Function = (a: number, b:number) => {return a+b};
console.log(func3(1,2,3,4));