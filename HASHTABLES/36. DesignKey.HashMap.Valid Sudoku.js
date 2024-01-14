
// Determine si un tablero de Sudoku de 9 x 9 es válido. Solo las celdas llenas deben validarse de acuerdo con las siguientes reglas: 
// Cada fila debe contener los dígitos del 1 al 9 sin repetición. 
// Cada columna debe contener los dígitos 1-9 sin repetición. 
// Cada uno de los nueve subcuadros de 3 x 3 de la cuadrícula debe contener los dígitos 1-9 sin repetición. 
// Nota: un tablero de Sudoku (parcialmente lleno) podría ser válido pero no necesariamente solucionable. Solo las celdas llenas deben validarse de acuerdo con las reglas mencionadas.

// Example 1
// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2
// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
// Podemos crear un conjunto hash para cada fila. Para tablero[r][c], verificamos si el número ya existe en el conjunto hash correspondiente a rthr^{th}r
// el
//    fila. En caso afirmativo, esta fila contiene un valor duplicado, por lo que el sudoku no es válido. En caso contrario, procederemos a comprobar la siguiente posición hasta terminar de escanear todo el tablero de sudoku. La misma lógica se puede aplicar a cada columna.

// La parte complicada es cuando comprobamos la validez de cada casilla. La pregunta es, dado el índice de fila r y el índice de columna c, ¿cómo asignar correctamente la posición a una de las 9 casillas?
// La primera observación es que, en cada columna, las filas 0, 1 y 2 pertenecen a la misma casilla, al igual que las filas 3, 4 y 5, y las filas 6, 7 y 8.

// ¿Qué tienen en común? Cada grupo de tres perteneciente a la misma caja tiene el mismo resultado cuando realizamos la división de enteros por tres. Por lo tanto, podemos usar r/3 (/ significa división de piso) para asegurarnos de que las filas se agrupen como se esperaba y usar c/3 para asegurarnos de que las columnas se agrupen correctamente. Luego, (r/3, c/3) puede marcar de forma única cada casilla, y podemos usar directamente la tupla como clave hash si queremos crear un conjunto hash para cada casilla.

// Alternativamente, podemos usar los números del 0 al 8 para representar estos cuadros, donde (r/3) * 3 + (c/3) se usa para calcular un número en el rango de 0 a 8. Es decir, el cuadrado ubicado en (r, c) pertenece a la caja (r/3) * 3 + (c/3).
// Observe que, leyendo de izquierda a derecha, los índices de las cajas son continuos de 0 a 8 y aumentarán primero por columna.

// Para cada fila, columna y cuadro, hay varias formas de almacenar los números que ya han aparecido hasta el momento. Aquí hay tres que usaremos en este artículo:

// Cree un conjunto hash para cada fila, columna y cuadro (consulte el Método 1 para obtener una ilustración).
// Cree una matriz de longitud 9 con valores 0 y 1 que representen los estados "no visto" y "visto anteriormente", respectivamente (consulte el Método 2 para obtener una ilustración).
// Utilice un número binario con un valor de 0 o 1 en cada posición que represente la aparición anterior de cada número (consulte el Método 3 para obtener una ilustración).
// Muchos problemas se pueden resolver usando conjuntos hash, matrices o números binarios para registrar números vistos anteriormente y, a continuación, mostraremos cómo se puede usar cada uno de estos métodos para ayudar a verificar la validez de un tablero de sudoku.

// Después de resolver este problema, puede practicar las técnicas anteriores en un problema similar (Encontrar ganador en un juego de Tic Tac Toe) o probar un problema de seguimiento más avanzado (Sudoku Solver).

// Intuición

// En un sudoku válido, cada fila, columna y cuadro contiene dígitos en el rango del 1 al 9 sin repetición. Para comprobar si el sudoku es válido, para cada número, debemos comprobar si ese número se repite en algún lugar de la misma fila, columna o casilla. Sin embargo, sería muy ineficiente leer toda la fila, la columna y el cuadro cada vez que verificamos si un número es un duplicado. En cambio, mientras iteramos sobre los números en el sudoku, podemos usar conjuntos hash para almacenar los números vistos anteriormente en cada fila, columna y cuadro. A través de conjuntos hash, podemos determinar si el número actual ya existe en la fila, columna o cuadro correspondiente en tiempo constante. A continuación se muestra un ejemplo de este proceso.

// Algoritmo

// Inicialice una lista que contenga 9 conjuntos hash, donde el conjunto hash en el índice r se usará para almacenar números vistos anteriormente en la fila r del sudoku. Del mismo modo, inicialice listas de 9 conjuntos de hash para realizar un seguimiento de las columnas y los cuadros también.

// Iterar sobre cada posición (r, c) en el sudoku. En cada iteración, si hay un número en la posición actual:

// Compruebe si el número existe en el conjunto hash para la fila, columna o cuadro actual. Si es así, devuelva falso, porque esta es la segunda aparición del número en la fila, columna o cuadro actual.

// De lo contrario, actualice el conjunto responsable de rastrear los números vistos anteriormente en la fila, columna y cuadro actual. El índice de la casilla actual es (r/3) * 3 + (c/3) donde / representa división de piso.
// Si no se encontraron duplicados después de que se visitaron todas las posiciones en el tablero de sudoku, entonces el sudoku es válido, así que devuelva verdadero

// Análisis de complejidad Sea N la longitud del tablero, que es 9 en esta pregunta. Tenga en cuenta que dado que el valor de N es fijo, la complejidad de tiempo y espacio de este algoritmo se puede interpretar como O(1). Sin embargo, para comparar mejor cada uno de los enfoques presentados, trataremos N como un valor arbitrario en el análisis de complejidad a continuación. Complejidad de tiempo: O(N^2)porque necesitamos atravesar cada posición en el tablero, y cada uno de los cuatro pasos de verificación es un O(1) operación.
// Complejidad del espacio: O(N^2) porque en el peor de los casos, si el tablero está lleno, necesitamos un conjunto hash cada uno con tamaño N para almacenar todos los números vistos para cada uno de los N filas, N columnas y N cajas, respectivamente.




class Solution {

  isValidSudoku(board) {
    // board es char[][]
      let N = 9;
      // Use hash set to record the status
      let rows=new Array(N)
      // row1 = new Set([0,0,0,0,0,0,0,0,0])
      let cols=new Array(N)
      // cols = new HashSet[N];
      let boxes=new Array(N)
      //boxes = new HashSet[N];
      for (let r = 0; r < N; r++) {
          rows[r] = new Set([]);
          cols[r] = new Set([]);
          boxes[r] = new Set([]);
      }

      for (let r = 0; r < N; r++) {
          for (let c = 0; c < N; c++) {
              const val = board[r][c];
              // Check if the position is filled with number
              if (val == '.') {continue;}
              // Check the row
              if (rows[r].has(val)) {
                return false;}
              rows[r].add(val);
              // Check the column
              if (cols[c].has(val)) {
                return false; }
              cols[c].add(val);
              // Check the box
              let idx = Math.floor(r / 3) * 3 + Math.floor( c / 3);
              if (boxes[idx].has(val)) {
                return false;}
              boxes[idx].add(val);
          }
      }
      return true;
  }
}
const board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];
const ans= new Solution()
console.log('---- the answer is ---',ans.isValidSudoku(board))