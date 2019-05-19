//----------------------------------------------------------------------------
// NON-PURE function
// has side-effect = changing outside world = outside context
//----------------------------------------------------------------------------

let someArray = [1, 2];

function doSomething(arr) {
  arr.pop();
}

console.log(doSomething(someArray));
console.log(someArray);

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
// PURE function
// has NO side-effect = changing outside world = outside context
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

let someArray2 = [1, 2];

function doSomething2(arr) {
  //copy object
  let copy = [].concat(arr);

  copy.pop();

  //return changed object
  return copy;
}

console.log(doSomething2(someArray2));
console.log(someArray2);
