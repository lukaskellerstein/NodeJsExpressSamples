
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class MyLinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(value) {
        var newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
        } else {

            var current = this.head;

            // iterate to the end of the list
            while (current.next) {
                current = current.next;
            }

            // add the new node
            current.next = newNode;
        }

        this.size++;
    }

    insertAt(value, index) {

        if (index > this.size - 1)
            return false;

        var newNode = new Node(value);

        let current = this.head;
        let currentIndex = 0;

        while (currentIndex < index) {
            current = current.next;
            currentIndex++;
        }

        newNode.next = current.next;
        current.next = newNode;
    }


    removeFrom(index) {

        if (index > this.size - 1)
            return false;

        let current = this.head;
        let previous = this.head;
        let currentIndex = 0;

        while (currentIndex <= index) {
            previous = current;
            current = current.next;
            currentIndex++;
        }

        previous.next = current.next;

        this.size--;
    }


}



let myLL = new MyLinkedList();

myLL.add("AAA");
myLL.add("BBB");
myLL.add("CCC");
myLL.add("DDD");


myLL.insertAt("000", 1);

myLL.removeFrom(1);

var i = 5;