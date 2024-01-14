// en JS DIRECTAMENTE DE LEETCODE
//https://leetcode.com/problems/copy-list-with-random-pointer/solutions/3566961/most-efficient-js-solution-with-explanation/

// Intuición
// Acercarse
// Primero verifica si el "encabezado" de la lista original es nulo. Si es así, la función devuelve nulo ya que no hay una lista para copiar.
// Inicializa una variable "curr" para hacer referencia a la "cabeza" de la lista original.
// Luego, el código pasa por dos bucles principales:
// En el primer bucle, inserta nuevos nodos entre los nodos originales creando un nuevo nodo (con el mismo valor que el nodo original), actualizando los siguientes punteros para vincular los nuevos nodos y avanzando el puntero "actual".
// En el segundo bucle, establece los punteros aleatorios de los nuevos nodos. Si el nodo original tiene un puntero aleatorio, establece el puntero aleatorio del nuevo nodo correspondiente al puntero aleatorio del siguiente nodo (ya que los nuevos nodos se insertan entre los nodos originales). El puntero "curr" se avanza a cada segundo nodo ya que los nuevos nodos están intercalados.
// Después de configurar los punteros aleatorios, el código procede a separar las listas enlazadas originales y duplicadas mientras restaura los punteros siguientes originales. Utiliza dos punteros, "original" y "duplicado", para recorrer ambas listas simultáneamente y ajustar los siguientes punteros en consecuencia.
// Finalmente, devuelve "duplicateHead", que representa el encabezado de la lista vinculada duplicada.

// Complejidad
// Complejidad del tiempo:O(N) donde n es el número de nodos en la lista original.
// Complejidad del espacio:O(N)ya que el código crea un nuevo nodo para cada nod


/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (!head) {
      return null; // If the original list is empty, return null
  }

  let curr = head;

  // Inserting new node between original nodes and setting next pointers
  while (curr) {
      let newNode = new Node(curr.val);
      newNode.next = curr.next;
      curr.next = newNode;
      curr = newNode.next;
  }

  curr = head;

  // Setting random pointers of the new nodes
  while (curr) {
      if (curr.random) {
          curr.next.random = curr.random.next;
      }
      curr = curr.next.next;
  }

  // Separate both linked lists and restore original next pointers
  let original = head;
  let duplicate = head.next;
  let duplicateHead = duplicate;

  while (original) {
      original.next = original.next.next;
      if (duplicate.next) {
          duplicate.next = duplicate.next.next;
      }
      original = original.next;
      duplicate = duplicate.next;
  }

  return duplicateHead;
};
