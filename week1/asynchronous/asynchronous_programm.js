// asynchronous js

function myDisplay(param) {
  console.log(param);
}
let x = 5;
let y = 3 * x;

console.log(y);

myDisplay("A");
myDisplay("B");
myDisplay("C");

// control flow
// run code base on order, top -> butom

// function sequence
// it runs in the sequence they are called, not the way they are defined

function myFirst() {
  myDisplay("Hello");
}
function mySecond() {
  myDisplay("Goodbye");
}
mySecond();
myFirst();

// blocking code
// while javascript is busy, it cannot respond to button clicks, keyboard input or other events

function wait() {
  let i = 2e9;
  while (--i > 0);
}
wait();
myDisplay("Done!");
