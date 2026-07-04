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
character.prototype.showStatus = function () {
  const name = this.name;
  const hp = this.hp;
  const level = this.level;
  return { name, hp, level };
};

function worrior(name, weapon, damage) {
  this.name = name;
  this.weapon = weapon;
  this.damage = damage;
}

const bob = new character("bob", 100, 10);
console.log(bob.attack(12));
console.log(bob.heal(10));
console.log(bob.showStatus());

const thor = new worrior("thor", "hammer", 40);
console.log(thor);
