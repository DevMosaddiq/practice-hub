### **1️⃣ Async/Await Problems**

#### 1. **Fetching User Data**

- Write an async function `fetchUserDetails(userId)` that:
  1. Fetches a user's data from an API (mock it with `setTimeout`).
  2. Fetches the user's posts and comments simultaneously (using `Promise.all`).
  3. Returns a combined object with user details, posts, and comments.

#### 2. **Simulate API Retry**

- Create an async function `fetchWithRetry` that:
  1. Fetches data from a mock API.
  2. Retries the fetch up to 3 times if it fails.
  3. Stops retrying and throws an error after 3 attempts.

#### 3. **Order Processing**

- Simulate an e-commerce order process using async/await:
  1. Create functions `placeOrder`, `processPayment`, and `shipOrder`.
  2. Each function should return a promise that resolves after some delay.
  3. Chain these functions to simulate the workflow.

#### 4. **File Downloader**

- Write a function `downloadFiles(fileUrls)`:
  1. Accepts an array of file URLs.
  2. Downloads files sequentially (one by one) using `await`.
  3. Logs each file's progress.

#### 5. **Weather Forecast**

- Create a function `getWeather(city)`:
  1. Fetches current weather and a 7-day forecast from separate APIs (mocked).
  2. Combine the data into a single object and return it.

---

### **2️⃣ Object-Oriented Programming (OOP) Problems**

#### 1. **Bank Account System**

- Create a `BankAccount` class with:
  1. Properties: `accountNumber`, `accountHolder`, `balance`.
  2. Methods: `deposit(amount)`, `withdraw(amount)`, `getBalance()`.
  3. Extend it to `SavingsAccount` with additional `interestRate` and a method `addInterest()`.

#### 2. **Library Management System**

- Design a `Library` class:
  1. Properties: `books` (array of objects with title, author, and isAvailable).
  2. Methods: `addBook(book)`, `lendBook(title)`, `returnBook(title)`.
  3. Handle cases where a book is already lent out or doesn't exist.

#### 3. **Employee Payroll**

- Create an `Employee` class with:
  1. Properties: `name`, `id`, `baseSalary`.
  2. Method: `calculateSalary(hoursWorked)` (returns salary based on hours worked).
  3. Extend it to `Manager` with a bonus system.

#### 4. **Vehicle Rental System**

- Create a `Vehicle` class:
  1. Properties: `brand`, `model`, `rentalRatePerDay`.
  2. Methods: `rent(days)`, `returnVehicle()`.
  3. Extend it to classes `Car` and `Bike` with specific features (e.g., fuel type, gear type).

#### 5. **Online Store**

- Design a `Product` class with:
  1. Properties: `name`, `price`, `stock`.
  2. Methods: `buy(quantity)`, `restock(quantity)`.
  3. Create an `Order` class to manage multiple products and calculate the total price.

---

### **3️⃣ Combined Concepts**

#### 1. **Ticket Booking System**

- Create a `TicketBooking` class with:
  1. Methods: `searchFlights(origin, destination)`, `bookTicket(flightId)`, `cancelTicket(ticketId)`.
  2. Use async/await to simulate flight search and ticket confirmation delays.

#### 2. **Chat Application**

- Create a `Chat` class with:
  1. Methods: `sendMessage(message)`, `receiveMessage()`.
  2. Simulate message sending/receiving with async/await.

#### 3. **E-commerce Website Backend**

- Combine OOP and async/await to:
  1. Create classes for `User`, `Product`, and `Order`.
  2. Fetch user and product data asynchronously.
  3. Place an order and deduct stock after a delay.

#### 4. **Multi-User Game**

- Build a basic game system:
  1. Create a `Player` class with properties like `name`, `health`, and `score`.
  2. Simulate a turn-based system where each player's actions (e.g., attack) are delayed using async/await.

#### 5. **News Aggregator**

- Create a `NewsAggregator` class that:
  1. Fetches headlines from multiple APIs simultaneously.
  2. Combines results into a single array of articles.
  3. Filters articles by keyword.
