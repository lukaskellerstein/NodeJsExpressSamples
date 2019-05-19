// GLOBAL EXECUTION CONTEXT ------------------

var globalVar = 'x';

var var1 = 'X';

function globalFunc() {
  return 'x';
}

// 1 ------------------------------------------------------------------------

function func1() {
  // we have access to parent (and global) lexical environment
  console.log(globalVar);
  console.log(var1); // hoisted variable = will not log X
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
  console.log(var1);
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

console.log(`------------------------------------------------------------------
---------------------------------------------------------------------
-----------------------------------------------------------------------------`);

func1();

console.log(`------------------------------------------------------------------
---------------------------------------------------------------------
-----------------------------------------------------------------------------`);

func2();

console.log(`------------------------------------------------------------------
---------------------------------------------------------------------
-----------------------------------------------------------------------------`);
