// GLOBAL EXECUTION CONTEXT ------------------
// is moved to the end of the file !!!!!!!!!!
// ------------------------------------------------------------------------

function func1() {
  // we have access to parent (and global) lexical environment
  console.log(globalVar);
  console.log(globalFunc());

  // FUNCTION EXECUTION CONTEXT = variable environment + arguments ------------------
  var var1 = 'a';
  function doSomething() {
    return 'a';
  }

  console.log(var1);
  console.log(doSomething());
  // ----------------------------------------------------------------------------
}

function func2() {
  // FUNCTION EXECUTION CONTEXT = variable environment + arguments ------------------

  // we have access to parent (global) lexical environment
  console.log(globalVar);
  console.log(globalFunc());

  var var1 = 'b';
  function doSomething() {
    // FUNCTION EXECUTION CONTEXT = variable environment + arguments ------------------

    // we have access to parent (and global) lexical environment
    console.log(var1);
    console.log(var2);
    console.log(var3);

    console.log(globalVar);
    console.log(globalFunc());

    function innerDoSomething() {
      // FUNCTION EXECUTION CONTEXT = variable environment + arguments ------------------

      // we have access to parent (and global) lexical environment
      console.log(var1);
      console.log(var2);
      console.log(var3);

      console.log(globalVar);
      console.log(globalFunc());

      // ----------------------------------------------------------------------------
    }

    innerDoSomething();

    return 'b';
    // ----------------------------------------------------------------------------
  }
  var var2 = 'BB';

  console.log(var1);
  console.log(var2);
  console.log(var3);
  console.log(doSomething());

  var var3 = 'CC';
  // ----------------------------------------------------------------------------
}

func1();
func2();

var globalVar = 'x';

function globalFunc() {
  return 'x';
}
