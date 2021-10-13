
function main() {

    // Board
    let board = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ];

    // Is valid move
    const isValidMove = (board, x, y, solution) => {

        // check board
        if (x < 0 && x >= board.length && y < 0 && y >= board.length) {
            return false;
        }

        // check |
        for (let y = 0; y < board.length; y++) {
            if (solution[x][y] === 1)
                return false;
        }

        // check -
        for (let x = 0; x < board.length; x++) {
            if (solution[x][y] === 1)
                return false;
        }

        // check / up
        for (let x1 = x, y1 = y; x1 < board.length && y1 < board.length; x1++, y1++) {
            if (solution[x1][y1] === 1)
                return false;
        }

        // check / down
        for (let x1 = x, y1 = y; x1 >= 0 && y1 >= 0; x1--, y1--) {
            if (solution[x1][y1] === 1)
                return false;
        }

        // check \ up
        for (let x1 = x, y1 = y; x1 >= 0 && y1 < board.length; x1--, y1++) {
            if (solution[x1][y1] === 1)
                return false;
        }

        // check \ down
        for (let x1 = x, y1 = y; x1 < board.length && y1 >= 0; x1++, y1--) {
            if (solution[x1][y1] === 1)
                return false;
        }

        return true;
    };

    // ----------------------------------
    // Solution -------------------------
    // ----------------------------------

    // Solution Board
    let solution = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ];

    const solve = (board, y, solution) => {

        // ------
        // Define a finish condition
        // ------
        if (y >= board.length) {
            // We are done!
            console.log('DONE');
            return true;
        }

        // iterate through X axis
        for (let x = 0; x < board.length; x++) {

            const isValid = isValidMove(board, x, y, solution);

            if (isValid) {
                solution[x][y] = 1;

                const isSolvable = solve(board, y + 1, solution);
                if (isSolvable) {
                    return true;
                } else {
                    // backtracking
                    solution[x][y] = 0;
                }
            }
        }

        return false;
    };

    // ----------------------------------
    // RUN ------------------------------
    // ----------------------------------
    console.log('Board:');
    console.log(board);
    console.log('Solution:');
    solve(board, 0, solution);
    console.log(solution);

    function printSolution(sol) {
        for (let x = 0; x < sol.length; x++) {
            let row = "";
            for (let y = 0; y < sol.length; y++)
                row += sol[x][y] + "  ";

            console.log(row);
        }
    }
    printSolution(solution);

    /*
    1  0  0  0  0  0  0  0  
    0  0  0  0  0  0  1  0  
    0  0  0  0  1  0  0  0  
    0  0  0  0  0  0  0  1  
    0  1  0  0  0  0  0  0  
    0  0  0  1  0  0  0  0  
    0  0  0  0  0  1  0  0  
    0  0  1  0  0  0  0  0  
    */
};
main();
