
class User {
    name: string;
    age: number;
    address: string;
    height: number;
    width: number;
}



// -------------------------------------------------
// Pick
//
// From T, pick a set of properties whose keys are in the union K
// -------------------------------------------------

/*

type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

*/

type MyUser = Pick<User, 'name' | 'age'>;

const testUser: MyUser = {
    name: 'Lukas',
    age: 33
}


// -------------------------------------------------
// Exclude (keys)
//
// Exclude from T those types that are assignable to U
// -------------------------------------------------

/*

type Exclude<T, U> = T extends U ? never : T;

*/

type MyUserExcludedKeys = Exclude<keyof User, 'name' | 'age'>;

const key1: MyUserExcludedKeys = 'address';
const key2: MyUserExcludedKeys = 'height';
const key3: MyUserExcludedKeys = 'width';


// -------------------------------------------------
// Omit = Pick + Exclude
//
// Construct a type with the properties of T except for those in type K.
// -------------------------------------------------

/*

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

*/

type MyUser2 = Omit<User, 'name' | 'age'>;

const testUser2: MyUser2 = {
    address: 'some street 11',
    height: 187,
    width: 30
}



// -------------------------------------------------
// Extract (keys) - OPOSITE OF EXCLUDE 
//
// Extract from T those types that are assignable to U
// -------------------------------------------------

/*

type Extract<T, U> = T extends U ? T : never;

*/

type MyUserExtractKeys = Extract<keyof User, 'name' | 'age'>;

const key4: MyUserExtractKeys = 'name';
const key5: MyUserExtractKeys = 'age';


// -------------------------------------------------
// Record
//
// Construct a type with a set of properties K of type T
// -------------------------------------------------

/*

type Record<K extends keyof any, T> = {
    [P in K]: T;
};

*/


type AlertType = "warning" | "error" | "success";

type AlertColor = "red" | "yellow" | "green";
type AlertFont = "normal" | "bold";

type AlertProps = { color: AlertColor, font: AlertFont };


type AlertDialog = Record<AlertType, AlertProps>;

const test: AlertDialog = { 
    success: {
        color: 'green',
        font: 'normal'
    },
    warning: {
        color: 'yellow',
        font: 'normal'
    },
    error: {
        color: 'blue',
        font: 'bold'
    }
};

console.log(test);

