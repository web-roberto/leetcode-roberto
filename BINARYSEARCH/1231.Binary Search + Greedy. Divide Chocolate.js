
var maximizeSweetness = function(sweetness, k) {
  // Initialize the left and right boundaries.
  // left = 1 and right = total sweetness / number of people.
  let numberOfPeople = k + 1;
  let left = Math.min(...sweetness);
  let right = Math.floor(sweetness.reduce((x, y) => x + y) / numberOfPeople);
  
  while (left < right) {
      // Get the middle index between left and right boundary indexes.
      // cur_sweetness stands for the total sweetness for the current person.
      // people_with_chocolate stands for the number of people that have 
      // a piece of chocolate of sweetness greater than or equal to mid.  
      const mid = Math.floor((left + right + 1) / 2);
      let curSweetness = 0;
      let peopleWithChocolate = 0;
      
      // Start assigning chunks to the current people.
      for (const s of sweetness) {
          curSweetness += s;
          
          // If the total sweetness for him is no less than mid, meaning we 
          // have done with him and should move on to assigning chunks to the next people.
          if (curSweetness >= mid) {
              peopleWithChocolate += 1;
              curSweetness = 0;
          }
      }
      // Check if we successfully give everyone a piece of chocolate with sweetness
      // no less than mid, and eliminate the search space by half.
      if (peopleWithChocolate >= numberOfPeople) {
          left = mid;
      } else {
          right = mid - 1;
      }
  }
  // Once the left and right boundaries concide, we find the target value,
  // that is, the maximum possible sweetness I can get.
  return right;
};
const sweetness = [1,2,3,4,5,6,7,8,9]
const k = 5

console.log(maximizeSweetness(sweetness, k))

 

// Example 1:
// Input: sweetness = [1,2,3,4,5,6,7,8,9], k = 5
// Output: 6
// Explanation: You can divide the chocolate to [1,2,3], [4,5], [6], [7], [8], [9]
// Example 2:
// Input: sweetness = [5,6,7,8,9,1,2,3,4], k = 8
// Output: 1
// Explanation: There is only one way to cut the bar into 9 pieces.
// Example 3:
// Input: sweetness = [1,2,2,1,2,2,1,2,2], k = 2
// Output: 5
// Explanation: You can divide the chocolate to [1,2,2], [1,2,2], [1,2,2]
