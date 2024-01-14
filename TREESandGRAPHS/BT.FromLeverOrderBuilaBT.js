
	let root;
	
	class Node
	{
		constructor(data) {
		this.left = null;
		this.right = null;
		this.data = data;
		}
	}
	
	// Function to insert nodes in level order
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

	// Function to print tree nodes in InOrder fashion
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


	
	let arr = [ 1, 2, 3, 4, null, 6, 6, 6, 6 ];
	root = insertLevelOrder(arr, 0);
console.log('---- FROM ARRAY-- LEVELORDER TO BINARYTREE----')
console.log(printTree(root))
console.log('---- PRINT BINARY TREE IN INORDER----')
inOrder(root);