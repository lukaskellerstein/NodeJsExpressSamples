// ----------------------------------------------------------
// COMPOSING (From right to left)
// order is important !!!!!!!!!!!
// first will be called 'fn2'
// second will be called 'fn1'
// ----------------------------------------------------------

const compose = (fn1, fn2) => data => {
  return fn1(fn2(data));
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

const result = compose(
  convertToMoney, //<------------------------------- A
  multiplyBy10 //<---------------------------------- B
)(someData);

console.log(result);
