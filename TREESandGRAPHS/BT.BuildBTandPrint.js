
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

const root = new TreeNode(1);
root.insert([2,3,4,5,null,null,null,6,null,null,null,7,null,null]);
console.log(root.printTree(root))