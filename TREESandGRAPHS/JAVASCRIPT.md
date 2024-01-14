//https://love2dev.com/blog/javascript-remove-from-array/
Hacer cosas en JS que se hacen en Java

** Eliminación de elementos de matriz por valor mediante empalme
Si conoce el valor que desea eliminar de una matriz, puede usar el método de empalme. Primero debe identificar el índice del elemento de destino. Luego usa el índice como el elemento de inicio y elimina solo un elemento.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    
    for( var i = 0; i < arr.length; i++){ 
        if ( arr[i] === 5) { 
            arr.splice(i, 1); 
        }
    }
    //=> [1, 2, 3, 4, 6, 7, 8, 9, 0]