import { Params } from './types';
interface Service {
    type: string;
    run(params: Params): any;
}
export declare class MyService implements Service {
    type: string;
    run(params: Params): void;
}
export {};
