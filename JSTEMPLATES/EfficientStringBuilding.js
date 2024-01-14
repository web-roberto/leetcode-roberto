//In JavaScript, benchmarking shows that concatenation with += is faster than using .join().

// arr is a list of characters
let fn = arr => {
  let ans = [];
  for (const c of arr) {
      ans.push(c);
  }

  return ans.join("")
}

