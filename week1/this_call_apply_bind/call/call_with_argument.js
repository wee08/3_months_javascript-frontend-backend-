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
