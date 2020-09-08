


class Queue {

    constructor() {
        this.data = [];
    }

    enqueue(item) {
        this.data.push(item);
    }

    dequeue() {
        return this.data.shift();
    }

}

var myq = new Queue();
myq.enqueue("a");
myq.enqueue("b");
myq.enqueue("c");

console.log(myq);


console.log(myq.dequeue());
console.log(myq.dequeue());
console.log(myq.dequeue());

console.log(myq);