//Enfoque 2: Intuición recursiva La versión recursiva es un poco más complicada y la clave es 
//trabajar hacia atrás. Supongamos que el resto de la lista ya se ha invertido, ahora, 
//¿cómo invertimos la parte delantera? Supongamos que la lista es: n1 → … → nk-1 → nk 
// → nk 1 → … → nm → Ø Supongamos que desde el nodo nk 1 hasta nm se ha invertido y 
//estamos en el nodo nk. n1 → … → nk-1 → nk → nk 1 ← … ← nm Queremos que el siguiente nodo
// de nk 1 apunte a nk. Entonces, nk.siguiente.siguiente = nk; 
//Tenga mucho cuidado de que el próximo de n1 debe apuntar a Ø. Si se olvida de esto, 
//su lista enlazada tendrá un ciclo. Este error podría detectarse si prueba su código con una lista vinculada de tamaño 2.

// Complejidad del tiempo : O(n)
// Suponga que nnn es la longitud de la lista, la complejidad del tiempo es O(n)
// Complejidad espacial : O(n)
// El espacio adicional proviene del espacio de pila implícito debido a la recursividad. La recursividad podría llegar hasta nnn niveles de profundidad.

function reverseList( head) {
      //head es ListNode
      if (head == null || head.next == null) {
          return head;
      }
      let p = reverseList(head.next); //es un ListNode
      head.next.next = head;
      head.next = null;
      return p; //es un ListNode
  }
