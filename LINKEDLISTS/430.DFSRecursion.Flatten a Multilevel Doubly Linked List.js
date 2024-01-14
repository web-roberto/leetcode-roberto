


///     ---------------------- JAVA but changed by me . Editorial Solution---
// class Node {
//   constructor(_val, _prev, _next, _child){
//     this.val=_val;
//     this.prev=_prev;
//     this.next=_next;
//     this.child=_child;
//   }
// };

//   function flatten( head) {
//     if (head == null) return head;
//     // pseudo head to ensure the `prev` pointer is never none
//      pseudoHead = new Node(0, null, head, null);

//     flattenDFS(pseudoHead, head);

//     // detach the pseudo head from the real head
//     pseudoHead.next.prev = null;
//     return pseudoHead.next;
//   }
//   /* return the tail of the flatten list */
//   function flattenDFS( prev,  curr) {
//     if (curr == null) return prev;
//     curr.prev = prev;
//     prev.next = curr;

//     // the curr.next would be tempered in the recursive function
//      tempNext = curr.next;

//      tail = flattenDFS(curr, curr.child);
//     curr.child = null;

//     return flattenDFS(tail, tempNext);
//   }


  https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/solutions/2037425/easy-recursive-and-iterative-solutions/

  var flatten = function(head) {
    const dfs = (ptr) => {
    let last = null;
    while(ptr) {
        if(ptr.child) {
      //go deep and return to previous caller
            let node = dfs(ptr.child);
            
            let next = ptr.next;
            let newHead = ptr.child;
            ptr.child = null;
            ptr.next = newHead;
            newHead.prev = ptr;
            node.next = next;
            
            if(next)
                next.prev = node;
        }
        last = ptr;
        ptr = ptr.next;
    }
    return last;
}

dfs(head);
}