function Person(first, last, age, eyeColor) {
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  this.eyeColor = eyeColor;
}
const myFather = new Person("Jonh", "Doe", 60, "Brown");
const myMother = new Person("San", "Rally", 40, "Green");

console.log(myFather);
myMother.skin = "white";

myMother.skin = "light brown";
console.log(myMother.skin);
