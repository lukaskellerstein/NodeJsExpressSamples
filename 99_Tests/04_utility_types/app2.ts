
class Student {
    id: string;
    name: string;
    birthyear: number;
    faculty: string;
    status: string;
}

// ------------------------------------------------------------------
// ------------------------------------------------------------------
// DON'T DO TYPE ASSERTION !!!!!! "as Student"
// IT WILL BREAK THE TYPE CHECKING !!!!

/*

const student2: Student = {
    id: 'asdfasfasfwerwerwer',
    name: 'Adam'
} as Student;

*/

// ------------------------------------------------------------------
// ------------------------------------------------------------------


const student1: Student = {
    id: 'asdfasdfasdfasfadsf',
    name: 'Lukas',
    birthyear: 1986,
    faculty: 'IT',
    status: 'ACTIVE'
};

console.log(student1);


const student2: Student = {
    id: 'asdfasfasfwerwerwer',
    name: 'Adam'
};

console.log(student1);

const student3: Partial<Student> = {
    id: 'asfdewrwerwsterwerwer',
    name: 'Karel'
};

console.log(student3);

const student4: NonNullable<Student> = {
    id: 'iouoioiuoiuiouiouoiuu',
    name: 'Josef'
};

console.log(student4);


const student5: Required<Student> = {
    id: '0798799797988908',
    name: 'Jakub'
};

console.log(student5);
