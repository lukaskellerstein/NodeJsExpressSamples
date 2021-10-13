function main() {

    // Implement LinkedList for given array ["a","b","c","d","e","f,"g]
    // remove from LinkedList "c"

    // start 08:37
    // end 08:55 (with troubleshooting)

    // start 5:55 
    // end 06:08 (with troubleshooting)

    // start 5:25
    // end 05:34

    // -------------------------------------
    // implement here

    class Node {
        constructor(value, next = null) {
            this.value = value;
            this.next = next;
        }
    }

    class LinkedList {

        constructor() {
            this.root = null;
        }

        add(value) {
            if (this.root === null) {
                this.root = new Node(value);
            } else {
                this.root.next = this.insertNode(value, this.root.next);
            }
        }

        insertNode(value, node) {
            if (node === null) {
                node = new Node(value);
            } else {
                node.next = this.insertNode(value, node.next);
            }

            return node;
        }

        remove(value) {
            if (this.root === null) {
                return;
            }

            if (this.root.value === value) {
                let next = this.root.next;
                this.root = next;
            } else {
                this.root.next = this.removeNode(value, this.root.next);
            }
        }

        removeNode(value, node) {
            if (node === null) {
                return;
            }

            if (node.value === value) {
                let next = node.next;
                node = next;
            } else {
                node.next = this.removeNode(value, node.next);
            }

            return node;
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