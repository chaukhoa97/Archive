// 1. `this` references the OBJECT that is excecuting the current function
const person = {
  foo: ["a", "b", "c"],

  test() {
    // `this` of a METHOD will be the OBJECT that contains the method
    console.log(this); // `person` obj

    this.foo.map(function (item) {
      // `this` of a regular fn will be the `window` object in the browser or `global` object in Node
      console.log(this); // `window` obj
    });

    // the second arg of `map` - `thisArg` will be used as the `this` of the callback fn, in this case, `person` obj
    this.foo.map(function (item) {
      console.log(this); // `person` obj
    }, this);

    this.foo.map((item) => {
      // `this` of a regular ARROW fn will be the OBJECT that contains the method
      console.log(this); // `person` obj
    });
  },
};
person.test();
