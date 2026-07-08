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

// comparison

// call a function
console.log(greet.call(person1));
console.log(greet.apply(person1));
const greetLater = greet.bind(person1);

greetLater();
console.log(greetLater());

// bind() for function called later

const cat = {
  name: "Leo",
  sayHello: function () {
    return "HELLO " + this.name;
  },
};

const hello = cat.sayHello;
hello();
console.log(hello());
