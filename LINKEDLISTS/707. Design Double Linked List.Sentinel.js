// Implement the MyLinkedList class:

// MyLinkedList() Initializes the MyLinkedList object.
// int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
// void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
// void addAtTail(int val) Append a node of value val as the last element of the linked list.
// void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
// void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.

// Example 1:
// Input
// ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
// [[], [1], [3], [1, 2], [1], [1], [1]]
// Output
// [null, null, null, null, 2, null, 3]
// Explanation
// MyLinkedList myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(3);
// myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
// myLinkedList.get(1);              // return 2
// myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
// myLinkedList.get(1);              // return 3

//Complexity Analysis
// Time complexity: O(1)\mathcal{O}(1)O(1) for addAtHead and addAtTail.
// O(min⁡(k,N−k))\mathcal{O}(\min(k, N - k))O(min(k,N−k)) for get, addAtIndex, and deleteAtIndex,
// where kkk is an index of the element to get, add or delete.
// Space complexity: O(1)\mathcal{O}(1)O(1) for all operations.

// DE LA PAGINA https://leetcode.com/problems/design-linked-list/editorial/


class ListNode {
  constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
  }
}

class MyLinkedList {
  constructor() {
    this.size=0;
    this.head = new ListNode(0);
    this.tail = new ListNode(0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

   get(index) {
    // if index is invalid
    if (index < 0 || index >= this.size) return -1;
    let curr = this.head;
    if (index + 1 < this.size - index)
      for(let i = 0; i < index + 1; ++i) curr = curr.next;
    else {
      curr = this.tail;
      for(let i = 0; i < this.size - index; ++i) curr = curr.prev;
    return curr.val;
    }
  }

  addAtHead(val) {
     let pred = this.head; 
     let succ = this.head.next;
    ++this.size;
     this.toAdd = new ListNode(val);
    this.toAdd.prev = pred;
    this.toAdd.next = succ;
    pred.next = this.toAdd;
    succ.prev = this.toAdd;
      }

 
  /** Append a node of value val to the last element of the linked list. */
  addAtTail( val) {
     let succ = this.tail;
     let pred = this.tail.prev;

    ++this.size;
    this.toAdd = new ListNode(val);
    this.toAdd.prev = pred;
    this.toAdd.next = succ;
    pred.next = this.toAdd;
    succ.prev = this.toAdd;
  }

  /** Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. */
  addAtIndex( index,  val) {
    // If index is greater than the length, 
    // the node will not be inserted.
    if (index > this.size) return;

    // [so weird] If index is negative, 
    // the node will be inserted at the head of the list.
    if (index < 0) index = 0;

    // find predecessor and successor of the node to be added
     let pred;
     let succ;
    if (index < this.size - index) {
      pred = this.head;
      for(let i = 0; i < index; ++i) pred = pred.next;
      succ = pred.next;
    }
    else {
      succ = this.tail;
      for (let i = 0; i < this.size - index; ++i) succ = succ.prev;
      pred = succ.prev;
    }

    // insertion itself
    ++this.size;
    this.toAdd = new ListNode(val);
    this.toAdd.prev = pred;
    this.toAdd.next = succ;
    pred.next = this.toAdd;
    succ.prev = this.toAdd;
  }

  /** Delete the index-th node in the linked list, if the index is valid. */
  deleteAtIndex( index) {
    // if the index is invalid, do nothing
    if (index < 0 || index >= this.size) return;
    // find predecessor and successor of the node to be deleted
    let pred;
    let succ;
    if (index < this.size - index) {
      pred = this.head;
      for(let i = 0; i < index; ++i) pred = pred.next;
      succ = pred.next.next;
    }
    else {
      succ = this.tail;
      for (let i = 0; i < this.size - index - 1; ++i) succ = succ.prev;
      pred = succ.prev.prev;
    }

    // delete pred.next 
    --this.size;
    pred.next = succ;
    succ.prev = pred;
  }
  printList() {
          let ptr = this.head;
          while (ptr) {
              console.log(' node:',ptr.val)
           //   ans += head.val;
              ptr = ptr.next;
          }
      }


}
 
let myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
myLinkedList.get(1);              // return 2
myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
myLinkedList.get(1);              // return 3
myLinkedList.printList()
