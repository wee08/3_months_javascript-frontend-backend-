// Using bind() for Preserving this
const person = {
  firstName: "Jonh",
  lastName: "Doe",
  display: function () {
    return this.firstName + " " + this.lastName;
  },
};
person.display();
console.log(person.display());
