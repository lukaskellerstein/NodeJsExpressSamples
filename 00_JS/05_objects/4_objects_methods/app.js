


// -------------------------------------------------------------
// Object.create()
//
// COPY OF OBJECT
// -------------------------------------------------------------

const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  
  me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  
  me.printIntroduction();


// -------------------------------------------------------------
// Object.assign()
//
// COMPOSE OF MULTIPLE OBJECTS INTO ONE
//
// !! COMPOSITION OVER INHERITANCE !!
// -------------------------------------------------------------

  const target = { a: 1, b: 2 };
  const source = { b: 4, c: 5 };
  
  const returnedTarget = Object.assign(target, source);
  
  console.log(target);
  // expected output: Object { a: 1, b: 4, c: 5 }
  
  console.log(returnedTarget);
  // expected output: Object { a: 1, b: 4, c: 5 }



// -------------------------------------------------------------
// Object.freeze()
//
// other code can't delete or change any properties
// -------------------------------------------------------------
const obj = {
    prop: 42
  };
  
  Object.freeze(obj);
  
  obj.prop = 33;
  // Throws an error in strict mode
  
  console.log(obj.prop);
  // expected output: 42


  // -------------------------------------------------------------
// Object.seal()
//
// other code can't delete properties
// -------------------------------------------------------------

const object1 = {
    property1: 42
  };
  
  delete object1.property1; // cannot delete when sealed
  console.log(object1.property1);
  // expected output: 33