//https://leetcode.com/problems/k-closest-points-to-origin/solutions/762781/javascript-sort-minheap-and-maxheap-solutions/

/*
min heap approach:
we can create a minHeap of the whole data set in O(n) time if we start from n/2 and heapify down each parent (see floyd method https://en.wikipedia.org/wiki/Binary_heap#Building_a_heap)

then we remove k times from the heap -> k * log(n) (need to heapify down on each removal)
runtime: O(N + k log (N))
space: O(1) since we are doing it in place
*/
// var kClosest = function(points, k) {
//   // we can build the heap in place
//   let p = Math.floor((points.length - 2) / 2) // last parent
//   for(let i = p; i >= 0; i--) {
//       heapifyDown(points, i, distance)
//   }
  
//   // now we need to remove the smallest (points[0]) k times
//   let solution = []
//   for(let i=0; i<k; i++) {
//       solution.push(remove(points, distance))
//   }
  
//   return solution
  
//   // read 0, replace 0 with last position, heapifyDown
//   function remove(heap, weightFunction) {
//       let val = heap[0]
//       heap[0] = heap.pop()
//       heapifyDown(heap, 0, weightFunction)
//       return val
//   }
  
//   // compare with children, swap with smallest, repeat
//   function heapifyDown(heap, idx, weightFunction) {
//       let left = 2*idx + 1
//       let right = 2*idx + 2
//       let smallest = left
      
//       if(left >= heap.length) return
      
//       if(right < heap.length && weightFunction(heap[left]) > weightFunction(heap[right])) {
//           smallest = right
//       }
      
//       if (weightFunction(heap[idx]) > weightFunction(heap[smallest])) {
//           [heap[idx], heap[smallest]] = [heap[smallest], heap[idx]]
//           heapifyDown(heap, smallest, weightFunction)
//       }
//   }
  
//   function distance(point) {
//       return point[0] * point[0] + point[1] * point[1]
//   }
// }


/*
max heap approach:
have a max heap of size k, so we would do N insertions that take log(k)
for this case we would need to implement heapify up (insert) and heapify down (remove)

runtime: O(N log(k))
space: O(k)
*/
var kClosest = function(points, k) {
  let heap = []
  
  // now we need to try to add all points to the heap
  for(let i=0; i<points.length; i++) {
      if(heap.length >= k && distance(points[i]) > distance(heap[0])) { // it's bigger than the max, we can just skip it
          continue
      }
      add(heap, points[i], distance)
      if(heap.length > k) {
          remove(heap, distance)
      }
  }
  
  return heap
  
  // add at end, heapify up
  function add(heap, node, weightFunction) {
      heap.push(node)
      heapifyUp(heap, heap.length - 1, weightFunction)
  }
  
  // compare with parent and swap if needed, repeat
  function heapifyUp(heap, idx, weightFunction) {
      if(idx === 0) return
      let parent = Math.floor((idx-1) / 2)
      if(weightFunction(heap[idx]) > weightFunction(heap[parent])) {
          [heap[idx], heap[parent]] = [heap[parent], heap[idx]]
          heapifyUp(heap, parent, weightFunction)
      }
  }
  
  // read 0, replace 0 with last position, heapifyDown
  function remove(heap, weightFunction) {
      let val = heap[0]
      heap[0] = heap.pop()
      heapifyDown(heap, 0, weightFunction)
      return val
  }
  
  // compare with children, swap with biggest, repeat
  function heapifyDown(heap, idx, weightFunction) {
      let left = 2*idx + 1
      let right = 2*idx + 2
      let biggest = left
      
      if(left >= heap.length) return
      
      if(right < heap.length && weightFunction(heap[left]) < weightFunction(heap[right])) {
          biggest = right
      }
      
      if (weightFunction(heap[idx]) < weightFunction(heap[biggest])) {
          [heap[idx], heap[biggest]] = [heap[biggest], heap[idx]]
          heapifyDown(heap, biggest, weightFunction)
      }
  }
  
  function distance(point) {
      return point[0] * point[0] + point[1] * point[1]
  }
}
const points = [[1,3],[-2,2]]
//const k = 1
console.log(kClosest(points,1))


// Example 1:
// Input: points = [[1,3],[-2,2]], k = 1
// Output: [[-2,2]]
// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
// Example 2:
// Input: points = [[3,3],[5,-1],[-2,4]], k = 2
// Output: [[3,3],[-2,4]]
// Explanation: The answer [[-2,4],[3,3]] would also be accepted.