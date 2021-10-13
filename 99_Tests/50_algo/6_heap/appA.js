function main() {

    // Implement MinHeap
    // Add to min heap values [100,1,50,3,25,30,6,5,9,8]
    // Implement function which return 3rd smallest element in unsorted array

    // start 09:10
    // end 09:31

    // start 09:42
    // end 10:38 (with big troubleshooting)

    // start 06:47
    // end 07:09

    // -------------------------------------
    // implement here


    class MyMinHeap {
        constructor() {
            this.arr = [];
        }

        getParentIndex(childIndex) {
            return Math.floor((childIndex - 1) / 2);
        }

        getParent(childIndex) {
            return this.arr[this.getParentIndex(childIndex)];
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

            if (this.arr.length > 1) {

                let idx = this.arr.length - 1;

                this.bubbleUp(idx);

            }
        }

        bubbleUp(currentIndex) {

            if (currentIndex <= 0) {
                return;
            }

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

            let searchIndex = null;

            this.arr.forEach((val, idx) => {
                if (val === value) searchIndex = idx;
            });

            if (searchIndex !== null) {

                let lastVal = this.arr.pop();

                this.arr[searchIndex] = lastVal;

                this.bubbleDown(searchIndex, this.arr.length - 1);
            }
        }

        bubbleDown(currentIndex, maxIndex) {

            if (currentIndex > maxIndex) {
                return;
            }

            //left
            let currentValue = this.arr[currentIndex];
            let leftChildIndex = this.getLeftChildIndex(currentIndex);
            let leftChild = this.getLeftChild(currentIndex);

            if (currentValue > leftChild) {
                //swap
                this.arr[currentIndex] = leftChild;
                this.arr[leftChildIndex] = currentValue;
            }

            this.bubbleDown(leftChildIndex, maxIndex);

            //right
            currentValue = this.arr[currentIndex];
            let rightChildIndex = this.getRightChildIndex(currentIndex);
            let rightChild = this.getRightChild(currentIndex);

            if (currentValue > rightChild) {
                //swap
                this.arr[currentIndex] = rightChild;
                this.arr[rightChildIndex] = currentValue;
            }

            this.bubbleDown(rightChildIndex, maxIndex);
        }
    }



    const returnNthSmallestNumbers = (tree, n) => {

        let result = [];

        for (let i = 0; i < n; i++) {

            let topVal = tree.arr[0];

            result.push(topVal);

            tree.remove(topVal);

        }

        return result;
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

    console.log(returnNthSmallestNumbers(myMinH4, 4));
    //[ 1, 3, 5, 6 ]

    // ----------------------------------------------------

};
main();