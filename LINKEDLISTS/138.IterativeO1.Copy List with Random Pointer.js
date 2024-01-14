// en JS DIRECTAMENTE DE LEETCODE
//https://leetcode.com/problems/copy-list-with-random-pointer/solutions/3121744/js-quad-time-beats-84-linear-space-beat-79-explanation/

// Time complexity: O(n^2)
// Space complexity: O(1)

var copyRandomList = function(head) {
  let deepCopy  = new Node(0, null, null);
  let trackDeep = resetPointerDeep = result = deepCopy;
  let curr = node = head;

  while (curr) {
      deepCopy.next = new Node(curr.val, null, null);
      deepCopy = deepCopy.next;
      curr = curr.next;
  }   
  
  trackDeep = trackDeep.next;

  va// en JS DIRECTAMENTE DE LEETCODE
 getSameNode = function(node) {

      let trackHead = head;
      let getDeep = resetPointerDeep.next;
      while (trackHead !== node) {
          trackHead = trackHead.next;
          getDeep = getDeep.next;
      }
      return getDeep;
  }

  while (node) {
      if (node.random)
          trackDeep.random = getSameNode(node.random)
      trackDeep = trackDeep.next;
      node = node.next;
  }

  return result.next;
};