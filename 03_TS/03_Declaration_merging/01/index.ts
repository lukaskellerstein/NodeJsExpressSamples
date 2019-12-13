

// ----------------------------------------
// MERGING TWO INTEFACES
// ----------------------------------------


interface Car {
    name: string;
}

interface Car {
    hp: number;
}

// ----------------------------------------
// Two interfaces was merged together
// ----------------------------------------

const subaru: Car = {
    name: 'Subaru',
    hp: 160
}

const audi: Car = {
    name: 'Audi'
}