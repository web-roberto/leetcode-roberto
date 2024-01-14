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
  
//// INICIO: este es el EJERCICIO
class Solution {
  searchBST(head, val) {
    // inicio: cargar array en lista de nodos
    let newhead=createLinkedList(head,head.length)
    printLinkedList(newhead)
    // fin: cargar array en lista de nodos
    //while (newhead !== null && val !== newhead.val)
    while (newhead  !==null && newhead  !==undefined && val !== newhead.val){
      debugger
      newhead = val < newhead.val ? newhead.left : newhead.right;
    }
    return newhead;
  }
}
//// FIN: este es el EJERCICIO

const root = [4,2,7,1,3]
const val = 2;
const ans=new Solution()
const newTree=ans.searchBST(root,val)
printLinkedList(newTree)

// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]
// Input: root = [4,2,7,1,3], val = 5
// Output: []