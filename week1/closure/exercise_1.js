// Create a function that returns another function which increments a counter
// Each time you call the returned function, it should increase by 1

function createCounter() {
  let count = 0;
  function increment() {
    count++;
    return count;
  }
  return increment;
}

const counter = createCounter();
console.log(counter()); // Should output: 1
console.log(counter()); // Should output: 2
console.log(counter()); // Should output: 3
