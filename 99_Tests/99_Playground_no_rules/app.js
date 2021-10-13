


var findMaxConsecutiveOnes = function (nums) {

    var OnesCountMax = 0;
    var OnesCount = 0;


    for (let i in nums) {
        if (i === 1) {
            OnesCount++;

            if (OnesCount > OnesCountMax) {
                OnesCountMax = OnesCount;
            }
        }
        else {
            OnesCount = 0;
        }
    }



    return OnesCountMax;
};




console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));



/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {


    var EvenCount = 0;


    for (let i of nums) {

        var iLength = i.toString().length;

        // console.log(iLength);

        if (iLength % 2 === 0) EvenCount++;
    }

    return EvenCount;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));




/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (nums) {

    var unsortedSquares = [];

    for (let i of nums) {
        unsortedSquares.push(i * i);
    }

    return unsortedSquares.sort((a, b) => (a > b) ? 1 : -1);

};


console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));



/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {

    let skipOne = false;
    arr.forEach((num, idx) => {
        if (skipOne) {
            skipOne = false;
            return;
        }
        if (num === 0) {
            insertToArray(arr, idx, 0);
            skipOne = true;
        }
    })

};

var insertToArray = (arr, index, value) => {

    for (let i = arr.length - 2; i >= index; i--) {
        arr[i + 1] = arr[i];
    }

    arr[index] = value;
}


var arr1 = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(arr1);
console.log(arr1);



/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    let resultArray = [];

    let bigger = (m > n) ? m : n;
    let bigger2 = m || n;

    for (let i = 1; i < bigger2; i++) {
        resultArray.push(nums1.shift());
        resultArray.push(nums2.shift());
    }

};

let nums1 = [1, 2, 3, 89, 0, 0, 0], m = 4;
let nums2 = [2, 5, 6], n = 3;

merge(nums1, m, nums2, n);

console.log(nums1);