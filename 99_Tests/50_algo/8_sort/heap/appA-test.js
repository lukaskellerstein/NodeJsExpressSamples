function main() {

    const arr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];

    // -------------------------------------
    // implement here
    class MinHeap {
        constructor() {
            this.arr = [];
        }

        getParentIndex(currentIndex) {
            return Math.floor((currentIndex - 1) / 2);
        }

        getParent(currentIndex) {
            return this.arr[this.getParentIndex(currentIndex)];
        }

        getLeftChildIndex(parentIndex) {
            return (parentIndex * 2) + 1;
        }

        getLeftChild(parentIndex) {
            return this.arr[this.getLeftChildIndex(parentIndex)];
        }

        getRightChildIndex(parentIndex) {
            return (parentIndex * 2) + 2;
        }

        getRightChild(parentIndex) {
            return this.arr[this.getRightChildIndex(parentIndex)];
        }

        add(value) {
            this.arr.push(value);

            if (this.arr.length > 0) {
                let lastIndex = this.arr.length - 1;
                this.bubbleUp(lastIndex);
            }
        }

        bubbleUp(currentIndex) {

            if (currentIndex < 0) return;

            let currentValue = this.arr[currentIndex];
            let parentIndex = this.getParentIndex(currentIndex);
            let parentValue = this.getParent(currentIndex);

            if (currentValue < parentValue) {
                //swap
                this.arr[currentIndex] = parentValue;
                this.arr[parentIndex] = currentValue;
            }

            this.bubbleUp(currentIndex - 1);
        }


        remove(value) {

            let currentIndex = null;
            this.arr.forEach((arrValue, index) => {
                if (arrValue === value) currentIndex = index;
            })

            if (currentIndex !== null) {

                let latestValue = this.arr.pop();

                if (this.arr.length > 0) {
                    this.arr[currentIndex] = latestValue;

                    this.bubbleDown(currentIndex, this.arr.length - 1);
                }

            }
        }

        bubbleDown(currentIndex, maxIndex) {

            if (currentIndex > maxIndex) return;

            let currentValue = this.arr[currentIndex];

            // left
            const leftChildIndex = this.getLeftChildIndex(currentIndex);
            const leftChild = this.getLeftChild(currentIndex);

            if (leftChild < currentValue) {
                //swap
                this.arr[leftChildIndex] = currentValue;
                this.arr[currentIndex] = leftChild;
            }

            this.bubbleDown(leftChildIndex, maxIndex);

            //right
            currentValue = this.arr[currentIndex];
            const rightChildIndex = this.getRightChildIndex(currentIndex);
            const rightChild = this.getRightChild(currentIndex);

            if (rightChild < currentValue) {
                //swap
                this.arr[rightChildIndex] = currentValue;
                this.arr[currentIndex] = rightChild;
            }

            this.bubbleDown(rightChildIndex, maxIndex);

        }

    }

    const myHeapSort = (arr) => {
        let myMH = new MinHeap();
        arr.forEach(element => {
            myMH.add(element);
        });

        let result = [];
        while (myMH.arr.length > 0) {
            let minValue = myMH.arr[0];
            result.push(minValue);
            myMH.remove(minValue);
        }
        return result;
    }

    // -------------------------------------
    // TEST data
    console.log(myHeapSort(arr));

};
main();
