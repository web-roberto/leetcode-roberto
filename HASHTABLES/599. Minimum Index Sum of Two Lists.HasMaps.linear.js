// We make use of a HashMap to solve the given problem in a different way in this approach. Firstly, we traverse over the whole list1 and create an entry for each element of list1list1list1 in a HashMap mapmapmap, of the form (list[i],i). Here, iii refers to the index of the ithi^{th}i 
// th
//   element, and list[i] is the ithi^{th}i 
// th
//   element itself. Thus, we create a mapping from the elements of list1list1list1 to their indices.

// Now, we traverse over list2list2list2. For every element ,list2, of list2 encountered, we check if the same element already exists as a key in the mapmapmap. If so, it means that the element exists in both list1 and list2. Thus, we find out the sum of indices corresponding to this element in the two lists, given by sum=map.get(list[j])+jsum = map.get(list[j]) + jsum=map.get(list[j])+j. If this sumsumsum is lesser than the minimum sum obtained till now, we update the resultant list to be returned, resresres, with the element list2[j] as the only entry in it.

// If the sumsumsum is equal to the minimum sum obtained till now, we put an extra entry corresponding to the element list2[j] in the resresres list.

//Complejidad del tiempo: O(l1 l2)O(l_1 l_2)O(l 1 ​ l 2 ​ ). Cada elemento de list2 se verifica en un mapa 
//de list1list1list1. l1l_1l 1 y l2l_2l 2 son las longitudes de list1 y list2 respectivamente. 
//Complejidad del espacio: O(l1∗x)O(l_1*x)O(l 1 ​ ∗x). el tamaño del hashmap crece hasta l1∗xl_1*xl 1 ​ ∗x, donde xxx se refiere a la longitud promedio de la cadena

let fn = (list1,list2) => {
      map = new Map();
      for (let i = 0; i < list1.length; i++) map.set(list1[i], i);
      console.log('map-----',map)

          res = new Array();
          let min_sum = Number.MAX_SAFE_INTEGER;
          let sum;

      for (let j = 0; j < list2.length && j <= min_sum; j++) {
        console.log('---j---',j)
        console.log('---- for---list2[j]',list2[j])

        console.log('---- for---map.get(list2[j]',map.get(list2[j]))

          if (map.get(list2[j])) {
              sum = j + map.get(list2[j]);
              if (sum < min_sum) {
                  res.length=0;
                  //res.splice(0,res.length);
                  res.push(list2[j]);
                  min_sum = sum;
              } else if (sum == min_sum)
                  res.push(list2[j]);
          }
          console.log('----res--,',res)
      }
      const resultat= new String(res.length);
      console.log('resultat-----',resultat)
      return resultat.split("")
  }
  // Input: list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
  // Output: ["sad","happy"]
  // Explanation: There are three common strings:
  // "happy" with index sum = (0 + 1) = 1.
  // "sad" with index sum = (1 + 0) = 1.
  // "good" with index sum = (2 + 2) = 4.
  // The strings with the least index sum are "sad" and "happy".
  //console.log(fn(list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]))
  console.log(fn(list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]))

