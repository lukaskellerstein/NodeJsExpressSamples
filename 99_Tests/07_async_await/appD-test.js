
// --------------------------------------------------------------------------
// Async/Await approach
// --------------------------------------------------------------------------

const excercise = async () => {

    const res1 = await Promise.resolve("1 - done");
    const res2 = await Promise.resolve("2 - done");

    const branch1 = Promise.all([
        Promise.resolve("3 - done"),
        Promise.resolve("4 - done"),
        Promise.resolve("5 - done")
    ]);

    const branch2 = async () => {
        const res6 = await Promise.resolve("6 - done");
        const res7 = await Promise.resolve("7 - done");

        return [res6, res7];
    };

    const branches = await Promise.all([branch1, branch2()])

    return [res1, res2, branches];
};

excercise()
    .then(val => console.log('Final RESULT - ' + val))
    .catch(err => console.log('Final ERROR - ' + err));