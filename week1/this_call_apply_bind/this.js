const person = {
  firstName: "Sean",
  lastName: "Manutnithya",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());

function myFunction() {
  return this;
}
console.log(myFunction());
