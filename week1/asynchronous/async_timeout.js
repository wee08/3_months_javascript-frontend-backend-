// the setTimeout() method schedules a function to run after a delay in milliseconds. it is an async operation used to delay code execution withou freezing the browser

setTimeout(myFunction, 3000);
function myFunction() {
  console.log("setTimeout");
}
setTimeout(function () {
  myFunction1("setTimeout");
}, 3000);
function myFunction1(value) {
  console.log(value);
}
// when using the setInterval() method, you can specify function to be executed for each interval
setInterval(myFunction2, 1000);
function myFunction2() {
  let d = new Date();
  console.log(d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds());
}
