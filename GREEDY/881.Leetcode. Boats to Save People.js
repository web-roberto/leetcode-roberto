/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  let ans = 0;
  let i = 0;
  let j = people.length - 1;
  people.sort((a, b) => a - b);
  
  while (i <= j) {
      if (people[i] + people[j] <= limit) {
          i++;
      }
      
      j -= 1;
      ans++;
  }
  
  return ans;
};

// es lo mismo que la versión de arriba
// var numRescueBoats = function(people, limit) {
//   people.sort(function(a, b) { return a - b; });
//   var left = 0, right = people.length - 1, boats = 0;
//   while (left <= right) {
//       if (people[left] + people[right] <= limit) { left++;}
//       right--;boats++;
//   }
//   return boats;
// };






const  people = [3,2,2,1];
const limit=3;
console.log(numRescueBoats(people, limit))

// Example 1:
// Input: people = [1,2], limit = 3
// Output: 1
// Explanation: 1 boat (1, 2)
// Example 2:
// Input: people = [3,2,2,1], limit = 3
// Output: 3
// Explanation: 3 boats (1, 2), (2) and (3)
// Example 3:
// Input: people = [3,5,3,4], limit = 5
// Output: 4
// Explanation: 4 boats (3), (3), (4), (5)
