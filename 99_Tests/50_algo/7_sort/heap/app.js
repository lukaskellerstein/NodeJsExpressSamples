class MyMinHeap {

    constructor() {
        this.arr = [];
    }

    getLeftChild(parentIndex) {
        return this.arr[this.getLeftChildIndex(parentIndex)];
    }

    getLeftChildIndex(parentIndex) {
        return (2 * parentIndex) + 1;
    }

    getRightChild(parentIndex) {
        return this.arr[this.getRightChildIndex(parentIndex)];
    }

    getRightChildIndex(parentIndex) {
        return (2 * parentIndex) + 2;
    }

    getParent(childIndex) {
        return this.arr[this.getParentIndex(childIndex)];
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    insert(value) {
        this.arr.push(value);

        if (this.arr.length > 1) {
            let currentIndex = this.arr.length - 1;
            this.bubbleUp(currentIndex);
        }
    }

    bubbleUp(currentIndex) {
        while (currentIndex > 0) {

            let currentValue = this.arr[currentIndex];
            let parentValue = this.getParent(currentIndex);
            let parentIndex = this.getParentIndex(currentIndex);

            if (currentValue < parentValue) {
                //swap
                this.arr[currentIndex] = parentValue;
                this.arr[parentIndex] = currentValue;
            }

            currentIndex--;
        }
    }

    remove(value) {

        let currentIndex = -1;
        this.arr.forEach((val, index) => {
            if (val === value) currentIndex = index;
        })

        if (currentIndex !== -1) {

            //rewrite current index with last value in array
            this.arr[currentIndex] = this.arr.pop();

            this.bubbleDown(currentIndex, this.arr.length - 1);
        }

    }

    bubbleDown(index, maxIndex) {

        while (index <= maxIndex) {
            let currentValue = this.arr[index];

            let leftValue = this.getLeftChild(index);
            let leftIndex = this.getLeftChildIndex(index);
            let rightValue = this.getRightChild(index);
            let rightIndex = this.getRightChildIndex(index);

            if (currentValue > leftValue) {
                this.arr[index] = leftValue;
                this.arr[leftIndex] = currentValue;
            }

            currentValue = this.arr[index];
            if (currentValue > rightValue) {
                this.arr[index] = rightValue;
                this.arr[rightIndex] = currentValue;
            }

            index++;
        }
    }
}



const heapSort = (arr) => {

    let myMaxHeap = new MyMinHeap();

    arr.forEach(item => {
        myMaxHeap.insert(item);
    })

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        let currentMaxValue = myMaxHeap.arr[0];
        result.push(currentMaxValue);

        myMaxHeap.remove(currentMaxValue);

    }

    return result;
}


const arr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];

heapSort(arr);




