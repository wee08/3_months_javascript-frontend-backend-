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
// call() runs immediately, doesn't return resusable function
// What is the main difference between call() and a normal function call?
// the main difference is that a normal function call binds this to the object it is called on, while .call() allows you to manually pass and explicity set the this context. this lets you borrw method from one object and use them on completely different objects.