import { AsyncResource } from "node:async_hooks";
import fs from "node:fs";
console.log("start");

setTimeout(() => console.log("SetTimeout"), 0);
setImmediate(() => console.log("setImmediate"));
process.nextTick(() => console.log("nextTick"));

Promise.resolve().then(() => console.log("promise"));

console.log("end");

// output: start,end, promise, nextTick, setImmediate, setTimeout
// nextTick jumps the queue ahead of even the promise microtask because JavaScript has two ties microtasks system. when the mian synchronous code finishes, node drains the nextTick queue before checking before the V8 Promise miecrotask queue

async function test() {
  return "Hello";
}
test().then(console.log);
