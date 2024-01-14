// Dada la raíz de un árbol binario, devolver todos los subárboles duplicados. Para cada tipo de subárboles duplicados, solo necesita devolver el nodo raíz de cualquiera de ellos. Dos árboles están duplicados si tienen la misma estructura con los mismos valores de nodo.

// Input: root = [1,2,3,4,null,2,4,null,null,4]
// Output: [[2,4],[4]]
// Input: root = [2,1,1]
// Output: [[1]]
// Input: root = [2,2,2,3,null,3,null]
// Output: [[2,3],[3]]
// Intuición
// Podemos resolver el problema de manera más eficiente. En lugar de representar un subárbol con una cadena, usaremos ID de enteros no negativos: 0, 1, 2, etc.
// Queremos que los ID satisfagan la misma propiedad que en el enfoque anterior: subárboles iguales tienen ID iguales y árboles diferentes tienen ID diferentes.
// Dos subárboles son iguales cuando tienen valores de raíz iguales, subárboles izquierdos iguales y subárboles derechos iguales. Por lo tanto, se puede caracterizar un árbol con el triplete (ID del subárbol izquierdo, valor raíz, ID del subárbol derecho). Los subárboles iguales tienen los mismos tripletes.
// Cada subárbol tiene su triplete y también su ID. Mantendremos un mapa hash tripletToID que asigna un triplete a una ID.
// Encontramos un triplete y una ID para cada subárbol durante el recorrido del árbol posterior al pedido. Nuevamente, en el momento en que estamos manejando un nodo en postorder, sus subárboles izquierdo y derecho ya están visitados, y podemos componer un triplete para el subárbol del nodo usando las ID de los subárboles izquierdo y derecho.
// Si este triplete ocurre por primera vez, asignamos el ID más pequeño disponible a este subárbol. De lo contrario, el triplete ocurrió antes y obtenemos la ID del mapa hash tripletToID.
// Mantenemos un cnt de mapa hash más (similar al enfoque anterior), que rastrea cuántas veces ocurrió cada ID. Cuando en algún momento encontramos una ID por segunda vez, encontramos subárboles duplicados y podemos agregar a la respuesta.

// Algoritmo
// La función atravesar(nodo) atraviesa el subárbol del nodo y agrega subárboles duplicados a la respuesta. El valor devuelto es el ID del subárbol.
// La función funciona de la siguiente manera:
// 1-Atraviese el subárbol izquierdo del nodo y obtenga su ID (llame recursivamente a traverse(node->left)).
// 2-Atraviese el subárbol derecho del nodo y obtenga su ID (llame recursivamente a traverse(node->right)).
// 3-Componga un triplete de los siguientes valores: el ID del subárbol izquierdo, el valor del nodo y el ID del subárbol derecho.
// 4-Si el triplete no está en el mapa hash tripletToID, asignamos una nueva ID a este triplete: el valor entero no negativo no utilizado más pequeño (podemos usar la longitud del mapa para esto). De lo contrario, obtenga la ID de tripletToID.
// 5-Si la ID aparece por segunda vez, significa que ya había el mismo subárbol que el actual (el subárbol del nodo). En este caso, agregamos un nodo a la respuesta.
// 6-Devuelve el ID de la función.
// Solo necesitamos llamar a traverse(root) para resolver el problema

// Complejidad del tiempo: O(n).
// Atravesamos el árbol con nnn nodos y, para cada subárbol, encontramos un triplete y un ID. Realizamos operaciones con los mapas hash tripletToID y cnt. Dado que un ID es un número entero y un triplete tiene una longitud de 3 (O(1)), estas operaciones toman O(1) tiempo para cada uno de los n nodos.
// Complejidad espacial: O(n).
// Almacenamos los mapas hash tripletToID y cnt, que ocupan memoria O(n). Además, la pila de recurrencia toma memoria O(n).


// Function to print tree nodes in InOrder fashion
// function inOrder(root)
// {
//   if (root != null) {
//     inOrder(root.left);
//     console.log(root.data + " ");
//     inOrder(root.right);
//   }
// }





// let arr = [ 1, 2, 3, 4, null, 6, 6, 6, 6 ];
// root = insertLevelOrder(arr, 0);
// console.log('---- FROM ARRAY-- LEVELORDER TO BINARYTREE----')
// console.log(printTree(root))
// console.log('---- PRINT BINARY TREE IN INORDER----')
// inOrder(root);

//SOLUTION FROM
//https://leetcode.com/problems/find-duplicate-subtrees/solutions/867469/javascript-postorder-dfs/

class Node
{
  constructor(data) {
  this.left = null;
  this.right = null;
  this.data = data;
  }
}

function insertLevelOrder(arr, i)
{
  let root = null;
  // Base case for recursion
  if (i < arr.length) {
    root = new Node(arr[i]);
    // insert left child
    root.left = insertLevelOrder(arr, 2 * i + 1);
    // insert right child
    root.right = insertLevelOrder(arr, 2 * i + 2);
  }
  return root;
}

function inOrder(root)
{
  if (root != null) {
    inOrder(root.left);
    console.log(root.data + " ");
    inOrder(root.right);
  }
}

function printTree(root) {
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
        matrix[rowIndex][columnIndex] = `${node.data}`
        fill(node.left, rowIndex + 1, left, columnIndex - 1)
        fill(node.right, rowIndex + 1, columnIndex + 1, right)
      }
    }
    fill(root, 0, 0, columnLength - 1)
    return matrix
  }


var findDuplicateSubtrees = function(root) {
  const map = new Map(), res = []
  dfs(root, map, res)
  return res
};

function dfs(root, map, res){
  if(!root) return '#'
  const subtree = `${root.data}.${dfs(root.left,map,res)}.${dfs(root.right, map,res)}`
  map.set(subtree,(map.get(subtree)||0) + 1)
  if(map.get(subtree) === 2){
    res.push(root)
  }
  return subtree
}
//let arr =  [1,2,3,4,null,2,4,null,null,4];
let arr = [2,2,2,3,null,3,null]
 root = insertLevelOrder(arr, 0);
//  console.log('---- FROM ARRAY-- LEVELORDER TO BINARYTREE----')
//  console.log(printTree(root))
findDuplicateSubtrees(root)
