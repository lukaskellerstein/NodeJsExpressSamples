
// -----------------------------------------------------------------------
// TYPE alias 
// -----------------------------------------------------------------------


type Tagged1 = {
    tag: string;

    getTag(): string;
    renewTag(): void;
}

type Draggable1 = {
    drag(): never;
}


// type union
type UIElement1 = Tagged1 & Draggable1 ;

// instantiate
const aaa: UIElement1 = {
    tag: "aaaa",
    getTag(): string {
        return this.tag;
    },
    renewTag(): void{
        this.tag = 'NEW';
    },
    drag(): never{
        console.log('DRAGGING');
        throw "error";
    }
}


// -----------------------------------------------------------------------
// Interfaces
// -----------------------------------------------------------------------

interface Tagged2 {
    tag: string;

    getTag(): string;
    renewTag(): void;
}

interface Draggable2 {
    drag(): never;
}

// interface unions
interface UIElement2 extends Tagged2, Draggable2 {}

// instantiate
const bbb: UIElement2 = {
    tag: "aaaa",
    getTag(): string {
        return this.tag;
    },
    renewTag(): void{
        this.tag = 'NEW';
    },
    drag(): never{
        console.log('DRAGGING');
        throw "error";
    }
}

// -----------------------------------------------------------------------
// MIX
// -----------------------------------------------------------------------

interface UIElement3 extends Tagged1, Draggable1 {} //union of types for inteface

type UIElement4 = Tagged2 & Draggable2; //union of intefaces for type

