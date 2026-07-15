// creating a promise
// work flows
/* 
    step1()
        .then(step2)
        .then(step3)
        .then(display)
*/
// promise states
/*
    state
    pending - the operation has started but has not finished
    fulfield - the operation completed successfully
    rejected - the operation failed

    
    */
// let promise = fetch("fetch.txt");
// promise.then(function (response) {
//   return response.text();
// });

// console.log("js continue ... ");

const promise = new Promise(function (resolve, reject) {
  let sucess = true;
  if (sucess) {
    resolve("value");
  } else {
    reject("error");
  }
});

// param
// resolve - fulfills the promise with a value,
// reject - rejects the promise with an error
