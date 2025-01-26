// =========================
// Web Storage API Tutorial
// =========================

// ======= Session Storage =======
function sessionStorageExample() {
  // Data to be stored
  const activities = ["eat", "sleep", "code"];

  // Syntax: sessionStorage.setItem(key, value)
  // - key: The name under which the data will be stored.
  // - value: Must be a string. Use JSON.stringify() for non-string data.
  sessionStorage.setItem("activities", JSON.stringify(activities));

  // Syntax: sessionStorage.getItem(key)
  // - key: The name of the data you want to retrieve.
  const storedActivities = JSON.parse(sessionStorage.getItem("activities"));
  console.log("Session Storage (Array):", storedActivities);

  // Storing an object
  const user = {
    name: "Hazrat",
    hobbies: ["eat", "sleep", "code"],
    logName: function () {
      console.log(this.name);
    },
  };

  // JSON.stringify() converts the object into a JSON string for storage.
  sessionStorage.setItem("user", JSON.stringify(user));

  // Retrieving an object
  const storedUser = JSON.parse(sessionStorage.getItem("user")); // JSON.parse() converts the JSON string back into an object.
  console.log("Session Storage (Object):", storedUser);

  // Notes:
  // - Methods (e.g., logName) are not stored when using JSON.stringify().
  // - Data is cleared from session storage when the browser tab is closed.
}

sessionStorageExample();

// ======= Local Storage =======
function localStorageExample() {
  // Object to be stored
  const userProfile = {
    name: "Hazrat",
    hobbies: ["eat", "sleep", "code"],
  };

  // Syntax: localStorage.setItem(key, value)
  // - Similar to sessionStorage, the key is the identifier, and value must be a string.
  localStorage.setItem("userProfile", JSON.stringify(userProfile));

  // Syntax: localStorage.getItem(key)
  // - Retrieves the value for the given key.
  const retrievedProfile = JSON.parse(localStorage.getItem("userProfile")); // Convert back to an object using JSON.parse().

  // Other useful methods:
  // - localStorage.key(index): Retrieves the key name at a specific index.
  const firstKey = localStorage.key(0);

  // - localStorage.length: Returns the number of items stored.
  const totalKeys = localStorage.length;

  console.log("Local Storage Length:", totalKeys);
  console.log("First Key in Local Storage:", firstKey);
  console.log("Retrieved Profile:", retrievedProfile);

  // Syntax: localStorage.removeItem(key)
  // - Removes the data for the specified key.
  // localStorage.removeItem("userProfile");

  // Syntax: localStorage.clear()
  // - Clears all data in local storage.
  // localStorage.clear();
}

localStorageExample();

// =========================
// Notes on Syntax and Usage
// =========================

// 1. sessionStorage and localStorage both store key-value pairs.
// 2. Keys and values must be strings. Use JSON.stringify() for arrays and objects.
// 3. sessionStorage:
//    - Data is cleared when the tab/browser session ends.
//    - Ideal for temporary data like current user session or a cart in an e-commerce app.
// 4. localStorage:
//    - Data persists even when the browser is closed and reopened.
//    - Ideal for data you want to store long-term, like user preferences or saved items.
// 5. Retrieval requires JSON.parse() for complex data types.

// Example Syntax Recap:
// ---------------------
// sessionStorage.setItem("key", "value");  // Save data
// sessionStorage.getItem("key");          // Retrieve data
// sessionStorage.removeItem("key");       // Remove specific data
// sessionStorage.clear();                 // Clear all data
//
// localStorage.setItem("key", "value");   // Save data
// localStorage.getItem("key");           // Retrieve data
// localStorage.removeItem("key");        // Remove specific data
// localStorage.clear();                  // Clear all data
