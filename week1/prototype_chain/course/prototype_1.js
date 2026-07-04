const human = {
  kind: "Human",
};

const sina = Object.create(human);
sina.age = 20;
sina.kind;

const ben = Object.create(sina);

ben.age = 12;
ben.kind = "Human";
console.log(ben.age);

class Human {
  talk() {
    return "Talking";
  }
}

class SuperHuman extends Human {
  fly() {
    return "Flying ";
  }
}

const super_ben = new SuperHuman();
const noob_ben = new Human();

console.log(super_ben.fly());
console.log(super_ben.talk());

console.log(noob_ben.talk());
