// --------------------------------------------------
// EVEN/ODD NUMBERS
//
// If number is odd, then there are no even factors
// --------------------------------------------------
const isOdd = (n) => {
    return n % 2 === 0;
}

const evenOrOdd = (n) => {
    if (isOdd(n)) console.log(`Number: ${n} is Odd`);
    else console.log(`Number: ${n} is Even`);
}

evenOrOdd(1);
evenOrOdd(2);
evenOrOdd(3);
evenOrOdd(4);
evenOrOdd(5);
evenOrOdd(6);
evenOrOdd(7);