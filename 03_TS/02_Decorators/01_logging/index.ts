// -------------------------------------------------------
// -------------------------------------------------------
// USAGE
// -------------------------------------------------------
// -------------------------------------------------------

@LoggerFactoryClass() // factory ----> has to have a call ()
@LoggerClass // simple -----------> don't have a call
class SomeClass {
  @LoggerFactoryProperty() // factory ----> has to have a call ()
  @LoggerProperty // simple -----------> don't have a call
  name: string;

  @LoggerFactoryMethod() // factory ----> has to have a call ()
  @LoggerMethod // simple -----------> don't have a call
  someMethod(text: string) {
    console.log("someMethod", text);
  }
}

const aa = new SomeClass();
aa.someMethod("aaa");

// -------------------------------------------------------
// -------------------------------------------------------
// DECORATORS + FACTORIES
// -------------------------------------------------------
// -------------------------------------------------------

// PROPERTY - Simple Decorator
function LoggerProperty(target: any, propertyKey: string) {
  console.log("LoggerProperty(): called");
  console.log("target", target);
  console.log("propertyKey", propertyKey);
}

// PROPERTY - Decorator factory -> function which returns a decorator
function LoggerFactoryProperty() {
  console.log("LoggerFactoryProperty(): evaluated");
  return function(target: any, propertyKey: string) {
    console.log("LoggerFactoryProperty(): called");
    console.log("target", target);
    console.log("propertyKey", propertyKey);
  };
}

// FUNCTION - Simple Decorator
function LoggerMethod(
  target,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log("LoggerMethod(): called");
  console.log("target", target);
  console.log("propertyKey", propertyKey);
  console.log("descriptor", descriptor);
}

// FUNCTION - Decorator factory -> function which returns a decorator
function LoggerFactoryMethod() {
  console.log("LoggerFactoryMethod(): evaluated");
  return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("LoggerFactoryMethod(): called");
    console.log("target", target);
    console.log("propertyKey", propertyKey);
    console.log("descriptor", descriptor);
  };
}

// CLASS - Simple Decorator
function LoggerClass(constructor: Function) {
  console.log("LoggerClass(): called");
  console.log("constructor", constructor);
}

// CLASS - Decorator factory -> function which returns a decorator
function LoggerFactoryClass() {
  console.log("LoggerFactoryClass(): evaluated");
  return function(constructor: Function) {
    console.log("LoggerFactoryClass(): called");
    console.log("constructor", constructor);
  };
}
