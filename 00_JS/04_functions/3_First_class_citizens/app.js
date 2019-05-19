//---------------------------------------------------
// Functions are first class citizens in JS
//---------------------------------------------------

//1 assign function to the variable
var variable1 = function() {
  console.log('haha');
};

//2 pass a function as a parameter to the function

function run(fn) {
  fn();
}

run(function haha() {
  console.log('haha');
});

//3 return a function from a function

function main() {
  return function haha() {
    console.log('haha');
  };
}

main()();
