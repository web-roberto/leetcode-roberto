// https://haticekaraty.medium.com/how-to-append-values-to-javascript-map-object-bd4a93478dc
// If char is already in the map, we will add chars all occurring indices. If charMap doesn't have the char in it, we add the char as the key and store its index in an array.
// So let's add our conditional to our loop:
// for(let i = 0; i < inputString.length; i++){
//     let char = inputString[i]
//         if(charMap.has(char)){
//            charMap.get(char).push(i)  
//         }else{
//            charMap.set(char, [i])
//         }
// }
// .get method returns the value of the key in the map. To reset/update/add a value, normally we use a set method. Since we use an array, we only need to get the array and push a new index since the value is passed back as a reference.

// Con el bucle usando set por 1ª vez creo esto:
// charMap ={
//   0:[0],
//   1:[1],
//   2:[2],
// }
// Cuando ya estiste el key añado elementos al array del valor con 'charMap.get(char).push(i)'
