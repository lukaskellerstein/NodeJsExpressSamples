class HashTable {

    constructor(obj) {
        this.length = 0;
        this.items = {};
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                this.items[p] = obj[p];
                this.length++;
            }
        }
    }

    setItem = (key, value) => {
        if (!this.hasItem(key)) {
            this.length++;
        }
        this.items[key] = value;
    }

    getItem = (key) => {
        return this.hasItem(key) ? this.items[key] : undefined;
    }

    hasItem = (key) => {
        return this.items.hasOwnProperty(key);
    }

    removeItem = (key) => {
        if (this.hasItem(key)) {
            this.length--;
            delete this.items[key];
        }
        else {
            return undefined;
        }
    }

    keys = () => {
        var keys = [];
        for (var k in this.items) {
            if (this.hasItem(k)) {
                keys.push(k);
            }
        }
        return keys;
    }

    values = () => {
        var values = [];
        for (var k in this.items) {
            if (this.hasItem(k)) {
                values.push(this.items[k]);
            }
        }
        return values;
    }


}