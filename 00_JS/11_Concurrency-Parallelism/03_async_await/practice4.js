

const doJob = async (number) => {
    if (number === 10) throw Error("Forbidden number");
    else return `Done: ${number}`;
}

const doFlow = async () => {


    const result1 = await doJob(1);
    const result2 = await doJob(2);


    const branch1 = Promise.all([doJob(3), doJob(4), doJob(5)]);

    const branch2 = async () => {

        const result6 = await doJob(6);
        const result7 = await doJob(7);

        return [result6, result7];
    }

    const resultBranches = await Promise.all([branch1, branch2()])

    return [result1, result2, ...resultBranches];
}

doFlow()
    .then((data) => console.log(`FINISH: ${data}`))
    .catch((reason) => console.error(`ERROR !!!! - ${reason}`));