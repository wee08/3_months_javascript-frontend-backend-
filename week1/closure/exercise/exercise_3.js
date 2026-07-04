// Create a function that returns another function which multiplies by a specific number
function multiplyBy(multiplier) {
  function multiply(number) {
    return number * multiplier;
  }
  return multiply;
}

const double = multiplyBy(2);
const triple = multiplyBy(3);
console.log(double(5)); // Should output: 10
console.log(triple(4)); // Should output: 12
