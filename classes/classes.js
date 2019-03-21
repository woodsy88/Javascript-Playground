class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    console.log(this.name + " is barking");
  }
}
let myDog = new Dog("Santos L Halper");
myDog.bark(); // Santos L Halper is barking


let dogOverlord = new Dog("Snuffles");
console.log(dogOverlord.name); // Snuffles



// CLASS METHODS

class SoftwareEngineer {
  doWork() {
    console.log("drinks caffeine and types code");
  }
}
let me = new SoftwareEngineer();
me.doWork(); // drinks caffeine and types code


// CLASS GETTERS / SETTERS
  // Classes can use get and set keywords as accessors/mutators to access variables on a class.


class Jedi {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._lightsaberColor = "Blue";
  }  
  get getName() {  return `${this._firstName} ${this._lastName}` };
  get lightsaberColor() { return this._lightsaberColor}
  set lightsaberColor(color) { this._lightsaberColor = color; }
}

let jedi = new Jedi("Luke", "Skywalker");
console.log(jedi.getName); // Luke Skywalker

jedi.lightsaberColor = "Green";
console.log(jedi.lightsaberColor); // Green



// INHERITANCE - EXTENDING CLASSES
  // allows you to pass down functions from a parent type to a child type


class Computer {
  constructor() {
    this.os = "No installed OS"
  }
  turnOn() { console.log( "You are turning me on" ); }
}
class Laptop extends Computer {
  constructor(os) {
    super();
    this.os = "Windows"
  }
}

let laptop = new Laptop("Windows");
console.log( laptop.os ); // Windows
laptop.turnOn(); // You are turning me on  