// JSON
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 32,
  job: "Software Engineer",
  hobbies: ["hiking", "reading", "watching movies"],
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
  hello: function () {
    console.log(
      `Hello, my name is ${this.firstName} ${this.lastName}. I am a ${this.job}.`
    );
  },
};
console.log(typeof person);

const personJSON = JSON.stringify(person); //JSON.stringify() ==> obj -> json [lost methods here]
// console.log(personJSON);
// console.log(typeof personJSON);

const recieveJSON = JSON.parse(personJSON); //JSON.parse() ==> obj <- json
// console.log(recieveJSON);
// console.log(typeof recieveJSON);
