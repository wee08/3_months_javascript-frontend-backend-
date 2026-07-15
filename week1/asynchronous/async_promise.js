// fetch("https://www.youtube.com/")
//   .then(function (response) {
//     return response.text();
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

let myPromise = new Promise(function (resolve, reject) {
  resolve("value");
  reject("value");
});
// resolve function to run if finishes sucessfully
// reject function to run if finishes with an error

// using promise
myPromise.then(
  function (value) {
    console.log("sucess");
  },
  function (value) {
    console.log("fail");
  },
);

let newPromise = new Promise(function (resolve, reject) {
  let success = false;
  if (success) {
    resolve("done");
  } else {
    reject("failed");
  }
});

myPromise.then(
  function (value) {
    console.log(value);
  },
  function (value) {
    console.log(value);
  },
);
