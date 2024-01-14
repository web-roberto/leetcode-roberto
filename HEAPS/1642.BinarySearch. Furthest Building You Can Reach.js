class Solution {
    furthestBuilding(heights, bricks, ladders) {
        
        let lo = 0;
        let hi = heights.length - 1;
        while (lo < hi) {
            let mid = lo + Math.floor((hi - lo + 1) / 2);
            if (this.isReachable(mid, heights, bricks, ladders)) {
                lo = mid;
            } else {
                hi = mid - 1;
            }
        }
        return hi; 
    }
    isReachable(buildingIndex, heights, bricks, ladders) {
        
        let climbs = [];
        for (let i = 0; i < buildingIndex; i++) {
            let h1 = heights[i];
            let h2 = heights[i + 1];
            if (h2 <= h1) {
                continue;
            }
            climbs.push(h2 - h1);
        }
        climbs.sort();
        
        
        for (let climb of climbs) {
            
            if (climb <= bricks) {
                bricks -= climb;
            
            } else if (ladders >= 1) {
                ladders -= 1;
            
            } else {
                return false;
            }
        }
        return true;
    }
}



const heights = [4,2,7,6,9,14,12]
const bricks = 5
const ladders = 1

const ans= new Solution()
console.log(ans.furthestBuilding(heights, bricks, ladders))

// Example 1:
// Input: heights = [4,2,7,6,9,14,12], bricks = 5, ladders = 1
// Output: 4
// Explanation: Starting at building 0, you can follow these steps:
// - Go to building 1 without using ladders nor bricks since 4 >= 2.
// - Go to building 2 using 5 bricks. You must use either bricks or ladders because 2 < 7.
// - Go to building 3 without using ladders nor bricks since 7 >= 6.
// - Go to building 4 using your only ladder. You must use either bricks or ladders because 6 < 9.
// It is impossible to go beyond building 4 because you do not have any more bricks or ladders.

// Example 2:
// Input: heights = [4,12,2,7,3,18,20,3,19], bricks = 10, ladders = 2
// Output: 7

// Example 3:
// Input: heights = [14,3,19,3], bricks = 17, ladders = 0
// Output: 3