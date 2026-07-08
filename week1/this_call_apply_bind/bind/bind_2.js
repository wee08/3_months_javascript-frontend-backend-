// Using bind() for Preserving this
const person = {
  firstName: "Jonh",
  lastName: "Doe",
  display: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};
person.display();
console.log(person.display());

setTimeout(person.display, 3000);
