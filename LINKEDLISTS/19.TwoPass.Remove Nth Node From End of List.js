// Notamos que el problema podría reducirse simplemente a otro: elimine el (L−n+1) nodo del principio de la lista, donde L es la longitud de la lista. Este problema es fácil de resolver una vez que encontramos la longitud de la lista L. Ej el último es n=L → L-L+1=1 

// Enfoque 1: Algoritmo de dos paso
// Primero agregaremos un nodo "ficticio" auxiliar, que apunta al encabezado de la lista. El nodo "ficticio" se usa para simplificar algunos casos extremos, como una lista con un solo nodo o la eliminación del encabezado de la lista. En el primer paso, encontramos la longitud de la lista L. Luego colocamos un puntero en el nodo ficticio y comenzamos a moverlo a través de la lista hasta que llega al nodo anterior al que hay que elimnar (L−n) . Volvemos a vincular el siguiente puntero del nodo (L−n) al nodo (L−n+2) , saltándonos el nodo a eliminar (L-n+1) y hemos terminado.
// public ListNode removeNthFromEnd(ListNode head, int n) {
//   ListNode dummy = new ListNode(0);
//   dummy.next = head;
//   int length  = 0;
//   ListNode first = head;

// Time complexity : O(L)O(L)O(L).
// The algorithm makes two traversal of the list, first to calculate list length LLL and second to find the (L−n)(L - n)(L−n) th node. There are 2L−n2L-n2L−n operations and time complexity is O(L)O(L)O(L).
// Space complexity : O(1)O(1)O(1).
// We only used constant extra space.

function removeNthFromEnd( head, n) {
  let current=head;
  // Advances first pointer so that the gap between first and second is n nodes apart
  for (let i = 1; i <= n ; i++) {
    current = current.next;
  }
  if (current==n) return head.next

  let nodeBeforeRemoved=head;
  // Move first to the end, maintaining the gap between current y nodeBeforeRemoved
  while (current.next != null) {
    current=current.next
    nodeBeforeRemoved=nodeBeforeRemoved.next
  }
  nodeBeforeRemoved.next = nodeBeforeRemoved.next.next;
  return head;
}


