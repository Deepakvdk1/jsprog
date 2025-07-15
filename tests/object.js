const person = {
  name: "Deepak",
  age: 30,
  greet: function () {
    console.log(`Hi, I'm ${this.name}`);
  }
};
const additionalInfo = { city: "Mumbai" };
const updatedPerson = Object.assign({}, person, additionalInfo);
updatedPerson.greet()
console.log(Object.entries(updatedPerson)); //gives array of entries 
console.log(Object.keys(updatedPerson));// gives array of keys 
console.log(Object.values(updatedPerson)); // gives array of values
// console.log(updatedPerson.hasOwnProperty("name")) //checks the key value is present 
// Object.freeze(updatedPerson)
// const newobj=Object.assign({},updatedPerson)
// console.log(Object.entries(newobj))
// function createUser(name, age) {
//   return {
//     name,
//     age,
//     greet() {
//       console.log(`Hi, I'm ${name}`);
//     }
//   };
// }

//const user4 = createUser("Deepak", 30);
const user5 = createUser("vinith", 30);
//console.log(user5);
//object to array 
