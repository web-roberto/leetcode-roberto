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
  newhead=null;
  constructor(head){
    //carga de array a linked list
    this.newhead=createLinkedList(head,head.length)
    printLinkedList(this.newhead)
    console.log(this.swapPairs(this.newhead))
    
  }
  swapPairs(head) {
  
      if ((head === null) || (head.next === null)) {
          return head;
      }
      
      let firstNode =  new ListNode(head);
      let secondNode = new ListNode(head.next);
      
      firstNode.next = this.swapPairs(secondNode.next);
      secondNode.next = firstNode;
      
      return secondNode;
  }
}
const head = [1,2,3,4]
const ans=new Solution(head)



// Example 1:
// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Example 2:
// Input: head = []
// Output: []
// Example 3:
// Input: head = [1]
// Output: [1]
