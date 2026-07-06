function Person(first, last, age, eyeColor) {
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  this.eyeColor = eyeColor;

  this.personality = "khmer";
}

const myFather = new Person("Jonh", "Doe", 60, "Brown");
const myMother = new Person("San", "Rally", 40, "Green");

console.log(myFather);
myMother.skin = "white";

myMother.skin = "light brown";
console.log(myMother.skin);

// Person.height = 170; cannot add to constructor

console.log(myMother);

// add prototype to Person
Person.prototype.name = function () {
  return this.firstname + " " + this.lastname;
};

// Person.prototype.name = () => {
//   return this.firstname + " " + this.lastname;
// };

const myGirlfriend = new Person("Mey", "Kimheng", 20, "Light brown");

console.log(`She name is ${myGirlfriend.name()}`);
