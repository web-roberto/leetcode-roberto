// ------- Code to generate our binary tree & print in a console of Chrome------
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
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
}

const tree = new TreeNode(3);
tree.insert([6,1,9,2,null,4,null,5,null,null,null,null,8,null,null,null]);
console.log(tree.printTree(tree))


// ------- Our Solution -------
const levelOrder = function(root) {
  if(!root) return [];
  const result = [];
  const queue = [root];
  
  while(queue.length) {
    const currentLevelValues = [];
    let length = queue.length, count = 0;

    while(count < length) {
      const currentNode = queue.shift();
      
      currentLevelValues.push(currentNode.value);
      
      if(currentNode.left) {
        queue.push(currentNode.left)
      }
      
      if(currentNode.right) {
        queue.push(currentNode.right)
      }

      count++;
    }
    
    result.push(currentLevelValues);
  }
  
  return result;
};

console.log(levelOrder(tree))