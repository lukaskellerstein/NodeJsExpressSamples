function main() {

    // Board
    let board = [
        [1, 0, 0, 0],
        [1, 1, 0, 1],
        [0, 1, 0, 0],
        [1, 1, 1, "finish"],
    ]

    // Condition 1
    // The rat can move only in 4 directions: **up, down, left, right**.
    const ratMoveOptionsList = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];

    // Conditions 2+3
    const isValidMove = (board, x, y) => {
        if (
            // - The rat cannot go outside of the board
            x >= 0 && x < board.length && y >= 0 && y < board.length
            // - The rat cannot go on cell where is wall
            && board[x][y] !== 0
        ) {
            return true;
        } else {
            return false;
        }
    }

    // ----------------------------------
    // Solution -------------------------
    // ----------------------------------


    // ----------------------------------
    // RUN ------------------------------
    // ----------------------------------
    console.log('Board:');
    console.log(board);
    console.log('Solution:');
    solve(board, 0, 0, solution);
    console.log(solution);
};
main();