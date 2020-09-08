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

    remove(value) {
        let resultIndex = null;
        this.arr.forEach((element, index) => {
            if (element === value) resultIndex = index;
        });

        if (resultIndex !== null) {
            this.arr[resultIndex] = this.arr.pop();
            this.bubbleDown(resultIndex, this.arr.length - 1);
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


    bubbleDown(currentIndex, maxIndex) {
        console.log(currentIndex, maxIndex);

        if (currentIndex < maxIndex) {
            //--------------------------------------------------
            // LEFT
            //--------------------------------------------------
            let currentValue = this.arr[currentIndex];

            let leftValue = this.getLeftChild(currentIndex);
            let leftIndex = this.getLeftChildIndex(currentIndex);

            if (currentValue > leftValue) {
                //swap
                this.arr[currentIndex] = leftValue;
                this.arr[leftIndex] = currentValue;
            }

            this.bubbleDown(leftIndex, maxIndex);

            //--------------------------------------------------
            // RIGHT
            //--------------------------------------------------
            currentValue = this.arr[currentIndex];

            let rightValue = this.getRightChild(currentIndex);
            let rightIndex = this.getRightChildIndex(currentIndex);


            if (currentValue > rightValue) {
                //swap
                this.arr[currentIndex] = rightValue;
                this.arr[rightIndex] = currentValue;
            }

            this.bubbleDown(rightIndex, maxIndex);

        }
    }
}

let myHeap = new MyMinHeap();
myHeap.insert(1);
myHeap.insert(5);
myHeap.insert(3);
myHeap.insert(10);
myHeap.insert(4);

myHeap.remove(1);

var i = 5;
