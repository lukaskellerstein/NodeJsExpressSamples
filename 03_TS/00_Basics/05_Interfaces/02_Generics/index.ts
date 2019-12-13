

// -----------------------------------------------------------------------
// INTERFACE - Generics
// -----------------------------------------------------------------------

interface DataStorage<T>
{
    db: Array<T>,
    add(item: T),
    delete(item: T)
}

//instantiate
const var1: DataStorage<string> = {
    db: new Array<string>(), 
    add(item: string) { 
        this.db.push(item) 
    }, 
    delete(item: string)
    {
        if(this.db.indexOf(item) === -1) return;
        this.db.splice(this.db.indexOf(item), 1);
    },
    otherMethods(){}
};
        