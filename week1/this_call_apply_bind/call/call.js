const person1 = { name: "Jonh" };
const person2 = { name: "Paul" };
const person3 = { name: "Ringo" };

function greet(greeting) {
  return greeting + " " + this.name;
}
const greet1 = greet.call(person1, "Hello");
console.log(greet1);

// borrowing another method from another object

const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person4 = {
  firstName: "Sean",
  lastName: "Manutnithya",
};
const person5 = {
  firstName: "Marry",
  lastName: "Doe",
};

console.log(person.fullName.call(person4));
console.log(person.fullName.call(person5));
