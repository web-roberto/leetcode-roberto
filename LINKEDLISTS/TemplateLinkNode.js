class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let getSum = head => {
  // the sum of all the nodes
    let ans = 0;
    while (head) {
        ans += head.val;
        head = head.next;
    }
    return ans;
}

let getSum2 = head => {
    // the sum of all the nodes
    if (!head) {
        return 0;
    }
    return head.val + getSum(head.next);
}

let deleteNode = prevNode => {
  //prevNode: the previous node to delete
    prevNode.next = prevNode.next.next;
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

