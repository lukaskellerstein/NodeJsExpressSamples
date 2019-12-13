
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// In TypeScript, we can’t inherit or extend from more than one class but Mixins helps us to get around that.
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------

interface Animal {  
  sound: string;
  speak: () => void;
}

//Constructor type
// type Constructor<T = any> = new (...args: any[]) => T;
//vs.
type Constructor<T = Animal> = new (...args: any[]) => T;


// MIXIN - Speakable
function Speakable<TBase extends Constructor>(Base: TBase) {  
  return class extends Base {

    // HOWTO OVERRIDE THE FUNCTION ????
    speak() {
      console.log(this.sound);
    };
  };
}

// MIXIN - Tagabble
function Tagged<T extends Constructor<{}>>(Base: T) {  
  return class extends Base {
      _tag: string;
      constructor(...args: any[]) {
          super(...args);
          this._tag = "";
      }
  }
}

class BaseDog implements Animal {  
  sound = 'wow';
  speak() { throw new Error('Method not implemented.'); }
}

class Dog extends Speakable(BaseDog) {}

class BaseCat implements Animal {  
  sound = 'meow';
  speak() { throw new Error('Method not implemented'); }
}

class Cat extends Tagged(Speakable(BaseCat)) {}  