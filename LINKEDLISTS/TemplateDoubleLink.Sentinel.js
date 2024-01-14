class ListNode {
  constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
  }
}

let addToEnd = nodeToAdd => {
  nodeToAdd.next = tail;
  nodeToAdd.prev = tail.prev;
  tail.prev.next = nodeToAdd;
  tail.prev = nodeToAdd;
}

let removeFromEnd = () => {
  if (head.next == tail) {
      return;
  }

  let nodeToRemove = tail.prev;
  nodeToRemove.prev.next = tail;
  tail.prev = nodeToRemove.prev;
}

let addToStart = nodeToAdd => {
  nodeToAdd.prev = head;
  nodeToAdd.next = head.next;
  head.next.prev = nodeToAdd;
  head.next = nodeToAdd;
}

let removeFromStart = () => {
  if (head.next == tail) {
      return;
  }

let nodeToRemove = head.next;
  nodeToRemove.next.prev = head;
  head.next = nodeToRemove.next;
}

let getSum = head => {
  // the sum of all the nodes simple and double
    let ans = 0;
    while (head) {
        ans += head.val;
        head = head.next;
    }
    return ans;
}

let getSum2 = head => {
    // the sum of all the nodes  simple and double
    if (!head) {
        return 0;
    }
    return head.val + getSum(head.next);
}

(function main() {
  let head = new ListNode(-1);
  let tail = new ListNode(-1);
  tail.prev = head;
  head.next=tail
  // the list is empty now

  let one = new ListNode(1);
  let two = new ListNode(2);
  let three = new ListNode(3);
  head.next=one
  one.next = two;
  one.prev=head;
  two.next = three;
  two.prev=one
  three.next=tail;
  three.prev=two
  tail.prev=three

  console.log(head.val);
  console.log(head.next.val);
  console.log(head.next.next.val);
  console.log(head.next.next.next.val);
  console.log(head.next.next.next.next.val);
  console.log('--- getSum:',getSum(head))
  console.log('--- getSumw:',getSum2(head))
}());


