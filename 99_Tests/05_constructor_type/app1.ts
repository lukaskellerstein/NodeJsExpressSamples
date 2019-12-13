
// ----------------------
// ???

type AAA = {
    (...args: any[]): (cls: any) => any;
}
const test3: AAA = (a,b) => {return a+b};


type BBB = {new(...args: any[]): any};
const test4: BBB = new BBB({});

// ???
// ----------------------




