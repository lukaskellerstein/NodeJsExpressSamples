class Node2 {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MyLinkedList2 {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(value) {
        let newNode = new Node2(value);
        if (this.head == null) {
            this.head = newNode;
        } else {
            this.insertNode(newNode, this.head);
        }
        this.size++;
    }

    insertNode(node, parent) {
        if (parent.next == null) {
            parent.next = node;
        } else {
            this.insertNode(node, parent.next);
        }
    }

    insertAt(index, value) {
        var curr, next;
        var currIndex = 0;

        var newNode = new Node2(value);

        while (currIndex <= index) {

            if (currIndex == 0) {
                curr = this.head;
                next = this.head.next;
            } else if (currIndex == index) {
                newNode.next = curr.next;
                curr.next = newNode;
                break;
            } else {
                const temp = curr.next;
                curr = temp;
                next = curr.next;
            }

            currIndex++;
        }
    }

    remove(value) {
        if (this.head.value == value) {
            this.head = this.head.next;
        } else {
            this.head.next = this.removeNode(value, this.head.next);
        }
    }

    removeNode(value, parent) {
        if (parent.value == value) {
            this.size--;
            return parent.next;
        } else {
            parent.next = this.removeNode(value, parent.next);
            return parent;
        }
    }

    removeAt(index) {
        var curr, next;
        var currIndex = 0;

        while (currIndex <= index) {

            if (currIndex == 0) {
                curr = this.head;
                next = this.head.next;
            } else if (currIndex == index) {
                const nextOne = curr.next;
                curr.next = nextOne.next;
                break;
            } else {
                const temp = curr.next;
                curr = temp;
                next = curr.next;
            }

            currIndex++;
        }
    }
}


let myLL = new MyLinkedList2();

myLL.insert("a");
myLL.insert("b");
myLL.insert("c");
myLL.insert("d");
myLL.insert("e");
myLL.insert("f");

console.log(myLL);

myLL.remove("c");

console.log(myLL);

myLL.insertAt(2, "c");

console.log(myLL);

myLL.removeAt(2)

console.log(myLL);