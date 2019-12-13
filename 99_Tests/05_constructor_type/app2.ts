
// --------------------------
// ??? WHAT DOES IT MEAN ?
// --------------------------

// viz. lib.es5.d.ts
interface FunctionConstructor {
    /**
     * Creates a new function.
     * @param args A list of arguments the function accepts.
     */
    new(...args: string[]): Function;
    (...args: string[]): Function;
    readonly prototype: Function;
}


// viz. lib.es5.d.ts
interface ObjectConstructor {
    new(value?: any): Object;
    (): any;
    (value: any): any;

}

// ???

interface Movable {
    x: string;
    y: string;
    move();
}

interface MovableConstructor {
    new(...args: string[]): Movable;
    (...args: string[]): Movable;
    readonly prototype: Movable;
}

declare var Movable = MovableConstructor;

const test1 = new Movable