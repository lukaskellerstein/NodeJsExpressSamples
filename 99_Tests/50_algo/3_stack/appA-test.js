function main() {

    // Implement Stack and insert "a","b","c".
    // dequeue one element.
    // A stack follows the LIFO (Last In First Out)

    // -------------------------------------
    // implement here
    class Stack {

        constructor() {
            this.data = [];
        }

        enqueue(item) {
            this.data.push(item);
        }

        dequeue() {
            return this.data.pop();
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