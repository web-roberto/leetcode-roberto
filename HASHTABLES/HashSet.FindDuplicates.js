// As we know, it is easy and effective to insert a new value and check if a value is in a hash set or not.
// Therefore, typically, a hash set is used to check if a value has ever appeared or not.
// An Example
// Let's look at an example:
// Given an array of integers, find if the array contains any duplicates. 

let fn = keys => {

    // Replace Type with actual type of your key
    let hashset = new Set();
    for (let key of keys) {
        if (hashset.has(key)) {
            return key;
        }
        hashset.add(key);
    }
    return false;
}
console.log(fn([1,4,5,4,2,3]))