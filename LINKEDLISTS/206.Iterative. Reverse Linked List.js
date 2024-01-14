//Enfoque 1: intuición iterativa Supongamos que tenemos la lista enlazada 1 → 2 → 3 → Ø, 
// nos gustaría cambiarla a Ø ← 1 ← 2 ← 3. Mientras recorremos la lista, podemos cambiar 
//el siguiente puntero del nodo actual para que apunte a su elemento anterior. 
//Dado que un nodo no tiene referencia a su nodo anterior, debemos almacenar su elemento 
//anterior de antemano. También necesitamos otro puntero para almacenar el siguiente nodo
// antes de cambiar la referencia. ¡No olvide devolver la nueva referencia principal al final!

// Time complexity : O(n)O(n)O(n).
// Assume that nnn is the list's length, the time complexity is O(n)O(n)O(n).
// Space complexity : O(1)O(1)O(1).

function reverseList( head) { //head es ListNode
       let prev = null; //ListNode
       let curr = head; //ListNode
      while (curr != null) {
          let nextTemp = curr.next; //ListNode
          curr.next = prev;
          prev = curr;
          curr = nextTemp;
      }
      return prev;//devuelve un ListNode
  }
//[2,3,4]
// 1.-prev=null, curr=2
// head es 2, curr=2, nextTemp:3,curr.next=null, prev=2, curr,3 devuelve el 2 prev
//2.- [2-> null(final del array),prev=2, curr=3]
// [null<-2,prev=2,curr=3,4]
//3.- nextTeemp=4,3->2,prev=3,curr:4
//[null<-2<-3,prev=3,curr=4]
//4.-nextTemp=null,4->3,prev=4,curr:null
// [null<-2<-3<-4, prev=4,curr=null] -> return 4 como nuevo HEAD de la lista inversa