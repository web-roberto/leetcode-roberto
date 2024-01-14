// Se le dan los encabezados de dos listas enlazadas ordenadas list1 y list2. Combine las dos listas en una lista ordenada. La lista debe hacerse empalmando los nodos de las dos primeras listas. Devuelve el encabezado de la lista enlazada fusionada.
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Enfoque 2: Iteración
// Intuición
// Podemos lograr la misma idea a través de la iteración suponiendo que l1 es completamente
// menos de l2 y procesando los elementos uno por uno, insertando elementos de
// l2 en los lugares necesarios en l1.

// Algoritmo
// Primero, configuramos un nodo falso "preencabezado" que nos permite devolver fácilmente el
// cabeza de la lista fusionada más tarde. También mantenemos un puntero anterior, que
// apunta al nodo actual para el que estamos considerando ajustar su próximo
// puntero. Luego, hacemos lo siguiente hasta que al menos uno de los puntos l1 y l2
// a nulo: si el valor en l1 es menor o igual que el valor en l2,
// luego conectamos l1 al nodo anterior e incrementamos l1. De lo contrario, nosotros
// haz lo mismo, pero para l2. Luego, independientemente de la lista que conectamos,
// incremente prev para mantenerlo un paso detrás de uno de nuestros encabezados de lista.

// Después de que termina el bucle, como máximo uno de l1 y l2 no es nulo.
// Por lo tanto (debido a que las listas de entrada estaban ordenadas), si cualquiera de las listas es
// no nulo, contiene solo elementos mayores que todos los
// elementos previamente combinados. Esto significa que simplemente podemos conectar el
// lista no nula a la lista fusionada y devolverla.

// Para ver esto en acción en un ejemplo, mira la animación a continuación:

// Time complexity : O(n+m)O(n + m)O(n+m)
// Because exactly one of l1 and l2 is incremented on each loop
// iteration, the while loop runs for a number of iterations equal to the
// sum of the lengths of the two lists. All other work is constant, so the
// overall complexity is linear.

// Space complexity : O(1)O(1)O(1)
// The iterative approach only allocates a few pointers, so it has a
// constant overall memory footprint.


function mergeTwoLists( l1,  l2) { // l1,l2 y devuelve ListNode
   // maintain an unchanging reference to node ahead of the return node.
      let head = new ListNode();
      let tail = head;

      while (l1 != null && l2 != null) {
          if (l1.val < l2.val) {
              tail.next = l1;
              l1 = l1.next;
          } else {
              tail.next = l2;
              l2 = l2.next;
          }
          tail = tail.next;
      }
      // At least one of l1 and l2 can still have nodes at this point, so connect
      // the non-null list to the end of the merged list.
      tail.next = l1 == null ? l2 : l1;
      return head.next;
  }

