
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// In TypeScript, we can’t inherit or extend from more than one class but Mixins helps us to get around that.
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------


//Constructor type
type Constructor<T = {}> = new (...args: any[]) => T;

// MIXIN
function Flies<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        fly() {
            alert('Is it a bird? Is it a plane?');
        }
    };
}

// MIXIN
function Climbs<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        climb() {
            alert('My spider-sense is tingling.');
        }
    };
}

function Bulletproof<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        deflect() {
            alert('My wings are a shield of steel.');
        }
    };
}

class Hero {
    constructor(private name: string) {

    }
}

const BeetleGuy = Climbs(Bulletproof(Hero));

const HorseFlyWoman = Climbs(Flies(Hero));

const superhero = new HorseFlyWoman('Shelley');
superhero.climb();
superhero.fly();