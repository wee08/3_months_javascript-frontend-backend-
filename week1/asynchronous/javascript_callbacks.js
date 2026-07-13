// a callback is a function passed as an argument to another function.
// the recieving function decides when to use (call) the callback.
// callback make functions more flexible

function greet(name, callback) {
  callback("hello " + name);
}
function display(message) {
  console.log(message);
}
greet("Jonh", display);
// the display function is the callback
// greet() function decides when to call it

function calculate(x, y, operation) {
  return operation(x, y);
}
function add(a, b) {
  return a + b;
}
let result = calculate(3, 4, add);
console.log(result);
