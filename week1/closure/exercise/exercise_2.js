// Create a function that returns an object with methods to get and set a private variable

function createPerson(name) {
  let _name = name;
  return {
    getName: function () {
      return _name;
    },
    setName: function (newName) {
      _name = newName;
      return _name;
    },
  };
}

const person = createPerson("John");

console.log(person.getName());
console.log(person.setName("Ashaa"));
