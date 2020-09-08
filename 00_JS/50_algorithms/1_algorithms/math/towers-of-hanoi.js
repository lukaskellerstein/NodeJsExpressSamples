// --------------------------------------------------
// TOWERS OF HANOI
//
/*
Rules
1. Only one disk can be moved at a time.
2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack. In other words, a disk can only be moved if it is the uppermost disk on a stack.
3. No larger disk may be placed on top of a smaller disk.
*/
// --------------------------------------------------

const stepsToSolveHanoi = (height, srcP, desP, bufferP) => {

    if (height >= 1) {

        // Move a tower of height-1 to the buffer peg, using the destination peg.
        stepsToSolveHanoi(height - 1, srcP, bufferP, desP);

        // Move the remaining disk to the destination peg.
        console.log('Move disk from Tower ', srcP, ' to Tower ', desP);

        // Move the tower of `height-1` from the `buffer peg` to the `destination peg` using the `source peg`.        
        stepsToSolveHanoi(height - 1, bufferP, desP, srcP);
    }

    return;
}

// 6 = number of bricks
// A - source tower - where game starts
// B - helper tower
// C - destination tower - where game ends
stepsToSolveHanoi(6, "A", "C", "B");