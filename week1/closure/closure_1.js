import { count } from "node:console";

function outer() {
  let message = "hello";

  function inner() {
    console.log(message);
  }

  inner();
}
function createCounter() {
  let count = 0;
  function increment() {
    count++;
    console.log(`Count increased to ${count}`);
  }

  function getCount() {
    return count;
  }

  return { increment, count };
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`);
