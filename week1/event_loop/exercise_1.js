import fs from "node:fs";

console.log("start");

setTimeout(() => {
  console.log("timeout outside");

  process.nextTick(() => {
    console.log("nextTick inside timeout");
  });

  Promise.resolve().then(() => {
    console.log("promise inside timeout");
  });
}, 0);

setImmediate(() => {
  console.log("immediate outside");

  process.nextTick(() => {
    console.log("nextTick inside immediate");
  });

  Promise.resolve().then(() => {
    console.log("promise inside immediate");
  });
});

fs.readFile(import.meta.filename, () => {
  console.log("readFile callback");

  setTimeout(() => {
    console.log("timeout inside readFile");
  }, 0);

  setImmediate(() => {
    console.log("immediate inside readFile");
  });

  process.nextTick(() => {
    console.log("nextTick inside readFile");
  });

  Promise.resolve().then(() => {
    console.log("promise inside readFile");
  });
});

process.nextTick(() => {
  console.log("nextTick outside");
});

Promise.resolve().then(() => {
  console.log("promise outside");
});

console.log("end");
