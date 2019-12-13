
class User {
    name: string;
    age: number;
}

// -------------------------------------------------
// Partial
//
// Make all properties in T optional
// -------------------------------------------------

/*

type Partial<T> = {
    [P in keyof T]?: T[P];
};

*/

/*
Errors
let user1: User = { name: 'aaa', age: 23 };
let user2: User = { age: 23 }; // Property 'name' is missing in type '{ age: number; }' but required in type 'User'.
let user3: User = { name: 'ccc' }; // Property 'age' is missing in type '{ name: string; }' but required in type 'User'.
*/

let user1: Partial<User> = { name: 'aaa', age: 23 };
let user2: Partial<User> = { age: 23 }; 
let user3: Partial<User> = { name: 'ccc' };


// -------------------------------------------------
// Readonly
//
// Make all properties in T readonly = BETTER THAN USE Object.freeze()
// -------------------------------------------------

/*
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
*/

let readonlyUser: Readonly<User> = { name: 'Joe', age: 34 };
// Cannot assign to 'age' because it is a read-only property.
readonlyUser.age = 3; 




// -------------------------------------------------
// Non-nullable
//
// Exclude null and undefined from T
// -------------------------------------------------

/*
type NonNullable<T> = T extends null | undefined ? never : T;
*/

let user6: NonNullable<User> = { name: 'John', age: 34 };
let user7: NonNullable<User> = { name: null, age: 34 }; // Because: Type 'null' is not assignable to type 'string'
let user8: NonNullable<User> = { name: undefined, age: 34 }; // Because: Type 'undefined' is not assignable to type 'string'.



// -------------------------------------------------
// Required
//
// Make all properties in T required
// -------------------------------------------------

/* 
type Required<T> = {
  [P in keyof T]-?: T[P];
};
*/


const user12: User = { name: 'User1', age: 23 };
const user22: User = { name: 'User2' }; // Property 'age' is missing in type '{ name: string; }' but required in type 'User'.

// ??? Difference ???

const user9: Required<User> = { name: 'User1', age: 23 };
const user10: Required<User> = { name: 'User1', age: null };
//  Property 'age' is missing in type '{ name: string; }' but required in type 'Required<User>'.
const user11: Required<User> = { name: 'User2' }; 