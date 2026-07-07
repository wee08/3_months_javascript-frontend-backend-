// call() with argument
const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + " " + city + " " + country;
  },
};
const person1 = {
  firstName: "Jonh",
  lastName: "Doe",
};
const dara = person.fullName.call(person1, "Dara", "limg");
console.log(dara);
// call() vs normal function call
function showName() {
  return this.name;
}
const person2 = { name: "jonh" };
showName();
console.log(showName.call(person2));

// call() does not create a new function
function sayHello() {
  return "hello " + this.name;
}
const person3 = { name: "joson" };
console.log(sayHello.call(person3));
