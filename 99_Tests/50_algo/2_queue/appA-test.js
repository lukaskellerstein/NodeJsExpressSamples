function main() {

    // Implement Queue and insert "a","b","c".

    // -------------------------------------
    // implement here
    class Queue {

        arr = [];

        enqueue(item) {
            this.arr.push(item);
        }

        dequeue() {
            return this.arr.shift();
        }

    }

    // -------------------------------------
    // TEST data
    var myq = new Queue();
    myq.enqueue("a");
    myq.enqueue("b");
    myq.enqueue("c");
    console.log(myq);

    console.log(myq.dequeue());
    console.log(myq.dequeue());
    console.log(myq.dequeue());
    console.log(myq);

};
main();