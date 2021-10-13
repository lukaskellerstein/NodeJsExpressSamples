function main() {

    // start 20:14
    // end 20:48

    // start 12:45
    // end 13:22

    // start 16:28
    // end 16:57 (with troubleshooting)

    // start 09:39
    // end 10:06 (with troubleshooting)


    const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];

    // -------------------------------------
    // implement here


















    // -------------------------------------
    // Test data

    const heapSort = (arr) => {

        let mHP = new MinHeap();

        arr.forEach(element => {
            mHP.add(element);
        });

        let result = [];
        for (let i = 0; i < arr.length; i++) {
            const element = mHP.arr[0];

            result.push(element);

            mHP.remove(element);

        }

        return result;
    }


    console.log(heapSort(unsortedArr));


};
main();
