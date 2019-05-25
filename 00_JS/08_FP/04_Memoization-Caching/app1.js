// ----------------------------------------------------------------
// MEMOIZATION = CACHING - ver 1. - DONT USE LIKE THAT
//
// helps store results of method base on inputs
// SAVES TIME / INCREASE MEMORY
// ----------------------------------------------------------------

const someTimeConsumingCalculation = number => {
  console.log('SOME VERY LONG CALCULATION');
  console.log('COMMUNICATION WITH DATABASE');

  return number * 10;
};

let cache = {};
const cached_someTimeConsumingCalculation = number => {
  if (!(number in cache)) {
    cache[number] = someTimeConsumingCalculation(number);
  }
  return cache[number];
};

cached_someTimeConsumingCalculation(5);
cached_someTimeConsumingCalculation(5);
cached_someTimeConsumingCalculation(5);
cached_someTimeConsumingCalculation(5);
cached_someTimeConsumingCalculation(5);
cached_someTimeConsumingCalculation(5);
cached_someTimeConsumingCalculation(5);
cached_someTimeConsumingCalculation(6);
