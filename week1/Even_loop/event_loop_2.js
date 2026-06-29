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
