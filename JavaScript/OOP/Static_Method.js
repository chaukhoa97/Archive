//? Static Methods: An utility function that takes an input and returns something, DOESN'T NEED A NEW OBJECT FROM THE CLASS
class SM {
  static sayHi() {
    console.log('Hi!');
  }
}
//! Gọi function abs bằng Class, chứ KHÔNG ĐƯỢC gọi bằng các Object tạo ra từ Class đó.
const s = new SM(); //! s.sayHi --> TypeError
SM.sayHi(); // Hi!
