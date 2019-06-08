// Arrow Functions

// let name = "Elon Musk";

// const getFirstName = (name) => {
//   const fName = name.split(' ');
//   return fName[0];
// }

// const getFirstName = (name) => name.split(' ')[0];

// console.log(getFirstName(name));

// IMPORTANT: Arrow functions act like lambda functions. They cannot use arguments keyword,
//   this keyword or other arguments used in a class.
const user = {
  name: "Rohan",
  cities: ["Hyderabad", "New York", "Seattle"],
  printPlacesLived: function() {
    return this.cities.map((city) => this.name + " has lived in " + city);
  }
}

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 10,
  multiply: function(){
    return this.numbers.map((n) => n*this.multiplyBy);
  }
}


console.log(multiplier.multiply());
