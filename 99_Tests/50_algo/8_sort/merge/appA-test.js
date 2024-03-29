function main() {

    // start 19:28
    // end 19:40
    // Visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/

    const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];

    // -------------------------------------
    // implement here
    const merge = (left, right) => {
        let result = [];
        while (left.length && right.length) {
            if (left[0] > right[0]) {
                result.push(right.shift());
            } else {
                result.push(left.shift());
            }
        }
        return [...result, ...left, ...right];
    }

    const mergeSort = (arr) => {

        if (arr.length <= 1) return arr;

        let midpoint = Math.floor(arr.length / 2);

        let left = arr.slice(0, midpoint);
        let right = arr.slice(midpoint);

        let leftSort = mergeSort(left);
        let rightSort = mergeSort(right);

        return merge(leftSort, rightSort);
    }

    // -------------------------------------
    // TEST data
    console.log(unsortedArr);
    let res = mergeSort(unsortedArr);
    console.log(res);

};
main();