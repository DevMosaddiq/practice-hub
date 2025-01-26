// ==========================================
// Learn About Objects in Depth
// ==========================================

// ===== Objects and Their Properties =====
const person = {
  alive: true, // Boolean property
  firstName: "John", // String property
  lastName: "Doe", // String property
  hobbies: ["Sports", "Cooking"], // Array property
  beverage: {
    morning: "coffee", // Nested object property
    afternoon: "tea",
    evening: "wine",
  },
  age: 30, // Number property

  // Method: A function inside an object
  action: function () {
    return `Hello ${this.firstName}, Time for ${this.beverage.evening}`;
  },
};

// Example Usage:
console.log(person.action());
// Output: Hello John, Time for wine

// Explanation:
// - `this` refers to the object it belongs to (`person` in this case).
// - Nested objects are accessed using dot notation (e.g., `this.beverage.evening`).

// ===== Object Inheritance with Object.create =====
const vehicle = {
  wheels: 4, // Property of the base object
  engine: function () {
    return "Vroom!";
  },
};

// Create a new object `truck` that inherits from `vehicle`
const truck = Object.create(vehicle);
truck.doors = 2; // Add a new property specific to `truck`

console.log(truck); // Output: { doors: 2 }
console.log(truck.engine()); // Output: Vroom! (inherited from `vehicle`)

// Create another object `car` that inherits from `vehicle`
const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
  return "Woosh!"; // Override the inherited `engine` method
};

console.log(car.engine()); // Output: Woosh!

// Create `tesla` object inheriting from `vehicle` with its own method
const tesla = Object.create(vehicle);
tesla.engine = function () {
  return "Shhhh..."; // Custom behavior for `tesla`
};
console.log(tesla.engine()); // Output: Shhhh...

// Explanation:
// - `Object.create()` creates a new object and sets its prototype to the specified object.
// - This allows inheritance of properties and methods from the parent object.

// ===== Modifying and Deleting Object Properties =====
const band = {
  leadSinger: "Freddie Mercury",
  leadGuitar: "Brian May",
  bassist: "John Deacon",
  drummer: "Roger Taylor",
  keyboardist: "Freddie Mercury",
  rhythmGuitar: "Brian May",
};

// Delete the `drummer` property
delete band.drummer;

// Check if a property exists
console.log(band.hasOwnProperty("drummer")); // Output: false

// Iterate over all properties using a `for...in` loop
for (let role in band) {
  console.log(`On ${role}, it's ${band[role]}`);
}
// Example Output:
// On leadSinger, it's Freddie Mercury
// On leadGuitar, it's Brian May
// On bassist, it's John Deacon
// On keyboardist, it's Freddie Mercury
// On rhythmGuitar, it's Brian May

// ===== Destructuring Objects =====
// Destructuring allows you to extract specific properties from an object into variables.

const { leadGuitar, leadSinger, keyboardist, rhythmGuitar } = band;
console.log(leadGuitar); // Output: Brian May

// Example Usage in a Function:
function sings({ leadSinger }) {
  return `${leadSinger} sings!`;
}

console.log(sings(band)); // Output: Freddie Mercury sings!

// Explanation:
// - Destructuring provides a concise way to extract values from an object.
// - You can also destructure parameters directly in a function (e.g., `{ leadSinger }`).

// ===== Key Concepts Recap =====
// 1. **Object Properties and Methods**:
//    - Objects can store values (properties) and functions (methods).
//    - Use `this` inside methods to refer to the object itself.

// 2. **Inheritance with Object.create()**:
//    - `Object.create()` is used to create a new object with a prototype link to another object.
//    - Allows for property and method inheritance.

// 3. **Deleting and Checking Properties**:
//    - Use `delete` to remove a property from an object.
//    - Use `.hasOwnProperty()` to check if a property exists in an object.

// 4. **Destructuring**:
//    - Extract specific properties into variables.
//    - Can be used directly in function parameters for cleaner code.
