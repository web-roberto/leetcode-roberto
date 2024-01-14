// Notamos que el problema podría reducirse simplemente a otro: elimine el (L−n+1) nodo del principio de la lista, donde L es la longitud de la lista. Este problema es fácil de resolver una vez que encontramos la longitud de la lista L. Ej el último es n=L → L-L+1=1 
// Enfoque 2: Algoritmo de un paso
// Algoritmo
// El algoritmo anterior podría optimizarse a una sola pasada. En lugar de un puntero, podríamos usar dos punteros. El primer puntero avanza la lista n+1 pasos desde el principio, mientras que el segundo puntero comienza desde el principio de la lista. Ahora, ambos punteros están exactamente separados por n nodos. Mantenemos esta brecha constante avanzando ambos punteros juntos hasta que el primer puntero llega más allá del último nodo. El segundo puntero apuntará al nodo n contando desde el último.
// Volvemos a vincular el puntero siguiente del nodo al que hace referencia el segundo puntero para que apunte al siguiente nodo siguiente del nodo.

// public ListNode removeNthFromEnd(ListNode head, int n) {
//   ListNode dummy = new ListNode(0);
//   dummy.next = head;
//   ListNode first = dummy;
//   ListNode second = dummy;

// Time complexity : O(L)
// The algorithm makes one traversal of the list of L nodes. Therefore time complexity is O(L)
// Space complexity : O(1)
// We only used constant extra space.
  
function removeNthFromEnd( head,  n) {
  // dummy = new ListNode(0);
  //dummy.next = head;
  let length  = 0;
  let current = head;
  //calculate de length of the list
  while (current != null) {
      length++;
      current = current.next;
  }
  //length -= n; //the node before which we want to remove
  if (length==n) return head.next
  let nodeBeforeRemovedIndex=length-n-1;

  current=head;

  //first = dummy;
  for (let i = 0; i < nodeBeforeRemovedIndex; i++) {
    current=current.next;
  }
  current.next = current.next.next; //the node before what we want to delete
  return head;
}