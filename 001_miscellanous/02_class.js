// ==========================================
// Factory Function and Classes in JavaScript
// ==========================================

// ===== Factory Function =====
// A Factory Function is a regular function that returns an object.
// It’s a simple way to create multiple similar objects without using a class.

function pizzaFactory(pizzaSize, pizzaType) {
  const crust = "original"; // Fixed crust type for all pizzas.
  const size = pizzaSize;

  return {
    pizzaType, // Shorthand for pizzaType: pizzaType
    bake: () =>
      `Baking a ${size} pizza with ${crust} crust of type ${pizzaType}`,
  };
}

// Example Usage:
const myFactoryPizza = pizzaFactory("small", "pepperoni");
console.log(myFactoryPizza.bake()); // Output: Baking a small pizza with original crust of type pepperoni

// Key Points:
// - No `new` keyword is required.
// - Easy to create multiple objects with shared logic.
// - Lacks inheritance or private properties compared to classes.

// ===== Classes =====
// Classes are blueprints for creating objects. They allow for structured and reusable code,
// including private properties, getters, setters, and inheritance.

class Pizza {
  // Public property (available to all instances)
  crust = "original";

  // Private properties (denoted by `#`, accessible only within the class)
  #sauce = "traditional sauce";
  #size;

  // Constructor: Initializes new objects with specific properties.
  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }

  // Getter for the crust
  getCrust() {
    return this.crust;
  }

  // Setter for the crust
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }

  // Method to describe the pizza
  hereYouGo() {
    return `Baking a ${this.#size} pizza with ${this.crust} crust and ${
      this.#sauce
    } sauce`;
  }
}

// Example Usage:
const myClassPizza = new Pizza("large"); // Create a new pizza object
console.log(myClassPizza.hereYouGo()); // Output: Baking a large pizza with original crust and traditional sauce

// Setting and getting crust value using methods
myClassPizza.setCrust("stuffed crust");
console.log(myClassPizza.getCrust()); // Output: stuffed crust

// ===== Classes with Inheritance =====
// Inheritance allows a child class to inherit properties and methods from a parent class.

class SpecialtyPizza extends Pizza {
  // Additional property for specialty pizzas
  toppings;

  constructor(pizzaSize, toppings) {
    super(pizzaSize); // Call the constructor of the parent class
    this.toppings = toppings; // Initialize the toppings property
  }

  // Overriding the parent class method
  hereYouGo() {
    return `Baking a ${this.getCrust()} pizza with ${this.toppings.join(
      ", "
    )} toppings and traditional sauce`;
  }
}

// Example Usage:
const mySpecialtyPizza = new SpecialtyPizza("medium", [
  "cheese",
  "olives",
  "pepperoni",
]);
console.log(mySpecialtyPizza.hereYouGo()); // Output: Baking a original pizza with cheese, olives, pepperoni toppings and traditional sauce

// Setting crust for the specialty pizza
mySpecialtyPizza.setCrust("thin crust");
console.log(mySpecialtyPizza.hereYouGo()); // Output: Baking a thin crust pizza with cheese, olives, pepperoni toppings and traditional sauce

// =======================
// Explanation of `extends` and `super`
// =======================

// 1. `extends`:
//    - The `extends` keyword is used to create a child class that inherits from a parent class.
//    - The child class gets access to all public and protected properties and methods of the parent class.

// 2. `super`:
//    - The `super` keyword is used to call the constructor or methods of the parent class.
//    - In the child class constructor, `super()` must be called before accessing `this`.

// 3. Method Overriding:
//    - Child classes can override methods from the parent class by defining a method with the same name.
//    - The child class can still use the parent class's methods by calling `super.methodName()`.

// ===== Factory Function vs Classes: Key Differences =====
// 1. Factory Functions:
//    - Simple and flexible for creating objects.
//    - No `new` keyword is needed.
//    - No built-in inheritance (requires manual implementation).
//    - Good for lightweight object creation.

// 2. Classes:
//    - Provide built-in inheritance using `extends` and `super`.
//    - Support private fields (`#`) for data encapsulation.
//    - Require the `new` keyword to create instances.
//    - Ideal for creating complex, structured, and reusable systems.

// ===== Summary =====
// - Use Factory Functions for simple object creation and logic.
// - Use Classes for more structured, reusable, and extensible code.
