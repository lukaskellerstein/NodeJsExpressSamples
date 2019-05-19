var obj1 = {
  prop1: 'aaa',
  func1: function() {
    return 'bbb';
  }
};

// keys
Object.keys(obj1).forEach(o => {
  console.log(o);
});

// values
Object.values(obj1).forEach(o => {
  console.log(o);
});

// entries
Object.entries(obj1).forEach(o => {
  console.log(o);
});
