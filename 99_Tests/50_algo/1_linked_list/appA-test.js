function main() {
    // Implement LinkedList for given array ["a","b","c","d","e","f,"g]
    // remove from LinkedList "c"

    // -------------------------------------
    // implement here
    class MyNode {
        constructor(value, next) {
            this.value = value;
            this.next = next;
        }
    }

    class LinkedList {

        constructor() {
            this.rootNode = null;
        }

        add(value) {
            if (this.rootNode === null) {
                this.rootNode = new MyNode(value, null);
            } else {
                this.addNode(value, this.rootNode);
            }
        }

        addNode(value, node) {
            if (node.next === null) {
                node.next = new MyNode(value, null);
            } else {
                this.addNode(value, node.next);
            }
        }

        remove(value) {
            if (this.rootNode === null) {
                // do nothing
            } else {
                this.rootNode = this.removeNode(value, this.rootNode);
            }
        }

        removeNode(value, node) {
            if (node.value === value) {
                let temp = node.next;
                node = temp;
            } else {
                node.next = this.removeNode(value, node.next);
            }
            return node;
        }

        // ---------------------------------
        // aditional method - don't need to implement them
        // ---------------------------------
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

        print() {
            let result = "";
            if (this.head !== null) {
                result += this.head.value;

                if (this.head.next !== null) {
                    result += this.printNode(this.head.next);
                }
            }
            return result;
        }

        printNode(node) {
            let result = "";
            if (node !== null) {
                result += node.value;

                if (node.next !== null) {
                    result += this.printNode(node.next);
                }
            }
            return result;
        }
    }

    // -------------------------------------
    // TEST data
    const myLL = new LinkedList();
    myLL.add("a");
    myLL.add("b");
    myLL.add("c");
    myLL.add("d");
    myLL.add("e");
    myLL.add("f");
    myLL.add("g");
    console.log(myLL);

    myLL.remove("c");
    console.log(myLL);
};
main();