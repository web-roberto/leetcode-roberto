// ROBERTO: 1-I load the Binary Tree from array
// ROBERTO: 2-We deal it as a Graph and I will load the Binary tree into a Map as usual in Graphs

// ------- Code to generate our binary tree & print in a console of Chrome------
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent=null;
  }

 printTree (root) {
      const getHeight = (node) => {
        if (!node) {
          return 0
        }
        return Math.max(getHeight(node.left), getHeight(node.right)) + 1
      }
      const height = getHeight(root)
      const columnLength = (2 ** height) - 1
      const matrix = new Array(height).fill('').map(() => new Array(columnLength).fill(''))
      const fill = (node, rowIndex, left, right) => {
        if (node) {
          const columnIndex = Math.floor((left + right) / 2)
          matrix[rowIndex][columnIndex] = `${node.value}`
          fill(node.left, rowIndex + 1, left, columnIndex - 1)
          fill(node.right, rowIndex + 1, columnIndex + 1, right)
        }
      }
      fill(root, 0, 0, columnLength - 1)
      return matrix
    }



  insert(values) {
    const queue = [this];//es el objeto 'root' al ppio. 'queue' es un array con el objeto 'root'
    let i = 0;
    while (queue.length > 0) {
      let current = queue.shift();//saca el 1er elemento del array (root)
      for (let side of ["left", "right"]) {
        if (!current[side]) {
          if (values[i] !== null) {
            current[side] = new TreeNode(values[i]);//root[left]= nuevo nodo un valor del array
          }
          i++;
          if (i >= values.length) return this;//cuanto termina el array, devuelve el objeto
        }
        if (current[side]) queue.push(current[side]);//si he creado un nodo hijo, lo añado a 'queue'
      }
    }
    return this;
  }

   distanceK(root, target, k) {
    let graph = new Map();
    let answer = [];
    let visited = new Set();

    let buildGraph= function (cur, parent) {
      if (cur !== null && parent !== null) {
          if (!graph.has(cur.value)) {
              graph.set(cur.value, []);
          }
          if (!graph.has(parent.value)) {
              graph.set(parent.value, []);
          }
          graph.get(cur.value).push(parent.value);
          graph.get(parent.value).push(cur.value);
      }
      if (cur.left !== null) {
          buildGraph(cur.left, cur);
      }
      if (cur.right !== null) {
          buildGraph(cur.right, cur);
      }
    }
  
    let dfs= function (cur, distance, k) {
      if (distance === k) {
          answer.push(cur);
          return;
      }
      for (let neighbor of graph.get(cur) || []) {
          if (!visited.has(neighbor)) {
              visited.add(neighbor);
              dfs(neighbor, distance + 1, k);
          }
      }
    }

    buildGraph(root, null);
    visited.add(target);
    dfs(target, 0, k);
    return answer;
  }


}

const tree = new TreeNode(3);
const root = [5,1,6,2,0,8,null,null,7,4] // the root is in TreeNode
tree.insert(root);
console.log(tree.printTree(tree))
const target = 5
const k = 2
// Example 1:
// Output: [7,4,1]
// Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.
console.log(tree.distanceK(tree,target,k))
// Example 2:
// Input: root = [1], target = 1, k = 3
// Output: []
