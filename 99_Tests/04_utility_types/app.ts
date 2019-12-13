

type MyPartial<T> = {
    [K in keyof T]?: T[K]
}

type MyReadOnly<T> = {
    readonly [K in keyof T]: T[K]
}

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
} 


type MyExclude<T, K> = T extends K ? never : T;


// type MyOpossitePick<T, K extends keyof T> = {
//     [P in keyof T]: T[P] & 
//     [P in K]: never
// }


// -------------------------------------------------------------
// -------------------------------------------------------------

class MyUser {
    name: string;
    age: number;
    address: string;
    height: number;
    width: number;
}

type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type MyUser2 = MyOmit<MyUser, "name" | "age">;

const aaa: MyUser2 = {
    address: 'some street 11',
    height: 187,
    width: 30
}
