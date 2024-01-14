// from Python 3
// debo cargar el array en un Tree Node primero

// carga de un árbol binario de ZTM: BT.FromLeverOrderBuildaBTandPrint.js
// y le añado la función 'distanceK' dentro de la clase TreeNode y llamo a:
// insertar, a printTree y a distanceK
// I canged node.val by node.value

// visited es un Set y hacer add ->  0:{nodo de 1}, 1:{nodo de 2}......

// ------- Code to generate our binary tree & print in a console of Chrome------
class TreeNode {
  constructor(value) {
    this.value = value;
    this.parent=null;
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

  distanceK =function (root, target, k) {
    let nodeOfTarget; //ROBERTO: added by me
    function add_parent(cur, parent) {
        if (cur) {
            cur.parent = parent;
            add_parent(cur.left, cur);
            add_parent(cur.right, cur);
            if (cur.value===target) {nodeOfTarget=cur} //ROBERTO: added by me
        }
    }
    debugger
    add_parent(root, null);
    debugger
    let answer = [];
    let visited = new Set();
    function dfs(cur, distance) {
        if (!cur || visited.has(cur)) {
            return;
        }
        visited.add(cur);
        if (distance === 0) {
            answer.push(cur.value);
            return;
        }
        dfs(cur.parent, distance - 1);
        dfs(cur.left, distance - 1);
        dfs(cur.right, distance - 1);
    }
    //busca el target=5 en el grapho y lo hago raiz.
    dfs(nodeOfTarget, k); //ROBERTO: changed 'target' by 'nodeOfTarget' by me
    return answer;
}
}

const tree = new TreeNode(3);
const root = [5,1,6,2,0,8,null,null,7,4] //the root is in TreeNode
const target = 5
const k = 2
tree.insert(root); //el nodo raiz está en TreeNode
console.log(tree.printTree(tree))

// Example 1:
// Output: [7,4,1]
// Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.
console.log(tree.distanceK(tree,target,k))
// Example 2:
// Input: root = [1], target = 1, k = 3
// Output: []
