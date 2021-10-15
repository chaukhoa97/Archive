/* "this" references the object that is excecuting the current function. Nghĩa là nếu "this" ở trong một object, nó reference chính object đó.
Nếu "this" ở trong một ANONYMOUS FUNCTION, nó sẽ dc add vào window object -> "this" trong function đó sẽ reference tới window.
Còn nếu "this" ở trong một ARROW FUNCTION, nó sẽ reference tới object đang gọi function đó */
class Person1 {
  constructor(name) {
    this.name = name;
  }

  printNameArrow() {
    //! Anonymous callback function dc sử dụng ở đây là ARROW FUNCTION, nên this reference tới Person1 object.
    setTimeout(() => console.log(`Arrow: ${this.name}`), 0); // Arrow: Khoa
  }

  printNameFunction() {
    //! Anonymous callback function dc sử dụng ở đây là FUNCTION bình thường, nên this bị redefined -> reference tới window object.
    setTimeout(function () {
      console.log(`Function: ${this.name}`); // Function: (blank)
    }, 0);
  }
}
