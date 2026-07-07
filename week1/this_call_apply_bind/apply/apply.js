const numbers = [51, -10, 2, 4, 6];
const max = Math.max.apply(null, numbers);
console.log(max);
const min = Math.min.apply(null, numbers);
console.log(min);

// syntax
// apply(thisArg);
// apply(thisArg, argsArray);

// function wrapper() {
//   return anotherFn.apply(null, arguments);
// }
// function wrapper(...args) {
//   return anotherFn(...args);
// }

// Using apply() to append an array to another
const array = ["a", "b"];
const elements = [0, 1, 2];
// array.push.apply(array, elements);
console.log(array);

array.push(...elements);
console.log(array);

//Using apply() and built-in functions

const nums = [120, 22, 34, 68];
let max1 = Math.max.apply(null, nums);
let min1 = Math.min.apply(null, nums);

max1 = -Infinity;
min1 = Infinity;

for (const n of nums) {
  if (n > max1) {
    max1 = n;
  }
  if (n < min1) {
    min1 = n;
  }
}

console.log(max1);
console.log(min1);

function minOfArray(arr) {
  let min = Infinity;
  const QUANTUM = 32768;
  for (let i = 0; i < arr.length; i += QUANTUM) {
    const subMin = Math.min.apply(
      null,
      arr.slice(i, Math.min(i + QUANTUM, arr.length)),
    );
    min = Math.min(subMin, min);
  }
  return min;
}

const min2 = minOfArray([120, -1, 0, -0, 20, 10]);
console.log(min2);
