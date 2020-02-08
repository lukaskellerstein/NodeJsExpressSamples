import { Params } from './types';


interface Service {
    type: string;
    run(params: Params)
}

export class MyService implements Service {
    type = 'MyService';
    run(params: Params){
        //doSomething
        console.log('params', params);
    }
}


