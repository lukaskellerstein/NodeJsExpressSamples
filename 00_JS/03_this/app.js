console.log('global', typeOfGlobalObject(this));
console.log('global', typeOfGlobalObject(global));

var a = 5;

// 1 - NORMAL FUNCTION (declaration) ---------------------------------------------------

// 2 ---------------------------------------------------
function func1() {
  var b = 5;
  console.log('func1', typeOfGlobalObject(this));
}

func1();

// 3 ---------------------------------------------------
function func2() {
  console.log('func2', typeOfGlobalObject(this));

  function func3() {
    console.log('func3', typeOfGlobalObject(this));

    function func4() {
      console.log('func4', typeOfGlobalObject(this));
    }

    func4();
  }

  func3();
}

func2();

// 1 - NORMAL FUNCTION (as variable) ---------------------------------------------------

// 2 ---------------------------------------------------
var func1a = function func1b() {
  var b = 5;
  console.log('func1a', typeOfGlobalObject(this));
};

func1a();

// 3 ---------------------------------------------------
var func2a = function func2b() {
  console.log('func2a', typeOfGlobalObject(this));

  var func3a = function func3b() {
    console.log('func3a', typeOfGlobalObject(this));

    var func4a = function func4b() {
      console.log('func4a', typeOfGlobalObject(this));
    };

    func4a();
  };

  func3a();
};

func2a();

// 4 - ARROW FUNCTION ---------------------------------------------------

// will refer `this` to lexicaly scoped parent object

var func5 = () => {
  let b = 5;
  console.log('func5', typeOfGlobalObject(this));
};

func5();

// 4 - ARROW FUNCTION ---------------------------------------------------

// will refer `this` to lexicaly scoped parent object

var func6 = () => {
  console.log('func6', typeOfGlobalObject(this));

  var func7 = () => {
    console.log('func7', typeOfGlobalObject(this));

    var func8 = () => {
      console.log('func8', typeOfGlobalObject(this));
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
    console.log('obj1.func1', typeOfGlobalObject(this));
  }
};

obj1.func1();

// vs.

var obj2 = {
  name: 'someName',
  func1: function() {
    console.log('obj2.func1', typeOfGlobalObject(this));
  }
};

var myFunc = obj2.func1;
myFunc();

// vs.

// arrow function
var obj3 = {
  name: 'someName',
  func1: () => {
        var aaa = 5;
        console.log('obj3.func1', typeOfGlobalObject(this));
  }
};

obj3.func1();

// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// HELPERS
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
function typeOfGlobalObject(obj) {
  if (obj.hasOwnProperty('window')) {
    return 'window';
  }

  if (obj.hasOwnProperty('global')) {
    return 'global';
  }

  return obj;
}
