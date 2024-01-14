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

  //// INICIO: este es el EJERCICIO
  reverseList(head) {
     //cargar el array en una lista y después ejecuto la función
    let newhead=createLinkedList(head,head.length)
    printLinkedList(newhead)

    let prev = null;
    let curr = newhead;
    while (curr) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
    }
  //// FIN: este es el EJERCICIO

}

const ans=new Solution()
const head = [1,2,3,4,5]
console.log(ans.reverseList(head))




// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:
// Input: head = [1,2]
// Output: [2,1]
// Example 3:
// Input: head = []
// Output: []
