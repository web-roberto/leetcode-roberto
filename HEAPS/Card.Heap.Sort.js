class Solution {
  heapSort(arr) {
      for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
          this.maxHeapify(arr, arr.length, i);
      }
      for (let i = arr.length - 1; i > 0; i--) {
          let temp = arr[i];
          arr[i] = arr[0];
          arr[0] = temp;
          this.maxHeapify(arr, i, 0);
      }
      return arr;
  }
  maxHeapify(arr, heapSize, index) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let largest = index;
      if (left < heapSize && arr[left] > arr[largest]) {
          largest = left;
      }
      if (right < heapSize && arr[right] > arr[largest]) {
          largest = right;
      }
      if (largest !== index) {
          let temp = arr[index];
          arr[index] = arr[largest];
          arr[largest] = temp;
          this.maxHeapify(arr, heapSize, largest);
      }
  }
}
 const ans = new Solution()
 const array=[7,3,2,5,6,10,9,8,1] //en leverOder para cargar en Arbol Binario
 console.log(ans.heapSort(array))
 