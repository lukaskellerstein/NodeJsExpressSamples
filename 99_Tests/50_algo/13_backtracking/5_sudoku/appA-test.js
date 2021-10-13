
const { matrix, add } = require('mathjs')

let board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

const isValid = (board, x, y, number) => {

    // check board
    if (x < 0 && x >= 8 && y < 0 && y >= 8) {
        return false;
    }

    // check row
    for (let i = 0; i < 8; i++) {
        if (board[x][i] === number || solution[x][i] === number)
            return false;
    }

    // check column
    for (let i = 0; i < 8; i++) {
        if (board[i][y] === number || solution[i][y] === number)
            return false;
    }

    // check group
    const resultX = Math.floor(x / 3);
    const resultY = Math.floor(y / 3);
    const startX = resultX * 3;
    const startY = resultY * 3;

    for (let i = startX; i < startX + 3; i++) {
        for (let j = startY; j < startY + 3; j++) {
            if (board[i][j] === number)
                return false;
        }
    }

    return true;
}

// SOLUTION

let solution = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const solve = (board, x, y, solution) => {

    // final condition
    if (x === 8 && y === 9) {
        console.log('DONE');
        return true;
    };

    if (y > 8) {
        x += 1;
        y = 0;
    };

    if (board[x][y] !== 0) {
        return solve(board, x, y + 1, solution);
    };

    // try numbers
    for (let n = 1; n < 10; n++) {
        if (isValid(board, x, y, n)) {
            solution[x][y] = n;
            if (solve(board, x, y + 1, solution))
                return true;
        }

        // backtracking
        solution[x][y] = 0;
    }

    return false;
}

console.log('Board:');
console.log(board);
console.log('Solution:');
solve(board, 0, 0, solution);
console.log(solution);
console.log('Together:');
console.log(add(matrix(board), matrix(solution)));


