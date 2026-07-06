const person = {
  firstName: "Sean",
  sayHello: () => {
    return this.firtName;
  },
};

console.log(person.sayHello());
