// ==========================================
// Understanding JavaScript Modules (ES Modules)
// ==========================================

// In HTML:
// <script type="module" src="./src/main.js"></script>
// Modules have two key features:
// 1. You don't need to use the `defer` attribute in the script tag.
//    - Modules are deferred by default, meaning they are executed after the document is parsed.
// 2. Modules automatically apply "use strict" in JavaScript, enforcing stricter parsing and error handling.

// ==========================================
// Importing and Exporting Modules in JavaScript
// ==========================================

/* --- Module: guiters.js --- */

// 1st Way: Import specific exports from the module
// If we export specific functions from the module, we can import them like this:

// Importing a default export (playGuiter)
import playGuiter from "./guiter.js";

// Importing named exports (shredding, plucking)
import { shredding as shred, plucking as fingerPicking } from "./guiter.js";

// Example usage:
console.log(playGuiter()); // Call the default exported function
console.log(shred()); // Call the named export 'shredding', renamed as 'shred'
console.log(fingerPicking()); // Call the named export 'plucking', renamed as 'fingerPicking'

// 2nd Way: Import all exports as a single object
// We can also import everything from a module as an object, which contains all the exported items as properties.

// Import all exports from guiters.js as a single object (Guiters)
import * as Guiters from "./06_module.guiter.js";

// Example usage:
// console.log(Guiters.playGuiter()); // This will cause an error because 'playGuiter' is a default export, not a named export.
// To access the default export in this case, we need to use `Guiters.default()`

console.log(Guiters.default()); // Correct usage for default export

// Another potential issue arises when importing two different modules that each have a default export.
// In this case, it could be confusing since default exports don't have a name to refer to directly.

console.log(Guiters.shredding()); // Accessing the named export 'shredding' from the module
console.log(Guiters.plucking()); // Accessing the named export 'plucking' from the module

/* --- Module: user.js --- */

// Importing a default export (User class) from user.js
import User from "./06_module.user.js";

// Create an instance of the User class
const me = new User("emai@emai.com", "hazrat");

// Example usage:
console.log(me); // Output the User object
console.log(me.sayHello()); // Call the method from the User class
