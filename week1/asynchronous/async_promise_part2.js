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

// const promise = new Promise(function (resolve, reject) {
//   let sucess = true;
//   if (sucess) {
//     resolve("value");
//   } else {
//     reject("error");
//   }
// });

// param
// resolve - fulfills the promise with a value,
// reject - rejects the promise with an error

const promise = new Promise(function (resolve, reject) {
  const success = false;

  if (success) {
    resolve("operation completed");
  } else {
    reject("operation failed");
  }
});
promise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.log(error);
  });

// then() method
// then() method registers a function that handles a fulfield promise

// fetch("fetch.txt")
//   .then(function (response) {
//     return response.text();
//   })
//   .then(function (text) {
//     console.log(text);
//   });
// catch() method
// catch() method registers a function that handles a rejected promise.

fetch("missig.com")
  .then(function (response) {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.text();
  })
  .then(function (text) {
    console.log(text);
  })
  .catch(function (error) {
    console.log(error.message);
  });
// finally() method
fetch("sth.com")
  .then(function (response) {
    return response.text();
  })
  .then(function (text) {
    console.log(text);
  })
  .catch(function (error) {
    console.log(error.message);
  })
  .finally(function () {
    console.log("Finished");
  });

// promise changing
function step1() {
  return Promise.resolve("A");
}
function step2(value) {
  return Promise.resolve(value + "B");
}
function step3(value) {
  return Promise.resolve(value + "C");
}
step1()
  .then(function (value) {
    return step2(value);
  })
  .then(function (value) {
    return step3(value);
  })
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.log(error);
  });

async function run() {
  try {
    const a = await step1();
    const b = await step2(a);
    const c = await step3(b);
    console.log(c);
  } catch (error) {
    console.log(error);
  }
}

run();
const url =
  "https://l.facebook.com/l.php?u=https%3A%2F%2Fvt.tiktok.com%2FZSXkK4vUF%2F%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExM0l1MjRENkEwUmM4SDVvbXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7IoQ08EUvMRhCj9BaLLrTHDlfx2efp_3bNigyH0KzOkDGzXh4x5YFhtRwV_g_aem_JMaFErPWvgm8D_02sf2SCA&h=AUAikTOmfyorin-zQdfULPQgTQyIEe5vF8yDXH1UPxAqFW-i2pBSZgVINHloWdEiz7givvfFNMn5tb5AYmlLYFPDC5Knwu8nAoNsLj7ox-_DtK-zcQC9PVVY74V-Im4";
fetch(url)
  .then(function (response) {
    return response.text();
  })
  .then(function (text) {
    console.log(text);
  })
  .catch(function (error) {
    console.log(error.message);
  })
  .finally(function () {
    console.log("Finished!");
  });

/*
summary
    - a promise represents the future result of an asynchronous operation
    - a promise is either pending, fulfilled, or rejected
    - then() registers fulfillment handlers.
    - catch() registers rejection handlers
    - finally() registers a handler that run when the Promise sattles
    - return Promises from then() to keep promise chains in the correct order
    - most javascript APIs, including fetch(), return Promises
*/
