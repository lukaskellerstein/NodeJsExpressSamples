// ---------------------------------
// primitives (Stored directly in memory)
// ---------------------------------
var num1 = 5;
var str1 = '';
var bool1 = true;

// ---------------------------------
// non-primitive (Stored with memory with pointer to the 'object')
// ---------------------------------

//Object ------------------------

var obj1 = {
  name: 'lukas',
  age: 19
};

//Function -----------------------

function aaa() {
  return 'aaa';
}

// Array ------------------------

// of primitives
var arr = [1, 2, 3];

// of objects
var arr2 = [
  {
    name: 'AAPL'
  },
  {
    name: 'GOOG'
  },
  {
    name: 'AMZ'
  }
];

// of functions
var arr2 = [
  function aaa() {
    return 'aaa';
  },
  function bbb() {
    return 'bbb';
  },
  function ccc() {
    return 'ccc';
  }
];

// of arrays
var arr2 = [
  [1, 2, 3],
  ['a', 'b', 'c'],
  [{ name: 'aaa' }, { name: 'bbb' }],
  [
    function aaa() {
      return 'aaa';
    },
    function bbb() {
      return 'bbb';
    }
  ]
];
