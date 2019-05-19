function doSomething() {
  var var1 = 1; // function scoped

  console.log(var1);

  for (let i = 0; i < 10; i++) {
    const currIndex = i; // block scoped
  }

  console.log(currIndex); // ERROR NOT DEFINED

  if (true) {
    const someVar = 'haha'; //block scoped
  }

  console.log(someVar); // ERROR NOT DEFINED
}

doSomething();
