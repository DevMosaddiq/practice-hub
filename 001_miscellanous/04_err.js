// JS Error & Error handling
"use strict";

// ==-== Reference Error [Js cant catch the error]
// variable = "Jhon";
// console.log(variable); // output: jhon

// ==-== Syntax error [js catch the error]
// Object..create()

// ==-== typeError
const name = "Jhon";
// name  = "hazrat"

// ==-==
/**
 * Function to make an error
 * @description
 * This function makes an error for demonstration purposes.
 * @example
 * makeError();
 */
const makeError = () => {
  let attempt = 1;
  while (attempt <= 5) {
    try {
      /**
       * Throw an error if the attempt is odd
       * @description
       * We throw an error to demonstrate how to catch and handle errors.
       */
      if (attempt % 2 !== 0) {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      /**
       * Log the error
       * @description
       * In a real-world scenario, you would handle the error more gracefully.
       * For example, you could send an error report to a server, show a notification to the user, etc.
       */
      console.error(error.stack);
    } finally {
      /**
       * Increment the attempt
       * @description
       * Increment the attempt counter to loop through the while loop.
       */
      attempt++;
    }
  }
};

makeError();
