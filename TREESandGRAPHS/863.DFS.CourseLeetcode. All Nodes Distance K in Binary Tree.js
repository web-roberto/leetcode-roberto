/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */

// carga de un árbol binario de ZTM: BT.FromLeverOrderBuildaBTandPrint.js
// y le añado la función 'distanceK' dentro de la clase TreeNode y llamo a:
// insertar, a printTree y a distanceK
// I canged node.val by node.value

// DFS ITERATIVO con queue. Hay otro dfs recursivo pero es para añadir un .parent a cada nodo

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
   // INICIO: es la función de este problema
  distanceK = function(root, target, k) {
    let nodeOfTarget; //ROBERTO: added by me

    let dfs = (node, parent) => {
      debugger
        if (!node) {return;}      
        node.parent = parent;
        if (node.value===target) {nodeOfTarget=node} //ROBERTO: added by me
        dfs(node.left, node);
        dfs(node.right, node);
    }
    
    dfs(root, null); // recursive to create a parent
    let queue = [nodeOfTarget];  //ROBERTO: changed 'target' by 'nodeOfTarget' by me
    let seen = new Set([nodeOfTarget]); //ROBERTO: changed 'target' by 'nodeOfTarget' by me
    let distance = 0;
    debugger
    while (queue.length && distance < k) {
        let currentLength = queue.length;
        let nextQueue = [];
        
        for (let i = 0; i < currentLength; i++) {
          debugger
            let node = queue[i];
            for (const neighbor of [node.left, node.right, node.parent]) {
                if (neighbor && !seen.has(neighbor)) {
                    seen.add(neighbor);
                    nextQueue.push(neighbor);
                }
            }
        }
        
        queue = nextQueue;
        distance++;
    }
    
    return queue.map(node => node.value);
  };
   // FIN: es la función de este problema
}

const tree = new TreeNode(3);
const root = [5,1,6,2,0,8,null,null,7,4] //I deleted th 1st element and put in TreeNode
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












