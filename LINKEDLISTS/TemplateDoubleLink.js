class ListNode {
  constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
  }
}

let addNode = (node, nodeToAdd) => {
  let prevNode = node.prev;
  nodeToAdd.next = node;
  nodeToAdd.prev = prevNode;
  prevNode.next = nodeToAdd;
  node.prev = nodeToAdd;
}

let deleteNode = node => {
  let prevNode = node.prev;
  let nextNode = node.next;
  prevNode.next = nextNode;
  nextNode.prev = prevNode;
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
  let one = new ListNode(1);
  let two = new ListNode(2);
  let three = new ListNode(3);
  one.next = two;
  two.next = three;
  let head = one;
  
  console.log(head.val);
  console.log(head.next.val);
  console.log(head.next.next.val);
  console.log('--- getSum:',getSum(head))
  console.log('--- getSumw:',getSum2(head))

}());


