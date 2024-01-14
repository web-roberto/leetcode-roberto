class MinHeap {
  constructor(heapSize) {
      this.minHeap = new Array(heapSize + 1);
      this.heapSize = heapSize;
      this.realSize = 0;
      this.minHeap[0] = 0;
  }

  add(element) {
      this.realSize++;

      if (this.realSize > this.heapSize) {
          console.log("Added too many elements!");
          this.realSize--;
          return;
      }

      this.minHeap[this.realSize] = element;

      let index = this.realSize;
      let parent = Math.floor(index / 2);

      while (this.minHeap[index] < this.minHeap[parent] && index > 1) {
          let temp = this.minHeap[index];
          this.minHeap[index] = this.minHeap[parent];
          this.minHeap[parent] = temp;
          index = parent;
          parent = Math.floor(index / 2);
      }
  }

  peek() {
      return this.minHeap[1];
  }

  pop() {
      if (this.realSize < 1) {
          console.log("Don't have any element!");
          return Number.MAX_VALUE;
      } else {
          let removeElement = this.minHeap[1];
          this.minHeap[1] = this.minHeap[this.realSize];
          this.realSize--;
          let index = 1;

          while (index <= Math.floor(this.realSize / 2)) {
              let left = index * 2;
              let right = (index * 2) + 1;

              if (this.minHeap[index] > this.minHeap[left] || this.minHeap[index] > this.minHeap[right]) {
                  if (this.minHeap[left] < this.minHeap[right]) {
                      let temp = this.minHeap[left];
                      this.minHeap[left] = this.minHeap[index];
                      this.minHeap[index] = temp;
                      index = left;
                  } else {
                      let temp = this.minHeap[right];
                      this.minHeap[right] = this.minHeap[index];
                      this.minHeap[index] = temp;
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
              sb += this.minHeap[i] + ',';
          }
          sb = sb.slice(0, -1);
          sb += ']';
          return sb;
      }
  }
}

let minHeap = new MinHeap(3);
minHeap.add(3);
minHeap.add(1);
minHeap.add(2);

console.log(minHeap.toString());
console.log(minHeap.peek());
console.log(minHeap.pop());
console.log(minHeap.toString());
minHeap.add(4);
minHeap.add(5);
console.log(minHeap.toString());

