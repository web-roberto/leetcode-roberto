/*** @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
*/
// I can use my own MaxHeap made in here
// or already made and npm and imported
//const {PriorityQueue,MinPriorityQueue,MaxPriorityQueue,} = require('@datastructures-js/priority-queue');
var findMaximizedCapital = function(k, w, profits, capital) {
    let projects = [];
    let heap = new MaxHeap();

    for(let i = 0; i < profits.length; i++){
        projects.push([profits[i], capital[i]]);
    }

    projects.sort((a, b) => a[1] - b[1]);
    let x = 0;

    while(projects[x] && projects[x][1] <= w){
        heap.add(projects[x][0]);
        x++;
    }

    while(heap.values.length > 0 && k > 0){
        w += heap.extractMax();
        k--;

        while(projects[x] && projects[x][1] <= w){
            heap.add(projects[x][0]);
            x++;
        }
    }

    return w;
};


/*
Credits for MaxHeap implemenattion to: https://reginafurness.medium.com/implementing-a-max-heap-in-javascript-b3e2f788390c. 
But I added the following line to the extractMax() to make it work:      
if(this.values.length === 1) return this.values.pop();.
*/

class MaxHeap {
    constructor() {
        this.values = [];
    }

    // index of the parent node
    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    // index of the left child node
    leftChild(index) {
        return (index * 2) + 1;
    }

    // index of the right child node
    rightChild(index) {
        return (index * 2) + 2;
    }

    // returns true if index is of a node that has no children
    isLeaf(index) {
        return (
            index >= Math.floor(this.values.length / 2) && index <= this.values.length - 1
        )
    }

    // swap using ES6 destructuring
    swap(index1, index2) {
        [this.values[index1], this.values[index2]] = [this.values[index2], this.values[index1]];
    }

    heapifyDown(index) {
        // if the node at index has children
        if (!this.isLeaf(index)) {

            // get indices of children
            let leftChildIndex = this.leftChild(index),
                rightChildIndex = this.rightChild(index),

                // start out largest index at parent index
                largestIndex = index;

            // if the left child > parent
            if (this.values[leftChildIndex] > this.values[largestIndex]) {
                // reassign largest index to left child index
                largestIndex = leftChildIndex;
            }

            // if the right child > element at largest index (either parent or left child)
            if (this.values[rightChildIndex] >= this.values[largestIndex]) {
                // reassign largest index to right child index
                largestIndex = rightChildIndex;
            }

            // if the largest index is not the parent index
            if (largestIndex !== index) {
                // swap
                this.swap(index, largestIndex);
                // recursively move down the heap
                this.heapifyDown(largestIndex);
            }
        }
    }

    heapifyUp(index) {
        let currentIndex = index,
            parentIndex = this.parent(currentIndex);

        // while we haven't reached the root node and the current element is greater than its parent node
        while (currentIndex > 0 && this.values[currentIndex] > this.values[parentIndex]) {
            // swap
            this.swap(currentIndex, parentIndex);
            // move up the binary heap
            currentIndex = parentIndex;
            parentIndex = this.parent(parentIndex);
        }
    }

    add(element) {
        // add element to the end of the heap
        this.values.push(element);
        // move element up until it's in the correct position
        this.heapifyUp(this.values.length - 1);
    }

    // returns value of max without removing
    peek() {
        return this.values[0];
    }

    // removes and returns max element
    extractMax() {
        if(this.values.length === 1) return this.values.pop();

        if (this.values.length < 1) return 'heap is empty';

        // get max and last element
        const max = this.values[0];
        const end = this.values.pop();
        // reassign first element to the last element
        this.values[0] = end;
        // heapify down until element is back in its correct position
        this.heapifyDown(0);

        // return the max
        return max;
    }

    buildHeap(array) {
        this.values = array;
        // since leaves start at floor(nodes / 2) index, we work from the leaves up the heap
        for(let i = Math.floor(this.values.length / 2); i >= 0; i--){
            this.heapifyDown(i);
        }
    }

    print() {
        let i = 0;
        while (!this.isLeaf(i)) {
            console.log("PARENT:", this.values[i]);
            console.log("LEFT CHILD:", this.values[this.leftChild(i)]);
            console.log("RIGHT CHILD:", this.values[this.rightChild(i)]);
            i++;
        }      
    }
}

// class Solution {
//     findMaximizedCapital(k, w, profits, capital) {
//         let n = profits.length;
//         let projects = [];
//         for (let i = 0; i < n; i++) {
//             projects.push([capital[i], profits[i]]);
//         }
//         projects.sort((a, b) => a[0] - b[0]);
//         let heap = [];
//         let i = 0;
//         for (let j = 0; j < k; j++) {
//             while (i < n && projects[i][0] <= w) {
//                 heap.push(projects[i][1]);
//                 i++;
//             }
//             if (heap.length === 0) {
//                 return w;
//             }
//             w += heap.pop();
//         }
//         return w;
//     }
// }
const k=2;
const  w=0;
const  profits = [1,2,3];
const   capital = [0,1,1];
console.log(findMaximizedCapital(k, w, profits, capital))

// Example 1:
// Input: k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]
// Output: 4
// Explanation: Since your initial capital is 0, you can only start the project indexed 0.
// After finishing it you will obtain profit 1 and your capital becomes 1.
// With capital 1, you can either start the project indexed 1 or the project indexed 2.
// Since you can choose at most 2 projects, you need to finish the project indexed 2 to get the maximum capital.
// Therefore, output the final maximized capital, which is 0 + 1 + 3 = 4.

// Example 2:
// Input: k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]
// Output: 6