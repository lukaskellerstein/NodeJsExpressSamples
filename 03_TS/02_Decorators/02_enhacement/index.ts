function ClassDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
    aaa = (a: string, b:string) => {}
  };
}

@ClassDecorator
class Greeter {
  property = "property";
  hello: string;
  constructor(m: string) {
    this.hello = m;
  }
}

const result = new Greeter("world");
console.log("result.hello", result.hello);
console.log("result.property", result.property);
console.log("result.newProperty", result.newProperty);
