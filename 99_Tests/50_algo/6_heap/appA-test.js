function main() {

    // Implement MinHeap
    // Add to min heap values [100,1,50,3,25,30,6,5,9,8]
    // Implement function which return 3rd smallest element in unsorted array


    // -------------------------------------
    // implement here
    class MyMinHeap {
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
                let currentIndex = this.arr.length - 1;
                this.bubbleUp(currentIndex);
            }
        }

        bubbleUp(currentIndex) {
            if (currentIndex <= 0)
                return;

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

            this.arr.forEach((val, idx) => {
                if (value === val) currentIndex = idx;
            })

            if (currentIndex !== null) {

                let lastValue = this.arr.pop();
                this.arr[currentIndex] = lastValue;

                this.bubbleDown(currentIndex, this.arr.length - 1);
            }
        }

        bubbleDown(currentIndex, maxIndex) {

            if (currentIndex < maxIndex) {

                // LEFT
                let currentValue = this.arr[currentIndex];
                let leftIndex = this.getLeftChildIndex(currentIndex);
                let leftValue = this.getLeftChild(currentIndex);

                if (leftValue < currentValue) {
                    //swap
                    this.arr[currentIndex] = leftValue;
                    this.arr[leftIndex] = currentValue;
                }

                this.bubbleDown(leftIndex, maxIndex);

                // RIGHT
                currentValue = this.arr[currentIndex];
                let rightIndex = this.getRightChildIndex(currentIndex);
                let rightValue = this.getRightChild(currentIndex);

                if (rightValue < currentValue) {
                    //swap
                    this.arr[currentIndex] = rightValue;
                    this.arr[rightIndex] = currentValue;
                }

                this.bubbleDown(rightIndex, maxIndex);
            }
        }
    }

    const returnNthSmallestNumbers = (minHeap) => {
        let finalArr = [];
        for (let k = 0; k < 4; k++) {
            let minVal = minHeap.arr[0];
            finalArr.push(minVal);

            minHeap.remove(minVal);
        }
        return finalArr;
    }

    // -------------------------------------
    // TEST data
    const myMinH4 = new MyMinHeap();
    myMinH4.add(100);
    myMinH4.add(1);
    myMinH4.add(50);
    myMinH4.add(3);
    myMinH4.add(25);
    myMinH4.add(30);
    myMinH4.add(6);
    myMinH4.add(5);
    myMinH4.add(9);
    myMinH4.add(8);
    console.log(myMinH4);
    // [
    //  1, 3, 6, 5, 8, 50, 30, 100, 9, 25
    // ]

    myMinH4.remove(8);
    console.log(myMinH4);
    // [
    //  1, 3, 6, 5, 25, 50, 30, 100, 9
    // ]

    console.log(returnNthSmallestNumbers(myMinH4));
    //[ 1, 3, 5, 6 ]

    // ----------------------------------------------------

};
main();