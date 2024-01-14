class MaxHeap {
    constructor(heapSize) {
        this.maxHeap = new Array(heapSize + 1);
        this.heapSize = heapSize;
        this.realSize = 0;
        this.maxHeap[0] = 0;
    }

    add(element) {
        this.realSize++;

        if (this.realSize > this.heapSize) {
            console.log("Added too many elements!");
            this.realSize--;
            return;
        }

        this.maxHeap[this.realSize] = element;

        let index = this.realSize;
        let parent = Math.floor(index / 2);

        while (this.maxHeap[index] > this.maxHeap[parent] && index > 1) {
            let temp = this.maxHeap[index];
            this.maxHeap[index] = this.maxHeap[parent];
            this.maxHeap[parent] = temp;
            index = parent;
            parent = Math.floor(index / 2);
        }
    }

    peek() {
        return this.maxHeap[1];
    }

    pop() {
        if (this.realSize < 1) {
            console.log("Don't have any element!");
            return Number.MIN_VALUE;
        } else {
            let removeElement = this.maxHeap[1];
            this.maxHeap[1] = this.maxHeap[this.realSize];
            this.realSize--;
            let index = 1;

            while (index <= Math.floor(this.realSize / 2)) {
                let left = index * 2;
                let right = (index * 2) + 1;

                if (this.maxHeap[index] < this.maxHeap[left] || this.maxHeap[index] < this.maxHeap[right]) {
                    if (this.maxHeap[left] > this.maxHeap[right]) {
                        let temp = this.maxHeap[left];
                        this.maxHeap[left] = this.maxHeap[index];
                        this.maxHeap[index] = temp;
                        index = left;
                    } else {
                        let temp = this.maxHeap[right];
                        this.maxHeap[right] = this.maxHeap[index];
                        this.maxHeap[index] = temp;
                        index = right;
                    }
                } else {
                    break;
                }
            }
            return removeElement;
        }
    }

    size() {
        return this.realSize;
    }

    toString() {
        if (this.realSize === 0) {
            return "No element!";
        } else {
            let sb = '[';
            for (let i = 1; i <= this.realSize; i++) {
                sb += this.maxHeap[i] + ',';
            }
            sb = sb.slice(0, -1);
            sb += ']';
            return sb;
        }
    }
}

let maxheap = new MaxHeap(5);
maxheap.add(1);
maxheap.add(2);
maxheap.add(3);

console.log(maxheap.toString());

console.log(maxheap.peek());

console.log(maxheap.pop());
console.log(maxheap.pop());
console.log(maxheap.size());

console.log(maxheap.toString());
maxheap.add(4);
maxheap.add(5);

console.log(maxheap.toString());
