function main() {

    // Implement Queue and insert "a","b","c".
    // dequeue one element.
    // QUEUE is FIFO list(First In First Out)

    // start 08:56
    // end 08:57

    // start 06:10
    // end 06:12

    // start 05:35
    // end 05:36

    // -------------------------------------
    // implement here

    class Queue {
        constructor() {
            this.arr = [];
        }

        enqueue(value) {
            this.arr.push(value);
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
    console.log(myq);
};
main();