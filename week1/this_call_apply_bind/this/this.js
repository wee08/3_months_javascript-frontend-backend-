const person = {
  firstName: "Sean",
  lastName: "Manutnithya",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());
// this in defualt function
function myFunction() {
  return this;
}
console.log(myFunction());

// this in strict mode
("use strict");
function myFunction1() {
  return this;
}
console.log(myFunction1());

// this alone
let x = this;
console.log(x);
("use strict");
let y = this;
console.log(y);

// the gloable object si the top level object in a javascript environment
// - in browser, it is window
// - in nodejs it is global
// - in web workers it is self

// globalThis = window;
// globalThis = global;
