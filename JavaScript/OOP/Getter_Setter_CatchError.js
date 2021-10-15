const person = {
  name: "John",
  age: 20,
  // Getter
  get info() {
    return `${this.name}: ${this.age}`;
  },
  // Setter
  set changeInfo(fullName) {
    if (typeof fullName !== "string")
      throw new Error("full name is not a string");
    const parts = fullName.split(": ");
    this.name = parts[0];
    this.age = parts[1];
  },
};
// Catch Errors
try {
  person.changeInfo = null;
} catch (e) {
  alert(e);
}
console.log(person.info);
