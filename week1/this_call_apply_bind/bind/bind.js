// const newFunction = functionName.bind(this,arg1,arg2,...);

// using bind() to fix this
const person1 = { name: "Jonh" };
const person2 = { name: "Dara" };
const person3 = { name: "Heng" };
function greet() {
  return "HELLO " + this.name;
}
const greetJonh = greet.bind(person1);
greetJonh();
console.log(greetJonh());

// create person object
const person = {
  firstName: "Jonh",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// create member object
const member = {
  firstName: "Hega",
  lastName: "Nilsen",
};
// bind the fullName method to the memeber Object
let fullName = person.fullName.bind(member);
// call function name
fullName();
console.log(fullName());

// bind() vs call() vs apply()
// the different between these methods is important:
// call() calls a function immediately
// apply() calls a function immediately
// bind() return new functoin
