class MyNode<T> {
    public next: MyNode<T> | null = null;
    public prev: MyNode<T> | null = null;
    constructor(public data: T) { }
}

interface ILinkedList<T> {
    insertInBegin(data: T): MyNode<T>;
    insertAtEnd(data: T): MyNode<T>;
    deleteNode(node: MyNode<T>): void;
    traverse(): T[];
    size(): number;
    search(comparator: (data: T) => boolean): MyNode<T> | null;
}

class LinkedList<T> implements ILinkedList<T> {
    private head: MyNode<T> | null = null;

    public insertAtEnd(data: T): MyNode<T> {
        const node = new MyNode(data);
        if (!this.head) {
            this.head = node;
        } else {
            const getLast = (node: MyNode<T>): MyNode<T> => {
                return node.next ? getLast(node.next) : node;
            };

            const lastNode = getLast(this.head);
            node.prev = lastNode;
            lastNode.next = node;
        }
        return node;
    }

    public insertInBegin(data: T): MyNode<T> {
        const node = new MyNode(data);
        if (!this.head) {
            this.head = new MyNode(data);
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        return node;
    }

    public deleteNode(node: MyNode<T>): void {
        if (!node.prev) {
            this.head = node.next;
        } else {
            const prevNode = node.prev;
            prevNode.next = node.next;
        }
    }

    public search(comparator: (data: T) => boolean): MyNode<T> | null {
        const checkNext = (node: MyNode<T>): MyNode<T> | null => {
            if (comparator(node.data)) {
                return node;
            }
            return node.next ? checkNext(node.next) : null;
        };

        return this.head ? checkNext(this.head) : null;
    }

    public traverse(): T[] {
        const array: T[] = [];
        if (!this.head) {
            return array;
        }

        const addToArray = (node: MyNode<T>): T[] => {
            array.push(node.data);
            return node.next ? addToArray(node.next) : array;
        };
        return addToArray(this.head);
    }

    public size(): number {
        return this.traverse().length;
    }
}

interface Post {
    title: string;
}
const linkedList = new LinkedList<Post>();

linkedList.traverse() // [];

linkedList.insertAtEnd({ title: "Post A" });
linkedList.insertAtEnd({ title: "Post B" });
linkedList.insertInBegin({ title: "Post C" });
linkedList.insertInBegin({ title: "Post D" });

linkedList.traverse() // [{ title : "Post D" }, { title : "Post C" }, { title : "Post A" }, { title : "Post B" }];
linkedList.search(({ title }) => title === "Post A") // Node { data: { title: "Post A" }, prev: Node, next: Node};