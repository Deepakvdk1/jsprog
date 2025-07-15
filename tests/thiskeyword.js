function show() {
  console.log(this);
}
show(); 
function greet(greeting) {
  console.log(`${greeting}, I am ${this.name}`);
}

const person = { name: "Alice" };

greet.call(person, "Hello");// call
greet.apply(person, ["Hi"]); //apply arguments are passed as array
const greetPerson = greet.bind(person, "Hey"); // bind it can be stored into a variable and later invoked 
greetPerson();