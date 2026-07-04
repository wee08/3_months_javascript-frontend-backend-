console.log("A");

setTimeout(() => console.log("B"));

Promise.resolve()
  .then(() => {
    console.log("C");
  })
  .then(() => {
    console.log("D");
  });
Promise.resolve().then(() => console.log("E"));

console.log("F");

// output: A,F,C,E,D,B
// Thereforce E log before D
// the reasono is when the promise run at the first round it log only C then F so the second then() of the first promise was undefined. then and the second roun it will log the second then() of first promise
