export default class User {
  constructor(email, username) {
    this._email = email;
    this._username = username;
  }

  sayHello() {
    return `Hii, I'm ${this._username}, this is my email: ${this._email}`;
  }
}
