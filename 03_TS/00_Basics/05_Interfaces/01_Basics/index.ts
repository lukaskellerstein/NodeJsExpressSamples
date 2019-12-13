

// -----------------------------------------------------------------------
// INTERFACE 
// -----------------------------------------------------------------------
interface IShape
{
    name: string,
    height: number,
    weight: number,
    doSomething(),
    doSomething(text),
    getSomething()
}

//instantiate
const var1: IShape = { name: "weird", height: 10, weight: 20 };
console.log(var1);

//type casting - DONT USE IT TOO MUCH
const var2: IShape = { name: "weird", height: 10, weight: 20 } as IShape;
console.log(var2);

//generic
interface IPrintable<T>
{
    print(t: T): string
}
