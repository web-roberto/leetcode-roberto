

/*
// Definition for a Node.
class Node {
    public int val;
    public Node prev;
    public Node next;
    public Node child;

    public Node() {}

    public Node(int _val,Node _prev,Node _next,Node _child) {
        val = _val;
        prev = _prev;
        next = _next;
        child = _child;
    }
};
*/
///     ---------------------- JAVA but changed by me . Editorial Solution---
// class Solution {
//   public Node flatten(Node head) {
//     if (head == null) return head;

//     Node pseudoHead = new Node(0, null, head, null);
//     Node curr, prev = pseudoHead;

//     Deque<Node> stack = new ArrayDeque<>();
//     stack.push(head);

//     while (!stack.isEmpty()) {
//       curr = stack.pop();
//       prev.next = curr;
//       curr.prev = prev;

//       if (curr.next != null) stack.push(curr.next);
//       if (curr.child != null) {
//         stack.push(curr.child);
//         // don't forget to remove all child pointers.
//         curr.child = null;
//       }
//       prev = curr;
//     }
//     // detach the pseudo node from the result
//     pseudoHead.next.prev = null;
//     return pseudoHead.next;
//   }
// }

//https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/solutions/2037425/easy-recursive-and-iterative-solutions/var flatten = function(head) {
var flatten = function(head) { 
  const stack = [];
  let ptr = head;
  
  while(ptr || stack.length) {
      if(ptr.child) {
          if(ptr.next)
              stack.push(ptr.next);
          let child = ptr.child;
          ptr.child = null;
          ptr.next = child;
          child.prev = ptr;
          ptr = child;
      } else if(ptr.next === null && stack.length) {
          let next = stack[stack.length - 1];
          ptr.next = next;
          next.prev = ptr;
          stack.pop();
      } else {
          ptr = ptr.next;
      }
  } 
  return head;
}
