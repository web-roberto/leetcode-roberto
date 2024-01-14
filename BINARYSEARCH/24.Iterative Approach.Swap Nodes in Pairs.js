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

class Solution {
  swapPairs(head) {
//carga de array a linked list
       let newhead=createLinkedList(head,head.length)
       printLinkedList(newhead)
      let dummy = new ListNode(-1);
      dummy.next = newhead;
      let prevNode = dummy;
      debugger;
      while ((newhead != null) && (newhead.next != null)) {
          let firstNode = newhead;
          let secondNode = newhead.next;
          prevNode.next = secondNode;
          firstNode.next = secondNode.next;
          secondNode.next = firstNode;
          prevNode = firstNode;
          newhead = firstNode.next;
      }
      return dummy.next;
  }
}
const ans = new Solution()

const cabeza = [1,2,3,4]
console.log(ans.swapPairs(cabeza))


// Example 1:
// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Example 2:
// Input: head = []
// Output: []
// Example 3:
// Input: head = [1]
// Output: [1]
