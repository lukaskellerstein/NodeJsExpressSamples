import { applyMixins } from './helpers';


// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// In TypeScript, we can’t inherit or extend from more than one class but Mixins helps us to get around that.
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------

export class Car {
    drive(name:string) {
      console.log(`This ${name} can drive very fast`);
    }
  }
  
  export class Lorry {
    carry(weight:number) {
      console.log(`This vehicle can carry ${weight} kg`);
    }
  }

  
export class Truck {}
export interface Truck extends Car, Lorry {}


applyMixins(Truck, [Car, Lorry]);

let truck = new Truck();
truck.drive('lukas');
truck.carry(200);

