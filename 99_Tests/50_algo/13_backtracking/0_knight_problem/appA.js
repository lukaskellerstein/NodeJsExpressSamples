

// start 11:55
// end 12:09

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
