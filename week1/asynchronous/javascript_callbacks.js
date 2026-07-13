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

// built-in synchronous callbacks
// we have: forEach(), map(), filter(), reduce() and sort() : callback called, non-asynchronous

// timing problem
let result1;
setTimeout(function () {
  result1 = 5;
}, 1000);
console.log(result1);

// the callback idea
// the solution to the problem above, is to give js a callback function to call after the result is ready, a callback is a function passed as an argument to another function, this technique allows a function to call another function

function done(value) {
  console.log(value);
}

setTimeout(function () {
  done(120);
}, 1000); // 120 cuz the callback run later before the timeout so the data can resign to the parameter

setTimeout(function () {
  console.log("Finished");
}, 1000);

// event handling
// call back are often used in javascript, especially in event handling: user interactions, such as button clicks or key presses, can be handled by providing a callback function to an event listener

// document.getElementById("myButton").addEventListener("click",displayDate);

// sequence control
// sometime you whould like to have better control over when to execute a function

function display(string) {
  console.log(string);
}
function myCalculation(a, b) {
  let sum = a + b;
  return sum;
}

let result2 = myCalculation(12, 12);
display(result2);
/*
summary
- callback function is a function passed to another function
- callbacks can be synchronous or asynchronous
- the callback itself does not make code asynchronous
- Many javascript methods use synchronous callback
- asynchronous APIs often use callbacks to handle results
- promises and async / await build on the same idea while making        asynchronous code easier to write

Callback is Not Asynchronous
A callback is just a function.
It may be called immediately (like map() or sort()).
It may be called later by an asynchronous API (like setTimeout() or fetch()).
The API (not the callback) is what introduces the asynchronous behavior.

*/
