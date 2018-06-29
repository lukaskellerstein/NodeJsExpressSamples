
// ------------------------------------
// 1) version with Array
// ------------------------------------

const items = ['a', 'b', 'c', 'd'];

function makeUpperCase(array){
    const result = array.map((item) => {
        return item.toUpperCase();
    });
    console.log(result);
}

makeUpperCase(items);

// ------------------------------------
// 2) Rest operator version - variable count of parameters
// ------------------------------------
function makeUpperCase2(...someItems){
    const result = someItems.map((item) => {
        return item.toUpperCase();
    });
    console.log(result);
}

makeUpperCase2('a', 'b', 'c', 'd');



// ------------------------------------
// ???
// ------------------------------------

const MathLibrary = {
    calculateProduct(...rest) {
        return this.multiply(...rest);
    },
    multiply(a,b,c){
        return a*b*c;
    }
}

const asdf = MathLibrary.calculateProduct(1,2,3,4,5);
console.log(asdf);