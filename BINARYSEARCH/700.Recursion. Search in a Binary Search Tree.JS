// INICIO: GESTION DEL LISTNODE
class ListNode {
  constructor(val) {
      this.val = val;
      this.next = null;
  }
}

function insertAtEnd(head, element,first) {
  let toAdd = new ListNode(element);
  let temp = head;
  if (first) { //only first time
      return head = temp = toAdd;
  } else {
    //  while (temp.next !== null) {
      while (temp.next) {
          temp = temp.next;
      }
      return temp.next = toAdd;
  }
}

function createLinkedList(arr, size) {

  let head = arr;
  head=insertAtEnd(head, arr[0],true); //first time -> true
  //fist is special
  for (let i = 1; i < size; ++i) {
      insertAtEnd(head, arr[i],false);
  }
  return head;
}

function printLinkedList(head) {
  let temp = head;
  while (temp) {
      console.log(temp.val);
      if (temp.next) console.log(" -> ");
      temp = temp.next;
  }
  console.log();
}
// FIN: GESTION DEL LISTNODE
  
class Solution {
  constructor(head,val){
    let newhead=createLinkedList(head,head.length)
    printLinkedList(newhead)
    const newTree=this.searchBST(newhead,val)
    printLinkedList(newTree)
  }
   //// INICIO: este es el EJERCICIO
   searchBST(root, val) {
    if (root === null || val === root.val) return root;
    return val < root.val ? this.searchBST(root.left, val) : this.searchBST(root.right, val);
  }
    //// FIN: este es el EJERCICIO
}

const root = [4,2,7,1,3]
const val = 2;
const ans=new Solution(root,val)


// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]
// Input: root = [4,2,7,1,3], val = 5
// Output: []