import fs from "node:fs";

// timeout vs immediate
setTimeout(() => {
  console.log("timeout");
}, 0);
setImmediate(() => {
  console.log("Immediate");
});

// timeout vs immediate
fs.readFile(import.meta.filename, () => {
  setTimeout(() => {
    console.log("timeout");
  }, 0);
  setImmediate(() => {
    console.log("immediate");
  });
});

console.log("1. Start");

// Next tick queue
process.nextTick(() => console.log("2. Next tick"));

// Microtask queue (Promise)
Promise.resolve().then(() => console.log("3. Promise"));

// Timer phase
setTimeout(() => console.log("4. Timeout"), 0);

// Check phase
setImmediate(() => console.log("5. Immediate"));

console.log("6. End");
