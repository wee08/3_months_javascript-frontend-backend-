const person1 = { name: "Jonh" };
const person2 = { name: "Doe" };
const person3 = { name: "Ringo" };
function greet(greeting) {
  return greeting + " " + this.name;
}
// const greetMessages = ["whats up", "Hello", "Hi"];
const greetMessages = ["whats up"];
console.log(greet.apply(person3, greetMessages));

// call vs apply

console.log(greet.call(person1, "sup"));
console.log(greet.apply(person1, ["sup"]));
// call passes arguments seperately
// apply passes arguments as an arrasy
