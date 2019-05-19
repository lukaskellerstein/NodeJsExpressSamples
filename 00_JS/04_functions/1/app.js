// Function expression - arrow function
var result = () => {
  return 'aaa';
};

var result2 = function() {
  return 'aaa';
};

// Function declaration
function doSomething() {
  return 'aaa';
}

// Function invocation/call/execution
console.log(result());
console.log(result2());
console.log(doSomething());
