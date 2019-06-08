// Practice file

class Person {
  constructor(name, age=0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return "Hello. My name is " + this.name;
  }

  getDescription() {
    return this.name + " is " + this.age + " years old!";
  }
};

class Traveller extends Person {
  constructor(name, age, address) {
    super(name, age);
    this.address = address;
  }

  getGreeting() {
    const firstClause = super.getGreeting();
    return firstClause + ". I am returning from " + this.address + ".";
  }
}

const me = new Traveller("Rohan", 0, "New York");
console.log(me.getGreeting());
