// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

// Time complexity : O(n+m)\mathcal{O}(n + m)O(n+m) in the average case
// and O(n×m)\mathcal{O}(n \times m)O(n×m) in the worst case
// when load factor is high enough.
// Space complexity : O(n+m)\mathcal{O}(n + m)O(n+m) in the worst case when
// all elements in the arrays are different.

function union(setA, setB) {
  const _union = new Set(setA);
  for (const elem of setB) {
    _union.add(elem);
  }
  return _union;
}
function intersection(setA, setB) {
  const _intersection = new Set();
  for (const elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}
function difference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}

let fn = (nums1,nums2) => {

    set1 = new Set();
    for (let num1 of nums1) set1.add(num1);
    set2 = new Set();
    for (let num2 of nums2) set2.add(num2);

    return intersection(set1,set2)
    //set1.retainAll(set2); //elimina todo set1 menos los elementos de set2

    // const output = new Array(set1.size);
    // const idx = 0;
    // for (int s : set1) output[idx++] = s;
    //return output;
  }
console.log(fn(nums1 = [1,2,2,3,4,5,6], nums2 = [2,3,2])) //2, 3
