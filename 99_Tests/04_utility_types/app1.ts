
class User {
    name: string;
    age: number;
    address: string;
    height: number;
    width: number;
}


// --------------------------------------------------------------------
// --------------------------------------------------------------------

const myfunc = <T, K extends keyof T>(obj1: T, obj2: K) => {

    console.log('obj1', obj1);
    console.log('obj1 - type', typeof obj1);

    console.log('obj2', obj2);
    console.log('obj2 - type', typeof obj2);

}

const myUser: User = {
    name: 'Lukas',
    age: 33,
    address: 'street 111',
    height: 100,
    width: 150
};


myfunc<User, "name" | "age">(myUser, "age"); 

// --------------------------------------------------------------------
// --------------------------------------------------------------------


const MyExclude1 = <T, K>(type: T, key: K) => {

    console.log('obj1', type);
    console.log('obj1 - type', typeof type);

    console.log('obj2', key);
    console.log('obj2 - type', typeof key);
}

MyExclude1<User, "name" | "age">(myUser, "age");


// --------------------------------------------------------------------
// --------------------------------------------------------------------
// Remove keys


// 1 - WAY
type Diff<T extends string | number | symbol, U extends string> = (
    { [P in T]: P }
    & { [P in U]: never }
    & { [x: string]: never }
    & { [x: number]: never }
  )[T];

type DiffedUser = Diff<keyof User, "height" | "width">;

const var1: DiffedUser = {
 name: 'Lukas',
 age: 33
}


// 2 - WAY
type Diff2<T, U> = T extends U ? never : T;

type InputCollection = "a" | 1 | User;

type Diff2User = Diff2<InputCollection, string>;

const va3: Diff2User = {
    name: 'Lukas',
    age: 33
}


// --------------------------------------------------------------------
// --------------------------------------------------------------------
// Remove properties from object


type DiffObject<T, K extends keyof T> = (
    { [P in keyof T]: T[P] } &
    { [P in K]: never }
  );

type DiffedObjectUser = DiffObject<User, "height" | "width">;

const var2: DiffedObjectUser = {
    name: 'Lukas',
    age: 33,
    address: 'asdfasfdas',
    height: 789,
    width: 123
};




// --------------------------------------------------------------------
// --------------------------------------------------------------------
