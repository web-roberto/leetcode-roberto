

// l1=[0,1] l2=[0,1,2] When one list is longer than the other.
// l1=[] l2=[0,1]	When one list is null, which means an empty list.
// l1=[9,9]l2=[1]The sum could have an extra carry of one at the end, which is easy to forget.
// Time complexity : O(max⁡(m,n))O(\max(m, n))O(max(m,n)). Assume that mmm and nnn represents the length of l1l1l1 and l2l2l2 respectively, the algorithm above iterates at most max⁡(m,n)\max(m, n)max(m,n) times.
// Space complexity : O(1)O(1)O(1). The length of the new list is at most max⁡(m,n)+1\max(m,n) + 1max(m,n)+1 However, we don't count the answer as part of the space complexity.
// Follow up
// What if the the digits in the linked list are stored in non-reversed order? For example:
// (3→4→2)+(4→6→5)=8→0→7

// Algoritmo
// Al igual que sumarías dos números en una hoja de papel, comenzamos sumando los dígitos menos significativos, que es la cabeza de l1l1l1 y l2l2l2. Dado que cada dígito está en el rango de 0…90 \ldots 90…9, la suma de dos dígitos puede "desbordarse". Por ejemplo, 5+7=125 + 7 = 125+7=12. En este caso, establecemos el dígito actual en 222 y llevamos carry=1carry = 1carry=1 a la siguiente iteración. carrycarrycarry debe ser 000 o 111 porque la mayor suma posible de dos dígitos (incluido el acarreo) es 9+9+1=199 + 9 + 1 = 199+9+1=19.
// El pseudocódigo es el siguiente:
// Inicialice el nodo actual en el encabezado ficticio de la lista de retorno.
// Inicializar llevar a 000.
// Recorra las listas l1l1l1 y l2l2l2 hasta que llegue a ambos extremos y el acarreo sea 000.
// Establezca xxx en el valor del nodo l1l1l1. Si l1l1l1 ha llegado al final de l1l1l1, configúrelo en 000.
// Establezca yyy en el valor del nodo l2l2l2. Si l2l2l2 ha llegado al final de l2l2l2, configúrelo en 000.
// Establecer sum=x+y+carrysum = x + y + carrysum=x+y+carry.
// Actualice carry=sum/10carry = sum / 10carry=sum/10.
// Cree un nuevo nodo con el valor de dígito de (sum mod 10)(sum \bmod 10)(summod10) y configúrelo en el siguiente nodo actual, luego avance el nodo actual al siguiente.
// Avanza tanto l1l1l1 como l2l2l2.
// Devuelve el siguiente nodo de la cabeza ficticia.
// Tenga en cuenta que usamos una cabeza ficticia para simplificar el código. Sin una cabeza ficticia, tendría que escribir sentencias condicionales adicionales para inicializar el valor de la cabeza.
// Preste especial atención a los siguientes casos:

// Time complexity : O(max⁡(m,n))O(\max(m, n))O(max(m,n)). Assume that mmm and nnn represents the length of l1l1l1 and l2l2l2 respectively, the algorithm above iterates at most max⁡(m,n)\max(m, n)max(m,n) times.
// Space complexity : O(1)O(1)O(1). The length of the new list is at most max⁡(m,n)+1\max(m,n) + 1max(m,n)+1 However, we don't count the answer as part of the space complexity.

// Follow up
// What if the the digits in the linked list are stored in non-reversed order? For example:
// (3→4→2)+(4→6→5)=8→0→7


function addTwoNumbers( l1,  l2) {
       dummyHead = new ListNode(0);
       curr = dummyHead;
      let carry = 0;
      while (l1 != null || l2 != null || carry != 0) {
          let x = (l1 != null) ? l1.val : 0;
          let y = (l2 != null) ? l2.val : 0;
          let sum = carry + x + y;
          carry = sum / 10;
          curr.next = new ListNode(sum % 10);
          curr = curr.next;
          if (l1 != null) l1 = l1.next;
          if (l2 != null) l2 = l2.next;
      }
      return dummyHead.next;
  }
// l1 = [2,4,3], l2 = [5,6,4] -> [7,0,8] que es : 342 + 465 = 807