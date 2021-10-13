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

    // Solution Board
    let solution = [
        ["x", 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]

    const solve = (board, x, y, solution) => {

        // ------
        // Define a finish condition
        // ------
        if (x == 3 && y == 3
            && board[x][y] == "finish") {
            // We are done!
            console.log('DONE');
            return true;
        }

        // Do each available move
        for (let moveIndex = 0; moveIndex < 8; moveIndex++) {
            const move = ratMoveOptionsList[moveIndex];

            let xNext = x + move[0];
            let yNext = y + move[1];

            const isValid = isValidMove(board, xNext, yNext);

            if (isValid) {
                solution[xNext][yNext] = "x";

                const isSolvable = solve(board, xNext, yNext, solution);
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
    solve(board, 0, 0, solution);
    console.log(solution);
};
main();