// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
// Example 1:
// Input: nums = [2,2,1]
// Output: 1
// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:
// Input: nums = [1]
// Output: 1


// Time complexity : O(n⋅1)=O(n)O(n \cdot 1) = O(n)O(n⋅1)=O(n). Time complexity of for loop is O(n)O(n)O(n). Time complexity of hash table(dictionary in python) operation pop is O(1)O(1)O(1).
// Space complexity : O(n)O(n)O(n). The space required by hash_tablehash\_tablehash_table is equal to the number of elements in nums\text{nums}nums.


let fn = (nums) => {
  let map = new Map();
  let singleNumber;  
    nums.map(number => {
        if(map.has(number)){
          // map.set(number, 2); 
           map.set(number,map.get(number)+1);
           console.log('-- Increment:,',number)

        }else{
           map.set(number, 1)
           console.log('-- set to 1:,',number)

        } 
    });
    nums.map(number => {
        if(map.get(number) == 1) { singleNumber = number;}
    })
    return singleNumber;
};
console.log(fn([1,4,1,4,2,2,3])) // 3: no repeated
