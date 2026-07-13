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
