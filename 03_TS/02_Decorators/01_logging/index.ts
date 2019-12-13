function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    };
}

function logMethod() {
    console.log("logMethod(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("logMethod(): called");
        console.log('target', target);
        console.log('propertyKey', propertyKey);
        console.log('descriptor', descriptor);
        
    }
}

function logClass() {
    console.log("logClass(): evaluated");
    return function (constructor: Function) {
        console.log("logClass(): called");
        console.log("constructor", constructor);
    }
}


@logClass()
class SomeClass {
    
    //FINISH property decorator
    @format("Hello, %s")
    name: string;


    @logMethod()
    someMethod(text: string) {
        console.log('someMethod', text);
    }
}


const aa = new SomeClass();
aa.someMethod('aaa');