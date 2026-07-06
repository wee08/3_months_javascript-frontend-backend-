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
