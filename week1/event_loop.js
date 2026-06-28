// const fs = require("node:fs");
import fs from "node:fs";

function someAsyncOperation(callback) {
  fs.readFile("./week1/to/read_file.csv", callback);
}

const timeoutSchedule = Date.now();
setTimeout(() => {
  const delay = Date.now() - timeoutSchedule;

  console.log(` ${delay}ms have passed since I was`);
}, 100);

someAsyncOperation(() => {
  const startCallback = Date.now();

  while (Date.now() - startCallback < 10) {}
});
