// ==========================================
// Fetch API: Callbacks, Promises, Thenables, and Async/Await
// ==========================================

// ================================
// 1. Callbacks
// ================================

// A callback is a function passed into another function as an argument
// and is executed when a certain condition is met or an event occurs.

// Example of a basic callback function:
function firstFunction(param, callback) {
  // Perform some action
  callback(); // Call the callback function once the action is complete
}

// Example of "Callback Hell" where multiple callbacks are nested inside each other:
// firstFunction(param, () => {
//   secondFunction(param, () => {
//     thirdFunction(param, () => {
//       // Perform some action in the innermost callback
//     });
//   });
// });

// Callbacks can make code hard to read and manage, especially when dealing with complex async operations.

// ================================
// 2. Promises
// ================================

// Promises are objects that represent the eventual completion or failure of an asynchronous operation.
// A promise has three states: `PENDING`, `FULFILLED`, and `REJECTED`.

const myPromise = new Promise((resolve, reject) => {
  const err = false;
  if (!err) {
    resolve("Yes! It worked"); // Resolves the promise when the operation is successful
  } else {
    reject("No! It didn't work"); // Rejects the promise if an error occurs
  }
});

// Example of a resolved promise:
myPromise
  .then((result) => {
    console.log(result); // Logs "Yes! It worked"
  })
  .catch((err) => {
    console.log(err); // If rejected, logs "No! It didn't work"
  });

// A Promise can be chained, meaning you can perform multiple asynchronous operations one after the other.

const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("my next promise resolved"); // Resolves after 2 seconds
  }, 2006);
});

// Chaining Promises
myNextPromise.then((result) => console.log(result)); // Logs after 2006ms
myPromise.then((result) => console.log(result)); // Logs immediately

// ================================
// 3. Thenables
// ================================

// A Thenable is any object that has a `then()` method, which can be chained with `.then()`.
// The `then()` method executes when the promise is fulfilled or rejected.

myPromise
  .then((result) => result + 1) // Adds 1 to the resolved value
  .then((newResult) => console.log(newResult)) // Logs the new result
  .catch((err) => console.log(err)); // Catches any error if the promise is rejected

// Example of Fetch API using Promises (Which returns a Thenable)
const users = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json()) // Converts the response to JSON
  .then((data) => {
    data.forEach((user) => {
      // console.log(user); // Logs each user object
    });
  });

// Fetch is a Promise-based API, so we can chain `.then()` methods to handle asynchronous responses.

// ================================
// 4. Async/Await
// ================================

// Async/Await is a more readable and concise way to work with asynchronous code.
// It allows us to write asynchronous code that looks synchronous, and it works with promises.

const myUser = {
  userList: [],
};

// Async function to fetch user data
const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json(); // Waits for the JSON data to be fetched
  return jsonUserData;
};

// Using Async/Await inside an Immediately Invoked Function Expression (IIFE)
(async () => {
  const data = await myCoolFunction(); // Waits for myCoolFunction to finish
  myUser.userList = data;
  // console.log(myUser.userList); // Logs the fetched user data
})();

// Note: If you try to log `myUser.userList` outside of the `async` function,
// it may log an empty array since the data is being fetched asynchronously.

// ================================
// Fetch API with Method Configuration
// ================================

// The second parameter of the `fetch()` function is an optional object that allows you to configure various aspects of the request.
// Commonly used properties include `method`, `headers`, `body`, and `mode`.

// Example 1: GET request (default)
const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET", // GET is the default HTTP method
    headers: {
      Accept: "application/json", // We expect a JSON response
    },
  });
  const jsonJokeData = await response.json();
  // console.log(jsonJokeData.joke); // Logs the joke
};

// Example 2: POST request (sending data)
const jokeObject = {
  id: "K6UvXD5Mexc",
  joke: "Which side of the chicken has more feathers? The outside.",
};

(async (jokeObj) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST", // Specify POST method
    headers: {
      "Content-Type": "application/json", // We are sending JSON data
    },
    body: JSON.stringify(jokeObj), // Converts the joke object to a JSON string
  });

  const data = await response.json(); // Response from the server
  // console.log(data); // Logs the server response
})(jokeObject);

// Example 3: Fetching data with dynamic URL (using parameters)
const getFormData = () => {
  const category = "Dark";
  return category; // Returns the category
};

const uriFormed = (formData) => {
  return `https://v2.jokeapi.dev/joke/${formData}`; // Forms a URL with category
};

const fetchJoke = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  let joke;
  if (data.type === "single") {
    joke = data.joke; // Simple joke
  } else {
    joke = `${data.setup}\n\n  - ${data.delivery}`; // Two-part joke
  }
  postJoke(joke); // Display the joke
};

const postJoke = (joke) => {
  console.log(joke); // Logs the joke to the console
};

// Fetch joke with dynamic category
(async () => {
  const formData = getFormData();
  const getCustomization = uriFormed(formData);
  await fetchJoke(getCustomization); // Fetch and log the joke
  console.log("Here is Your Joke ☝️");
})();

// ================================
// Summary of Concepts
// ================================

// 1. Callbacks: Functions passed as arguments to other functions. Can lead to "Callback Hell" when nested too deeply.
// 2. Promises: Objects representing the eventual completion (or failure) of an asynchronous operation. They allow us to manage async operations in a more readable way compared to callbacks.
// 3. Thenables: Objects that implement the `then()` method, which is used for chaining multiple asynchronous operations.
// 4. Async/Await: A syntactic sugar for handling promises. `async` functions return a promise, and `await` is used to pause execution until the promise resolves.
