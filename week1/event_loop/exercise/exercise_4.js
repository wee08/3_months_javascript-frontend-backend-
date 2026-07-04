async function foo() {
  console.log("1");
  await null;
  console.log("2");
}

console.log("3");
foo();
console.log("4");
// await null will be pause after log number 1
