console.log("start");
setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise 1"));
Promise.resolve().then(() => console.log("promise 2"));

console.log("end");

// ouput : start -> end -> promise 1 -> promise 2 -> timeout
// both promise log before the timeout, even though everthing was schedule around the same time because Promise is a microtask. it continuesly creating promises without allowing macrotask to run can stave the event loop
