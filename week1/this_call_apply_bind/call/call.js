const person1 = { name: "Jonh" };
const person2 = { name: "Paul" };
const person3 = { name: "Ringo" };

function greet(greeting) {
  return greeting + " " + this.name;
}
const greet1 = greet.call(person1, "Hello");
console.log(greet1);
