// EXECUTION CONTEXT (lexical scope) vs. DYNAMIC SCOPE

console.log('global', this);

// 2 ---------------------------------------------------
function func1() {
  var prop1 = 'prop1';
  console.log('func1', this);
}

func1();

// 3 ---------------------------------------------------
function func2() {
  var prop2 = 'prop2';
  console.log('func2', this);

  function func3() {
    var prop3 = 'prop3';
    console.log('func3', this);

    function func4() {
      var prop4 = 'prop4';
      console.log('func4', this);
    }

    func4();
  }

  func3();
}

func2();

// 4 - ARROW FUNCTION ---------------------------------------------------

var func5 = () => {
  var prop5 = 'prop5';
  console.log('func5', this);
};

func5();

// 4 - ARROW FUNCTION ---------------------------------------------------

var func6 = () => {
  var prop6 = 'prop6';
  console.log('func6', this);

  var func7 = () => {
    var prop7 = 'prop7';
    console.log('func7', this);

    var func8 = () => {
      var prop8 = 'prop8';
      console.log('func8', this);
    };

    func8();
  };

  func7();
};

func6();

// 6 - OBJECT ---------------------------------------------------
var obj1 = {
  name: 'someName',
  func1: function() {
    console.log('obj1.func1', this);
  }
};

obj1.func1();

//RESULT:
// obj1.func1 = { name: 'someName', func1: ()}

// LEXICAL SCOPE vs DYNAMIC SCOPE

//2 - ES5 syntax
var obj2 = {
  name: 'someName',
  func1: function() {
    console.log('obj2.func1', this);

    function func2() {
      console.log('obj2.func2', this);
    }

    func2();
  }
};

obj2.func1();

//RESULT:
// obj2.func1 = { name: 'someName', func1: ()}
// obj2.func2 = global/window !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//3 - ES5 syntax
var obj3 = {
  name: 'someName',
  func1: function() {
    console.log('obj3.func1', this);

    var func2 = () => {
      console.log('obj3.func2', this);
    };

    func2();
  }
};

obj3.func1();

//RESULT:
// obj3.func1 = { name: 'someName', func1: ()}
// obj3.func2 = { name: 'someName', func1: ()}

//4 - ARRAY function
var obj4 = {
  name: 'someName',
  func1: () => {
    console.log('obj4.func1', this);

    function func2() {
      console.log('obj4.func2', this);
    }

    func2();
  }
};

obj4.func1();

//RESULT:
// obj4.func1 = global/window !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// obj4.func2 = global/window !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//=> EXPLANATION: ???????????
//1) obj4.func1 -> returns function and this function is called in global scope, so `this` will be a global/window

//5 - ARRAY function
var obj5 = {
  name: 'someName',
  func1: () => {
    console.log('obj5.func1', this);

    var func2 = () => {
      console.log('obj5.func2', this);
    };

    func2();
  }
};

obj5.func1();

//RESULT:
// obj5.func1 = global/window !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// obj5.func2 = global/window !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//=> EXPLANATION: ????????????
//1) obj5.func1 -> returns function and this function is called in global scope, so `this` will be a global/window

//6 - ES6 SYNTAX
var obj6 = {
  name: 'someName',
  func1() {
    console.log('obj6.func1', this);

    function func2() {
      console.log('obj6.func2', this);
    }

    func2();
  }
};

obj6.func1();

//RESULT:
// obj6.func1 = { name: 'someName', func1: ()}
// obj6.func2 = global/window !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//7 - ES6 SYNTAX
var obj7 = {
  name: 'someName',
  func1() {
    console.log('obj7.func1', this);

    var func2 = () => {
      console.log('obj7.func2', this);
    };

    func2();
  }
};

obj7.func1();

//RESULT:
// obj7.func1 = { name: 'someName', func1: ()}
// obj7.func2 = { name: 'someName', func1: ()}

// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// HELPERS
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// // --------------------------------------------------------------------
// function typeOfGlobalObject(obj) {
//   if (obj.hasOwnProperty('window')) {
//     return 'window';
//   }

//   if (obj.hasOwnProperty('global')) {
//     return 'global';
//   }

//   return obj;
// }
