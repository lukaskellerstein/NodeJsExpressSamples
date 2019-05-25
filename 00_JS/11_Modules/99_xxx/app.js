import { getAccounts, port, SomeClass } from './module.js';

console.log(port);

console.log('app', this);

getAccounts('AAAAA');

let adsf = new SomeClass();
console.log(adsf.getInfo());
