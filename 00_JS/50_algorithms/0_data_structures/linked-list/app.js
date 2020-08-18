const ll = require("./linked-list");

// ----------------------------------
// ----------------------------------
// LINKED-LIST - Custom implementation
// ----------------------------------
// ----------------------------------
var arr1 = new ll.LinkedList((x, y) => (x === y) ? 0 : 1);
arr1.append('aaa');
arr1.append('bbb');
arr1.append('ccc');


// Access by index console.log(aaa);
// not possible

// Access by key 
// not possible

// Access by nodes
var item1 = arr1.head;
var item2 = arr1.tail;
var item3 = item1.next;
var item4 = item1.previous;

// ----------------------------------
// CRUD OPERATIONS
// ----------------------------------

// Add - O(1)
arr1.append('ddd');
arr1.prepend('ddd');

// Insert 
// not possible

// Remove - O(n)
arr1.delete('ddd');

arr1.deleteHead(); // O(1)
arr1.deleteTail(); // O(1)

// Update - O(1)
// arr1.find("ccc").Value = "changed"; // ?????

console.log(arr1);

// ----------------------------------
// SORT
// ----------------------------------

// not implemented


// ----------------------------------
// SEARCH
// ----------------------------------

//1 - Find - O(n)
var aaa = arr1.find({ value: 'bbb' });
console.log(aaa);