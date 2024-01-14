class Solution {
  maximumUnits(boxTypes, truckSize) {
      let unitCount = 0;
      let remainingTruckSize = truckSize;
      while (remainingTruckSize > 0) {
          let maxUnitBoxIndex = this.findMaxUnitBox(boxTypes);
          
          if (maxUnitBoxIndex == -1) break;
          
          let boxCount =
              Math.min(remainingTruckSize, boxTypes[maxUnitBoxIndex][0]);
          unitCount += boxCount * boxTypes[maxUnitBoxIndex][1];
          remainingTruckSize -= boxCount;
          
          boxTypes[maxUnitBoxIndex][1] = -1;
      }
      return unitCount;
  }
  findMaxUnitBox(boxTypes) {
      let maxUnitBoxIndex = -1;
      let maxUnits = 0;
      for (let i = 0; i < boxTypes.length; i++) {
          if (boxTypes[i][1] > maxUnits) {
              maxUnits = boxTypes[i][1];
              maxUnitBoxIndex = i;
          }
      }
      return maxUnitBoxIndex;
  }
}

const ans= new Solution()
const boxTypes= [[1,3],[2,2],[3,1]];
const truckSize=4;
console.log(ans.maximumUnits(boxTypes, truckSize))

// Example 1:
// Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
// Output: 8
// Explanation: There are:
// - 1 box of the first type that contains 3 units.
// - 2 boxes of the second type that contain 2 units each.
// - 3 boxes of the third type that contain 1 unit each.
// You can take all the boxes of the first and second types, and one box of the third type.
// The total number of units will be = (1 * 3) + (2 * 2) + (1 * 1) = 8.
// Example 2:
// Input: boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10
// Output: 91



