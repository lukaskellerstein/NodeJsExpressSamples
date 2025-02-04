// Node class to represent each element in the linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// LinkedList class to manage the list
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert a new node at the beginning
  insertAtHead(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Insert a new node at the end
  insertAtEnd(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Delete a node with a specific value
  delete(value) {
    if (this.head === null) return;

    // If the node to delete is the head
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    // Find the node to delete
    let current = this.head;
    while (current.next !== null && current.next.value !== value) {
      current = current.next;
    }

    // If the node was found, unlink it
    if (current.next !== null) {
      current.next = current.next.next;
    }
  }

  // Display the entire list
  display() {
    let current = this.head;
    let output = "";
    while (current !== null) {
      output += current.value + " -> ";
      current = current.next;
    }
    output += "null";
    console.log(output);
  }
}

// Example usage:
const list = new LinkedList();
list.insertAtHead(10);
list.insertAtHead(5);
list.insertAtEnd(20);
list.display(); // Output: 5 -> 10 -> 20 -> null

list.delete(10);
list.display(); // Output: 5 -> 20 -> null
