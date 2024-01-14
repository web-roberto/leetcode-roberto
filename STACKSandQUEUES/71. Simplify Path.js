// EN JS DE LEETCODE
// https://leetcode.com/problems/simplify-path/solutions/3406723/very-simple-and-concise-solution-with-explanation/
var simplifyPath = function (path) {
  const simplifiedPath = [];
  const dirs = path.split("/");

  for (const dir of dirs) {
    if (dir === "" || dir === ".") continue;
    dir === ".." ? simplifiedPath.pop() : simplifiedPath.push(dir);
  }

  return "/" + simplifiedPath.join("/");
};

// EN JS DE LEETCODE
// https://leetcode.com/problems/simplify-path/solutions/1847419/easy-10-line-stack-js-90-commented/
/* 
INTUITION:
1) .. means that we have to go back in directory
2) ./x means that we have to move inside x (not we are ignoring ./)

So we will maintain a stack
we split our path in "/./" or "/" because ./x and /x mean the same thing
After that if we encounter a non empty value in this array then we push it to stack
If we encounter ".." that means we have to go back so we do a pop
In the end we return our path from stack
*/
var simplifyPath = function (path) {
	// Split path by matching /./ or /
	let pathArr = path.split(/\/\.\/|\/+/);
	/* 
    Eg: "/a/../../b/../c//.//".split(/\/\.\/|\/+/)
    Gives us  ['', 'a', '..', '..', 'b', '..', 'c', '.', '']
    */

	//Stack to keep track of path
	let stack = [];
	for (let i = 0; i < pathArr.length; i++) {
		if (pathArr[i]) {
			//i.e out pathArr !== ""
			/* 
            ".." means that we have to go back so we do pop
            */
			if (pathArr[i] === '..') stack.pop();
			/* An empty . in the end is not a valid path so if we do not encounter "."
            that means that our path is valid so we push it to stack
            */ else if (pathArr[i] !== '.') stack.push(pathArr[i]);
		}
	}
	// In the end we return our path that we have in stack
	return '/' + stack.join('/');
};




// en JAVA DE EDITORIAL---------------
// class Solution {
//   public String simplifyPath(String path) {

//       // Initialize a stack
//       Stack<String> stack = new Stack<String>();
//       String[] components = path.split("/");

//       // Split the input string on "/" as the delimiter
//       // and process each portion one by one
//       for (String directory : components) {

//           // A no-op for a "." or an empty string
//           if (directory.equals(".") || directory.isEmpty()) {
//               continue;
//           } else if (directory.equals("..")) {

//               // If the current component is a "..", then
//               // we pop an entry from the stack if it's non-empty
//               if (!stack.isEmpty()) {
//                   stack.pop();
//               }
//           } else {

//               // Finally, a legitimate directory name, so we add it
//               // to our stack
//               stack.add(directory);
//           }
//       }

//       // Stich together all the directory names together
//       StringBuilder result = new StringBuilder();
//       for (String dir : stack) {
//           result.append("/");
//           result.append(dir);
//       }

//       return result.length() > 0 ? result.toString() : "/" ;
//   }
// }