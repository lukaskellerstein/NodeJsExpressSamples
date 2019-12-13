
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// In TypeScript, we can’t inherit or extend from more than one class but Mixins helps us to get around that.
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------

export type Constructor<T = {}> = new (...args: any[]) => T;
/* turns A | B | C into A & B & C */
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void)
    ? I
    : never;
/* merges constructor types - self explanitory */
export type MergeConstructorTypes<T extends Array<Constructor<any>>> = UnionToIntersection<InstanceType<T[number]>>;

export function Mixin<T extends Array<Constructor<any>>>(constructors: T): Constructor<MergeConstructorTypes<T>> {
    const cls = class {
        state = {};

        constructor() {
            constructors.forEach((c: any) => {
                const oldState = this.state;
                c.apply(this);
                this.state = Object.assign({}, this.state, oldState);
            });
        }
    };
    constructors.forEach((c: any) => {
        Object.assign(cls.prototype, c.prototype);
    });
    return cls as any;
}


class A {
    getName() {
        return "hello"
    }
}


class B {
    getClassBName() {
        return "class B name"
    }
}

class CombineAB extends Mixin([A, B]) {
    testMethod() {
        this.getClassBName //is here
        this.getName // is here
    }
}