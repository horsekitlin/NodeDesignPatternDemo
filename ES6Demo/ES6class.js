class Person {
  constructor(name) {
    this.name = name;
    this.canTalk = true;
  }
  greet() {
    if (this.canTalk) {
      console.log(`Hi, I am ${this.name}`);
    }
  }
}

class Employee extends Person {
  constructor(name, title) {
    super(name);
    this.title = title;
  }

  greet() {
    if (this.canTalk) {
      console.log(`Hi I am ${this.name}, the ${this.title}`);
    }
  }
}

class Customer extends Person {
  constructor(name) {
    super(name);
  }
}

class Mime extends Person {
  constructor(name) {
    super(name);
    this.canTalk = false;
  }

}

const bob = new Employee('Bob', 'Builder');
var joe = new Customer('Joe');
var rg = new Employee('Red Green', 'Handyman');
var mike = new Customer('Mike');
var mime = new Mime('Mime');

bob.greet();
// Hi, I am Bob, the Builder

joe.greet();
// Hi, I am Joe

rg.greet();
// Hi, I am Red Green, the Handyman

mike.greet();
// Hi, I am Mike

mime.greet();