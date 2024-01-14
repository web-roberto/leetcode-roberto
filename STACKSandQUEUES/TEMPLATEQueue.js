(function main() {
  let queue = [];
  
  queue.push(1);
  queue.push(2);
  queue.push(3);
  
  while (queue.length) {
      console.log(queue.shift());
  }
  
  if (!queue.length) {
      console.log("Queue is empty!");
  }
}());