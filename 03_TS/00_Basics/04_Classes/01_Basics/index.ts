

// -----------------------------------------------------------------------
// CLASS 
// -----------------------------------------------------------------------
type Product = { id: number, description: string }

class Rectange
{
    uid: string;
    name: string;

    obj: Product;


    // --------------------------------------
    // OVERLOAD METHODS - WRONG 
    // Cannot have a different implementations
    // --------------------------------------
    // doSomething2(): void
    // {
    //     console.log('doing');
    // }

    // doSomething2(a, b): string
    // {
    //     return 'aaa';
    // }

    // doSomething2(text)
    // {
    //     console.log(text);
    // }

    // --------------------------------------
    // OVERLOAD METHODS - WORKS, but WRONG 
    // We should not have a different number of input parameters  
    // --------------------------------------
    getProducts(description: string, id: number): Product[];
    getProducts(id: number): Product;
    getProducts(union: number | string, id?: number): Product[] | Product
    {
        if (typeof union === "number") {
            console.log(`Getting the product info for id ${union}`);
            return { id: union, description: 'great product' };
        } else if (typeof union === "string") {
            console.log(`Getting product with description ${union}`);
            return [{ id: 123, description: 'blue jeans' },
            { id: 789, description: 'blue jeans' }];
        } else {
            return null;
        }
    }

    // --------------------------------------
    // OVERLOAD METHODS - WORKS
    // We can have a different type of one input parameter -> use UNION type
    // We can have a different type of return parameter -> use UNION type
    // --------------------------------------
    getProducts1(description: string): Product[];
    getProducts1(id: number): Product;
    getProducts1(unionParam: number | string): Product[] | Product
    {
        if (typeof unionParam === "number") {
            console.log(`Getting the product info for id ${unionParam}`);
            return { id: unionParam, description: 'great product' };
        } else if (typeof unionParam === "string") {
            console.log(`Getting product with description ${unionParam}`);
            return [{ id: 123, description: 'blue jeans' },
            { id: 789, description: 'blue jeans' }];
        } else {
            return null;
        }
    }


    // --------------------------------------
    // OVERLOAD METHODS - WRONG 
    // We should not have a different number of input parameters
    // --------------------------------------
    getProducts2(one: string): string;
    getProducts2(one: string, two: string): string;
    getProducts2(one: string, two: string, three:string): string{
        return "";
    }

    // instead of above use below

    getProducts3(one: string, two?:string, three?: string): string {
        return one + (typeof two === 'undefined' ? "" : two) +  (typeof three === 'undefined' ? "" : three);
    }



    getSomething()
    {
        return 'something';
    }
}

// Inheritance --------
class ArtRectangle extends Rectange
{

    // OVERRIDE METHODS from parent
    getProducts(description: string): Product[];
    getProducts(id: number): Product;
    getProducts(product: number | string): Product[] | Product
    {
        return null
    }
}


// instantiate -------

//right
const var5: Rectange = new Rectange();
var5.uid = 'asdfasfasfsaf';
var5.name = 'myfirstRectange';

// wrong
const var4: Rectange = <Rectange>{ uid: 'asdfasfasfsaf', name: 'myfirstRectange' };
console.log(var4);


//generic ------------
class StoreService<T> {
    save(o: T): void
    {
        //something
        console.log(o);
    };
}

class StoreService2<T extends Rectange>{
    save(o: T)
    {
        //something
        console.log(o.name);
    }
}


//nullish coalescing ---
const some: Rectange = {} as Rectange;

console.log(some?.obj?.id);
