
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

    // Condition 1
    // - You can move only as Knight can move => to the L
    const knightMoveOptionsList = [
        [2, 1],
        [1, 2],
        [-1, 2],
        [-2, 1],
        [-2, -1],
        [-1, -2],
        [1, -2],
        [2, -1],
    ];


    // Conditions 2+3
    const isValidMove = (board, x, y, solution) => {
        if (
            // - You cannot go outside of the board
            x >= 0 && x < board.length && y >= 0 && y < board.length
            // - You cannot visit the same cell twice. 
            && solution[x][y] === 0
        ) {
            return true;
        } else {
            return false;
        }
    };

    // ----------------------------------
    // Solution -------------------------
    // ----------------------------------

    // Solution Board
    let solution = [
        [1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ];

    const solve = (board, x, y, moveNumber, solution) => {

        // ------
        // Define a finish condition
        // ------
        if (moveNumber === 65) {
            // We are done!
            console.log('DONE');
            return true;
        }

        // Do each available move
        for (let moveIndex = 0; moveIndex < 8; moveIndex++) {
            const move = knightMoveOptionsList[moveIndex];

            let xNext = x + move[0];
            let yNext = y + move[1];

            const isValid = isValidMove(board, xNext, yNext, solution);

            if (isValid) {
                solution[xNext][yNext] = moveNumber;

                const isSolvable = solve(board, xNext, yNext, moveNumber + 1, solution);
                if (isSolvable) {
                    return true;
                } else {
                    // backtracking
                    solution[xNext][yNext] = 0;
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
    solve(board, 0, 0, 2, solution);
    console.log(solution);
};
main();
