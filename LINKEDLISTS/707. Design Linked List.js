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

// Time complexity: O(1)\mathcal{O}(1)O(1) for addAtHead.
// O(k)\mathcal{O}(k)O(k) for get, addAtIndex, and deleteAtIndex,
// where kkk is an index of the element to get, add or delete.
// O(N)\mathcal{O}(N)O(N) for addAtTail.

// Space complexity: O(1) for all operations.

class ListNode {
  constructor(val) {
      this.val = val;
      this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.size=0;
    this.head = new ListNode(0);
  }
  /** Get the value of the index-th node in the linked list. If the index is invalid, return -1. */
   get(index) {
    // if index is invalid
    if (index < 0 || index >= this.size) return -1;
    let curr = this.head;
    // index steps needed 
    // to move from sentinel node to wanted index
    for(let i = 0; i < index + 1; ++i) curr = curr.next;
    return curr.val;
  }
  /** Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. */
  addAtHead(val) {
    this.addAtIndex(0, val);
  }
  /** Append a node of value val to the last element of the linked list. */
  addAtTail(val) {
    this.addAtIndex(this.size, val);
  }
  /** Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. */
  addAtIndex(index,val) {
    // If index is greater than the length, 
    // the node will not be inserted.
    if (index > this.size) return;
    // [so weird] If index is negative, 
    // the node will be inserted at the head of the list.
    if (index < 0) index = 0;
    ++this.size;
    // find predecessor of the node to be added
     let pred = this.head;
    for(let i = 0; i < index; ++i) pred = pred.next;

    // node to be added
     let toAdd = new ListNode(val);
    // insertion itself
    toAdd.next = pred.next;
    pred.next = toAdd;
  }

  /** Delete the index-th node in the linked list, if the index is valid. */
    deleteAtIndex(index) {
    // if the index is invalid, do nothing
    if (index < 0 || index >= this.size) return;

    this.size--;
    // find predecessor of the node to be deleted
    let pred = this.head;
    for(let i = 0; i < index; ++i) pred = pred.next;
    // delete pred.next 
    pred.next = pred.next.next;
  }
   printList() {
    // the sum of all the nodes simple and double
      let ptr = this.head;
      while (ptr) {
          console.log(' node:',ptr.val)
       //   ans += head.val;
          ptr = ptr.next;
      }
     // return ans;
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
