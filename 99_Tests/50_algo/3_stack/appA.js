function main() {

    // Implement Stack and insert "a","b","c".
    // dequeue one element.
    // A stack follows the LIFO (Last In First Out)

    // start 08:58
    // end 08:59

    // start 06:12
    // end 06:13

    // start 05:36
    // end

    // -------------------------------------
    // implement here

    class Stack {
        constructor() {
            this.arr = [];
        }

        enqueue(value) {
            this.arr.push(value);
        }

        dequeue() {
            return this.arr.pop();
        }
    }



    // -------------------------------------
    // TEST data
    var myq = new Stack();
    myq.enqueue("a");
    myq.enqueue("b");
    myq.enqueue("c");
    console.log(myq);

    console.log(myq.dequeue());
    console.log(myq);
};
main();