//Diseñe un sistema de registro que reciba un flujo de mensajes junto con sus marcas
// de tiempo. Cada mensaje único solo debe imprimirse como máximo cada 10 segundos 
//(es decir, un mensaje impreso en la marca de tiempo t evitará que se impriman otros mensajes idénticos hasta la marca de tiempo t 10). Todos los mensajes vendrán en orden cronológico. Varios mensajes pueden llegar en la misma marca de tiempo. Implemente la clase Logger: Logger() Inicializa el objeto logger. bool shouldPrintMessage(int timestamp, string message) 
//Devuelve verdadero si el mensaje debe imprimirse en la marca de tiempo dada; de lo contrario, devuelve falso.

// All messages will come in chronological order. Several messages may arrive at the same timestamp.
// Implement the Logger class:// 
//  Logger() Initializes the logger object.
//  bool shouldPrintMessage(int timestamp, string message) Returns true if the message should be printed in the given timestamp, otherwise returns false.

// Ejemplo
// Input
// ["Logger", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage"]
// [[], [1, "foo"], [2, "bar"], [3, "foo"], [8, "bar"], [10, "foo"], [11, "foo"]]
// Output
// [null, true, true, false, false, false, true]

// Explanation
// Logger logger = new Logger();
// logger.shouldPrintMessage(1, "foo");  // return true, next allowed timestamp for "foo" is 1 + 10 = 11
// logger.shouldPrintMessage(2, "bar");  // return true, next allowed timestamp for "bar" is 2 + 10 = 12
// logger.shouldPrintMessage(3, "foo");  // 3 < 11, return false
// logger.shouldPrintMessage(8, "bar");  // 8 < 12, return false
// logger.shouldPrintMessage(10, "foo"); // 10 < 11, return false
// logger.shouldPrintMessage(11, "foo"); // 11 >= 11, return true, next allowed timestamp for "foo" is 11 + 10 = 21

//SOLUCIÓN:
//Se podría combinar la cola y la estructura de datos establecida en una tabla hash o diccionario, lo que nos brinda la capacidad de mantener todos los mensajes únicos en la cola, así como la capacidad de evaluar rápidamente la duplicación de mensajes en la configuración.
// La idea es que mantengamos una tabla hash/diccionario con el mensaje como clave y su marca de tiempo como valor. La tabla hash mantiene todos los mensajes únicos junto con la última marca de tiempo en que se imprimió el mensaje.

// ALGORITMO:
// - Inicializamos una tabla hash/diccionario para mantener los mensajes junto con la marca de tiempo.
// - A la llegada de un nuevo mensaje, el mensaje es elegible para imprimirse con cualquiera de las dos condiciones siguientes:
// 	caso 1). nunca hemos visto el mensaje antes.
// 	caso 2). hemos visto el mensaje antes, y se imprimió hace más de 10 segundos.
// - En los dos casos anteriores, actualizaríamos la entrada asociada con el mensaje en la tabla hash, con la marca de tiempo más reciente.

// Complejidad Temporal: O(1). La búsqueda y actualización de la tabla hash lleva un tiempo constante. 
// Complejidad espacial: O(M) donde M es el tamaño de todos los mensajes entrantes. Con el tiempo, la tabla hash tendrá una entrada para cada mensaje único que haya aparecido.

class Logger {
  /** Initialize your data structure here. */
   msgDict = new Map();

  //  constructor() {
  //    const msgDict = new Map();
  // }
  /**
   * Returns true if the message should be printed in the given timestamp, otherwise returns false.
   */
    shouldPrintMessage(timestamp, message) {
      console.log('----------- timestamp,',timestamp)
      console.log('----------- message,',message)
      if (!this.msgDict.has(message)) {
        this.msgDict.set(message, timestamp);
        return true;
      }
      const oldTimestamp = this.msgDict.get(message);
      if (timestamp - oldTimestamp >= 10) {
        this.msgDict.set(message, timestamp);
        return true;
      } else
        return false;
    }
  }
  const logger= new Logger()
  console.log(logger.shouldPrintMessage(1, "foo")) // return true, next allowed timestamp for "foo" is 1 + 10 = 11
console.log(logger.shouldPrintMessage(2, "bar")) // return true, next allowed timestamp for "bar" is 2 + 10 = 12
console.log(logger.shouldPrintMessage(3, "foo"))// 3 < 11, return false
console.log(logger.shouldPrintMessage(8, "bar")) // 8 < 12, return false
console.log(logger.shouldPrintMessage(10, "foo"))// 10 < 11, return false
console.log(logger.shouldPrintMessage(11, "foo"))// 11 >= 11, return true, next allowed timestamp for "foo" is 11 + 10 = 21
