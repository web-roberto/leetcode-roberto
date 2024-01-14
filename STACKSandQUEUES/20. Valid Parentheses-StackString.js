
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  const matching = {
      "(": ")",
      "[": "]",
      "{": "}"
  }
  
  for (const c of s) {
      if (c in matching) { // if c is an opening bracket
          stack.push(c);
      } else {
          if (!stack.length) {return false;}        
          let previousOpening = stack.pop();
          if (matching[previousOpening] != c) {return false;}
      }
  }
  return !stack.length;
};