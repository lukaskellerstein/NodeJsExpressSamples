

type User = {
    uid: string;
    name: string;
}



class DataStorage<T extends string | number | User> {

    db: Array<T> = [];

    add(item: T){
        this.db.push(item);
    }

    remove(item:T){
        if(this.db.indexOf(item) === -1) return;
        this.db.splice(this.db.indexOf(item), 1);
    }
}

const myDB = new DataStorage<string>();
myDB.add("Audi");
myDB.add("Subaru");
myDB.remove("Audi");