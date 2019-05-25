// ----------------------------------------------------------------
// MEMOIZATION = CACHING - ver 2.
//
// With help of Closure !!!! BETTER !!!!
//
// helps store results of method base on inputs
// SAVES TIME / INCREASE MEMORY
// ----------------------------------------------------------------

const someTimeConsumingCalculation = number => {
  console.log('SOME VERY LONG CALCULATION');
  console.log('COMMUNICATION WITH DATABASE');

  return number * 10;
};

const get_cached_someTimeConsumingCalculation = () => {
  let cache = {};

  return number => {
    if (!(number in cache)) {
      cache[number] = someTimeConsumingCalculation(number);
    }
    return cache[number];
  };
};

const cached_someTimeConsumingCalculation = get_cached_someTimeConsumingCalculation();

cached_someTimeConsumingCalculation(5);
cached_someTimeConsumingCalculation(5);
cached_someTimeConsumingCalculation(5);
cached_someTimeConsumingCalculation(5);
cached_someTimeConsumingCalculation(5);
cached_someTimeConsumingCalculation(5);
cached_someTimeConsumingCalculation(5);
cached_someTimeConsumingCalculation(6);
