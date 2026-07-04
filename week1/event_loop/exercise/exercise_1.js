// exercise 1
console.log("1");

setTimeout(() => {
  console.log(2);
}, 0);
console.log("3");
// out put will be 1,3,2

// correction
// consol.log('1') runs on the call stack immediately
// setTimeout() is called. JS doesn't execute the callback itself it hands it off to a background API, this is not blocking, so JS move on right away
// console.log('3') runs on the call stack immediately
//  the main script is now empty
// only now does the event loop check the callback queue, see the timer's callback is ready, and push it onto the callback stack
