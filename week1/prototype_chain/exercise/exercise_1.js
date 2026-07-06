function character(name, hp, level) {
  this.name = name;
  this.hp = hp;
  this.level = level;
}
character.prototype.attack = function (attack_damage) {
  return (this.hp -= attack_damage);
};
character.prototype.heal = function (heal_hp) {
  return (this.hp += heal_hp);
};
character.prototype.warrior = function (weapon) {
  this.weapon = weapon;
};
character.prototype.human = function () {};

character.prototype.hero = function (damage, skill) {
  this.damage = damage;
  this.skill = skill;
};

character.prototype.showStatus = function () {
  const name = this.name;
  const hp = this.hp;
  const level = this.level;
  const weapon = this.weapon;
  return { name, hp, level, weapon };
};

const bob = new character("bob", 100, 10);
bob.warrior(null);
console.log(bob.attack(12));
console.log(bob.heal(10));
console.log(bob.showStatus());

const thor = new character("thor", 120, 10);
thor.warrior("Hammer");
console.log(thor.attack(30));
console.log(thor.heal(5));
console.log(thor.showStatus());

console.log(thor.showStatus());
