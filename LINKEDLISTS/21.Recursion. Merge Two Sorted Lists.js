// Se le dan los encabezados de dos listas enlazadas ordenadas list1 y list2. Combine las dos listas en una lista ordenada. La lista debe hacerse empalmando los nodos de las dos primeras listas. Devuelve el encabezado de la lista enlazada fusionada.
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Enfoque 1: Intuición recursiva Podemos definir recursivamente el resultado de una operación
// de fusión en dos listas de la siguiente manera (evitando la lógica de caso de esquina que 
//rodea a las listas vacías): {list1[0] merge(list1[1:],list2)bblist1[0 ]<lista2[0]lista2[0] 
// {list2[0] merge(list1,list2[1:])otherwise
// de lo contrario ​ Es decir, la más pequeña de las cabezas de las dos listas más el resultado 
// de una fusión en el resto de los elementos. 

//Algoritmo 
// Modelamos la recurrencia anterior 
// directamente, teniendo en cuenta primero los casos extremos. Específicamente, si cualquiera de
// l1 o l2 es inicialmente nulo, no hay fusión para realizar, por lo que simplemente devolvemos
// la lista no nula. De lo contrario, determinamos cuál de l1 y l2 tiene una cabeza más pequeña
// y establecemos recursivamente el siguiente valor para esa cabeza en el siguiente resultado 
// de combinación. Dado que ambas listas terminan en nulo, la recursividad eventualmente terminará

// Time complexity : O(n+m)O(n + m)O(n+m)
// Because each recursive call increments the pointer to l1 or l2 by one (approaching the dangling null at the end of each list), there will be exactly one call to mergeTwoLists per element in each list. Therefore, the time complexity is linear in the combined size of the lists.
// Space complexity : O(n+m)O(n + m)O(n+m)
// The first call to mergeTwoLists does not return until the ends of both l1 and l2 have been reached, so n+mn + mn+m stack frames consume O(n+m)O(n + m)O(n+m) space.


  function mergeTwoLists( l1,  l2) { // l1,l2 y devuelve ListNode
    if (l1 == null) {return l2;}
    else if (l2 == null) {return l1;}

    let head; //ListNode
    if (l1.val <l2.val){
      head=l1;
      l1=l1.next
    } else {
      head=l2;
      l2=l2.next
    }
    //he puesto en 'head' el menor del nodo de l1 y l2
    //el siguiente del 'head' es el resto de la ordenación
    head.next= mergeTwoLists(l1,l2)
    return head;
    }