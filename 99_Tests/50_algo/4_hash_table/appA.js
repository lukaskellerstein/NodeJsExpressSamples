function main() {

    // Implement HashTable, insert some values, remove some values

    // start 06:24
    // end 06:31

    // start 05:37
    // end 05:44

    // -------------------------------------
    // implement here

    class HashTable {
        constructor() {
            this.arr = new Array(127);
        }

        _hash(key) {
            let hash = 0;

            for (let i = 0; i < key.length; i++) {
                hash += key.charCodeAt(i);
            }

            hash = hash % this.arr.length;

            return hash;
        }

        set(key, value) {

            const hash = this._hash(key);

            this.arr[hash] = value;

        }

        get(key) {
            const hash = this._hash(key);
            return this.arr[hash];
        }

        remove(key) {
            const hash = this._hash(key);

            if (this.arr[hash] !== null) {
                this.arr[hash] = null;
                return true;
            }

            return false;
        }
    }


    // -------------------------------------
    // TEST data
    let myHT = new HashTable();

    //set
    myHT.set("name", "Lukas");
    myHT.set("surname", "Kellerstein");
    myHT.set("age", 33);
    console.log(myHT);

    //get
    console.log(myHT.get("name"));
    console.log(myHT.get("surname"));
    console.log(myHT.get("age"));

    //remove
    console.log(myHT.remove("age"));
    console.log(myHT.remove("age"));
    console.log(myHT);

};
main();
