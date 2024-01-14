var minSetSize = function(arr) {
  arr.sort((a, b) => a - b);
  const counts = [];
  let currentRun = 1;
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) {
          currentRun += 1;
          continue;
      }
      counts.push(currentRun);
      currentRun = 1;
  }

  counts.push(currentRun);
  // Reverse sort counts
  counts.sort((a, b) => b - a);

  let numberOfItemsRemovedFromArr = 0;
  let setSize = 0;
  for (const count of counts) {
      numberOfItemsRemovedFromArr += count;
      setSize += 1;
      if (numberOfItemsRemovedFromArr >= arr.length / 2) {
          break;
      }
  }
  return setSize;
}
const arr = [3,3,3,3,5,5,5,2,2,7];
console.log(minSetSize(arr))


// Example 1:
// Input: arr = [3,3,3,3,5,5,5,2,2,7]
// Output: 2
// Explanation: Choosing {3,7} will make the new array [5,5,5,2,2] which has size 5 (i.e equal to half of the size of the old array).
// Possible sets of size 2 are {3,5},{3,2},{5,2}.
// Choosing set {2,7} is not possible as it will make the new array [3,3,3,3,5,5,5] which has a size greater than half of the size of the old array.
// Example 2:
// Input: arr = [7,7,7,7,7,7]
// Output: 1
// Explanation: The only possible set you can choose is {7}. This will make the new array empty.
 