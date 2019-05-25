// ----------------------------------------------------------
// PIPE (From left to right)
// order is important !!!!!!!!!!!
// first will be called 'fn1'
// second will be called 'fn2'
// ----------------------------------------------------------

const pipe = (fn1, fn2) => data => {
  return fn2(fn1(data));
};

// ---------------------------------------------------------
// USAGE

const someData = 500;

const multiplyBy10 = data => {
  return data * 10;
};

const convertToMoney = data => {
  return data.toString() + '$';
};

const result = pipe(
  multiplyBy10, // <------------------------------- B
  convertToMoney // <-------------------------------- A
)(someData);

console.log(result);
