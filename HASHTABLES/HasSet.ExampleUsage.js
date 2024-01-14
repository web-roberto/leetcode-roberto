// "static void main" must be defined in a public class.
let fn = () => {

      // 1. initialize the hash set
      hashSet = new Set();     
      // 2. add a new key
      hashSet.add(3);
      hashSet.add(2);
      hashSet.add(1);
      // 3. remove the key
      hashSet.delete(2);        
      // 4. check if the key is in the hash set
      if (!hashSet.has(2)) {
         console.log('key: 2 is not in the hast set')
      }
      // 5. get the size of the hash set
      console.log("The size of has set is: " + hashSet.size);     
      // 6. iterate the hash set

      const iterator1 = hashSet.entries();
      //const iterator1 = hashSet.values();
      //const iterator1 = hashSet.keys();



      for (const entry of iterator1) {
        console.log(entry);
        console.log('key:',entry[0]);
        console.log('value:',entry[1]);

        // Expected output: Array [42, 42]
        // Expected output: Array ["forty two", "forty two"]
      }

      console.log("are in the hash set.");
      // 7. clear the hash set
      hashSet.clear();
      // 8. check if the hash set is empty
      if (hashSet.size===0) {
        console.log("hash set is empty now!");
      }
  }
  console.log(fn())
