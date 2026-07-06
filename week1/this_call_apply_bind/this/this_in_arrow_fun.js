const person = {
  firstName: "Sean",
  sayHello: () => {
    return this.firtName;
  },
};

console.log(person.sayHello());

const person_1 = {
  firstName: "Sean",
  sayHello: function () {
    return () => this.firstName;
  },
};

let hello = person_1.sayHello();
console.log(hello());
