let N = 8;

/* A utility function to  
check if i,j are valid  
indexes for N*N chessboard */
const isSafe = (x, y, sol) => {
    return (x >= 0 && x < N &&
        y >= 0 && y < N &&
        sol[x, y] == -1);
}

/* A utility function to  
print solution matrix sol[N][N] */
const printSolution = (sol) => {
    for (let x = 0; x < N; x++) {
        for (let y = 0; y < N; y++)
            console.log(sol[x, y] + " ");
        console.log();
    }
}

/* This function solves the  
Knight Tour problem using  
Backtracking. This function  
mainly uses solveKTUtil() to  
solve the problem. It returns  
false if no complete tour is  
possible, otherwise return true  
and prints the tour. Please note  
that there may be more than one  
solutions, this function prints  
one of the feasible solutions. */
const solveKT = () => {
    // let sol = new int[8, 8];

    var sol = [];
    for (var i = 0; i < 8; i++) {
        sol[i] = new Array(8);
    }

    /* Initialization of 
    solution matrix */
    for (let x = 0; x < N; x++)
        for (let y = 0; y < N; y++)
            sol[x, y] = -1;

    /* xMove[] and yMove[] define 
       next move of Knight. 
       xMove[] is for next  
       value of x coordinate 
       yMove[] is for next  
       value of y coordinate */
    let xMove = [2, 1, - 1, -2,
        -2, -1, 1, 2];

    let yMove = [1, 2, 2, 1,
        - 1, -2, -2, -1];

    // Since the Knight is  
    // initially at the first block 
    sol[0, 0] = 0;

    /* Start from 0,0 and explore  
    all tours using solveKTUtil() */
    if (!solveKTUtil(0, 0, 1, sol,
        xMove, yMove)) {
        console.log("Solution does " +
            "not exist");
        return false;
    }
    else
        printSolution(sol);

    return true;
}

/* A recursive utility function  
to solve Knight Tour problem */
const solveKTUtil = (x, y, movei, sol, xMove, yMove) => {
    let k, next_x, next_y;
    if (movei == N * N)
        return true;

    /* Try all next moves from  
    the current coordinate x, y */
    for (k = 0; k < 8; k++) {
        next_x = x + xMove[k];
        next_y = y + yMove[k];
        if (isSafe(next_x, next_y, sol)) {
            sol[next_x, next_y] = movei;
            if (solveKTUtil(next_x, next_y, movei +
                1, sol, xMove, yMove))
                return true;
            else
                // backtracking 
                sol[next_x, next_y] = -1;
        }
    }

    return false;
}


solveKT();