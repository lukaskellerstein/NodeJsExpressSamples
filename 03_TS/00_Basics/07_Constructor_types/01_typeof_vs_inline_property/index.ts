
  // --------------------------------------
  // OLDER - Using an inline parameter...
  // --------------------------------------

  class B {
    name: string = 'hohoho';
    method (): void {}
  }
  
  // constructor parameter
  function factoryMethod2 (C: new (...args: any[]) => B) {
    return new C()
  }
    
  const testB = factoryMethod2(B);
  console.log(testB);

// --------------------------------------
// MODERN - Using `typeof`...
// --------------------------------------

class A {
    name: string = 'hahaha';
    method (): void {}
  }
  
  // typeof
  function factoryMethod1 (C: typeof A) {
    return new C()
  }
  
  const testA = factoryMethod1(A);
  console.log(testA);
  
