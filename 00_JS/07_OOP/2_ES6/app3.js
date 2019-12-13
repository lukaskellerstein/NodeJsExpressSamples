

// ---------------------------------------------------
// Polymorphism II
//
// Overloading vs. Overriding
// ---------------------------------------------------

class Car {
    constructor(name, maxSpeed, horsePower) {
      this.name = name;
      this.maxSpeed = maxSpeed;
      this.horsePower = horsePower;
    }

    //-----------
    //overload method - JS doesn't have a proper overload
    //-----------

    //this method will not exist anymore !!!!
    statistics() {
      return `Name ${name}, Maximal speed: ${maxSpeed}, Power: ${horsePower} KW`;
    }

    //this method will only exist on class
    statistics(text){
      return text;
    }

    //-----------
    //overload method - JS doesn't have a proper overload
    //-----------

    doSomething(text, number); //this method will not exist anymore !!!!
    doSomething(text); //this method will not exist anymore !!!!
    doSomething() { // will exist only this variant
      console.log('text', text)
      console.log('text', number)
    }


    logThis() {
      console.log(this);
    }
  }
  


  class Porsche extends Car {

    //-----------
    //override method
    //-----------
      statictics(text){
          return `Porsche-${text}`;
      }


      logThis() {
        console.log(this);
      }
  }



  const aaa = new Car('a',100,300);
  //aaa.statictics();
  aaa.statistics('bbb');
  aaa.doSomething();