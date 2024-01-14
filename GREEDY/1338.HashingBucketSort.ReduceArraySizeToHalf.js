
// written by @jamesernator (James Browning)

class Counter {
    _counts = new Map();

    add(item) {
        if (!this._counts.has(item)) {
            this._counts.set(item, 0);
        }
        this._counts.set(item, this._counts.get(item) + 1);
        return this._counts.get(item);
    }

    values() {
        return this._counts.values();
    }
}

var minSetSize = function(arr) {
    const counts = new Counter();
        
    let maxCount = 0;
    for (const value of arr) {
        const newCount = counts.add(value);
        maxCount = Math.max(newCount, maxCount);
    }
    
    if (maxCount > arr.length / 2) {
        return 1;
    }

    // Allocate an array of size maxCount + 1, pre-filling each value to 0
    const buckets = Array.from({ length: maxCount + 1 }, () => 0);

    for (const count of counts.values()) {
        buckets[count] += 1;
    }

    let setSize = 0;
    let numberToRemove = Math.floor(arr.length / 2);
    let currentBucket = maxCount;

    while (numberToRemove > 0) {
        const numberWantedFromCurrentBucket = Math.ceil(numberToRemove / currentBucket);
        const setSizeIncrease = Math.min(buckets[currentBucket], numberWantedFromCurrentBucket);
        setSize += setSizeIncrease;
        numberToRemove -= setSizeIncrease * currentBucket;
        currentBucket -= 1;
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
 