import { MyService } from 'test-library';

const myServiceInstance: MyService = new MyService();

//--------------------
// We don't have any type-check
//--------------------
myServiceInstance.type = 5; // this has to be a string
myServiceInstance.run(); // this has to have argument
