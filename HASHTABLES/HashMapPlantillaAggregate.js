// Otro escenario frecuente es agregar toda la información por clave. También podemos usar un mapa hash para lograr este objetivo.
// EJEMPLO: Dada una cadena, encuentre el primer carácter que no se repite y devuelva su índice. Si no existe, devuelve -1.
// Una forma sencilla de resolver este problema es contar primero la aparición de cada carácter. Y luego revise los resultados para descubrir el primer carácter único. Por tanto, podemos mantener un hashmap cuya clave sea el carácter mientras que el valor sea un contador para el carácter correspondiente. Cada vez que iteramos un carácter, simplemente sumamos el valor correspondiente en 1.

/*
 * Template for using hash map to find duplicates.
 * Replace ReturnType with the actual type of your return value.
 */
let fn = keys => {

  // Replace Type and InfoType with actual type of your key and value
  hashmap = new Map();
  for (let key of keys) {
      if (hashmap.get(key)) {
          hashmap.set(key, updated_information);
      }
      // Value can be any information you needed (e.g. index)
      hashmap.put(key, value);    
  }
  return needed_information;
}