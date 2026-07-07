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

const array = ["a", "b"];
const elements = [0, 1, 2];
// array.push.apply(array, elements);
console.log(array);

array.push(...elements);
console.log(array);
