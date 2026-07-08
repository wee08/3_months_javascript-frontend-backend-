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

// bind() does not change the original function

const greetJonh = greet.bind({ name: "jonh" });
const greetNanan = greet.bind({ name: "Nana" });
// note
// common mistake
// expected bind() to calls the function bind() does not execute the function
// forgetting to call the returned function, you must call the new function yourself
// overusing bind(), sometimes a normal function call is simpler
