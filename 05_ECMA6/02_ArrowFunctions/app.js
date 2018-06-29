
// ------------------------------------------------
// ECMA 5 -----------------------------------------
// ------------------------------------------------

function add1(a,b){
    return a + b;
}

console.log(add1(10,20));

// ------------------------------------------------
// ECMA 6 -----------------------------------------
// ------------------------------------------------

// 1a - oneline arrow function
const add2 = (a,b) => a + b;

console.log(add2(10,20));


// 1a - oneline arrow function (one argument doesn't have a braces)
const double = number => 2 * number;

console.log(double(10));

// 2 - multiline arrow function
const add3 = (a,b) => {
    return a + b
};

console.log(add3(10,20));



// ------------------------------------------------
// ------------------------------------------------
// WARNING - context of a function vs. arrow function
// ------------------------------------------------
// ------------------------------------------------
const someObject = {
    names: ["Lukas","Adam"],
    city: "Prague",
    getInfo: function(){
        return this.names.map(function(item){
            return `${item} from ${this.city}`;
        });
    }
}

console.log(someObject.getInfo());

// VS

const someObject2 = {
    names: ["Lukas","Adam"],
    city: "Prague",
    getInfo: function(){
        return this.names.map((item) => {
            return `${item} from ${this.city}`;
        });
    }
}

console.log(someObject2.getInfo());
