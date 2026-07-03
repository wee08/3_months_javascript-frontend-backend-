// Fix this common closure problem
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Currently prints 3, 3, 3
  }, 100);
}
// Make it print 0, 1, 2 instead
