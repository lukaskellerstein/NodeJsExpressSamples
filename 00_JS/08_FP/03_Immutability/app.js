//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
// IMMUTABILITY = PURE function
// has NO side-effect = changing outside world = outside context
// CLONING DATA
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

// let obj1 = {
//   name: 'Lukas'
// };

// function changeName(obj, name) {
//   //copy object
//   let copy = { ...obj };

//   copy.name = name;

//   //return changed object
//   return copy;
// }

// console.log(changeName(obj1, 'Anna'));
// console.log(obj1);

let obj1 = {
  name: 'Lukas'
};

function changeName(obj, name) {
  obj.name = name;
}

console.log(obj1);
