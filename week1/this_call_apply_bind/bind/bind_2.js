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

// bind() with argument

function multiply(a, b) {
  return a * b;
}
const double = multiply.bind(null, 2);
console.log(double(5));
