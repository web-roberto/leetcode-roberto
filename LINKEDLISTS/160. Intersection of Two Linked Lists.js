

public class Solution {
  public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
      Set<ListNode> nodesInB = new HashSet<ListNode>();

      while (headB != null) {
          nodesInB.add(headB);
          headB = headB.next;
      }

      while (headA != null) {
          // if we find the node pointed to by headA,
          // in our set containing nodes of B, then return the node
          if (nodesInB.contains(headA)) {
              return headA;
          }
          headA = headA.next;
      }

      return null;
  }
}


var getIntersectionNode = function(headA, headB) {
  const set = new Set();
  while(headA || headB) {
      if(headA) {
          if(set.has(headA)) {
              return headA;
          }
          else {
              set.add(headA);
          }
          headA = headA.next;
      }
      if(headB) {
          if(set.has(headB)) {
              return headB;
          }
          else {
              set.add(headB);
          }
          headB = headB.next;
      }
  }
  return null;
};