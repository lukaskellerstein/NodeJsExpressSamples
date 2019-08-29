const getMessage = greet => name => `${greet} ${name}`;
const sayHelloTo = getMessage('Hello');

sayHelloTo('world'); // 'Hello world'
sayHelloTo('marmelab'); // 'Hello marmelab'
