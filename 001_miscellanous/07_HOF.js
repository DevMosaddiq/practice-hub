import posts from "../../001_miscellanous/07_HOF.posts.json";
// ==========================================
// High Order Functions (HOFs)
// ==========================================

// A Higher-Order Function (HOF) is a function that:
// 1. Takes one or more functions as arguments
// 2. Returns a function as its result
// 3. Takes a function as an argument and returns a function
//
// Common JavaScript methods such as `forEach()`, `map()`, `filter()`, and `reduce()` are examples of Higher-Order Functions.

// ==========================================
// 1. forEach() - Iterates over an array and applies a function to each element
// ==========================================
/**
 * The `forEach()` method executes a provided function once for each array element.
 * It does not return anything and simply performs a side effect like logging or modifying external variables.
 *
 * Syntax:
 * array.forEach(callback(currentValue, index, array) {
 *    // Code to execute on each element
 * });
 *
 * - `currentValue`: The current element being processed.
 * - `index`: (Optional) The index of the current element.
 * - `array`: (Optional) The array that `forEach` is being applied to.
 */

// Using forEach to log each post
posts.forEach((post) => {
  console.log(post); // Prints each post object
});

console.clear();

// ==========================================
// 2. filter() - Creates a new array with elements that pass the provided test (predicate function)
// ==========================================
/**
 * The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.
 * It returns a new array and does not modify the original array.
 *
 * Syntax:
 * array.filter(callback(currentValue, index, array) {
 *    return condition; // `true` keeps the element, `false` filters it out
 * });
 *
 * - `currentValue`: The current element being processed.
 * - `index`: (Optional) The index of the current element.
 * - `array`: (Optional) The array that `filter()` is applied to.
 */

// Filter posts where userId is 10
const filteredPost = posts.filter((post) => {
  return post.userId === 10; // Returns only posts where userId is 10
});

console.log(filteredPost); // Output the filtered posts

// ==========================================
// 3. map() - Creates a new array with the results of calling a function on every element in the array
// ==========================================
/**
 * The `map()` method creates a new array with the results of calling a provided function on each element.
 * It does not modify the original array.
 *
 * Syntax:
 * array.map(callback(currentValue, index, array) {
 *    return transformedValue;
 * });
 *
 * - `currentValue`: The current element being processed.
 * - `index`: (Optional) The index of the current element.
 * - `array`: (Optional) The array being processed.
 */

// Mapping the filtered posts to multiply each post ID by 10
const mappedPosts = filteredPost.map((post) => {
  return post.id * 10; // Multiply each post ID by 10
});

console.log(mappedPosts); // Output the mapped post IDs

// ==========================================
// 4. reduce() - Applies a function against an accumulator and each element in the array to reduce it to a single value
// ==========================================
/**
 * The `reduce()` method applies a function to an accumulator and each element in the array to reduce it to a single value (like summing or averaging).
 * The first parameter of `reduce()` is the callback function, and the second is the initial value of the accumulator.
 *
 * Syntax:
 * array.reduce(callback(accumulator, currentValue, index, array), initialValue);
 *
 * - `accumulator`: The accumulated value returned from the last callback call.
 * - `currentValue`: The current element being processed.
 * - `index`: (Optional) The index of the current element.
 * - `array`: (Optional) The array that `reduce()` is being applied to.
 * - `initialValue`: (Optional) The initial value of the accumulator.
 */

// Using reduce to sum all mapped post IDs
const reducedPost = mappedPosts.reduce(
  (acc, post) => {
    return acc + post; // Sum all the mapped post IDs
  },
  0 // Starting value for accumulator (sum starts at 0)
);

console.log(reducedPost); // Output the total sum of mapped post IDs

// ==========================================
// Summary of Higher-Order Functions:
// ==========================================
// 1. `forEach()`: Iterates through each element of the array, but does not return anything. Used for side effects like logging or modifying external variables.
// 2. `filter()`: Creates a new array with elements that pass a specified condition. It does not modify the original array.
// 3. `map()`: Creates a new array by applying a transformation function to each element in the array.
// 4. `reduce()`: Reduces the array to a single value by applying a function on each element and accumulating the result.
