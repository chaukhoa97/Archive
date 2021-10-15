class Square {
  constructor(size) {
    this.size = size;
  }
  color = 'blue'; //* New in ES7: Tương đương this.color = 'blue' ở trên constructor
  //? 3 kiểu viết Function trong 1 class
  move = () => 'move Square'; //! ES7: Xịn nhất, dùng Arrow Function -> keyword 'this' hoạt động ok(reference tới Square objects thay vì Window object)
  // ES6
  move2() {
    console.log('move Square');
  }
  // ES5
  move3 = function () {
    console.log('move Square');
  };
}
class Rectangle extends Square {
  // Phải có size và color ở class cha trong Constructor function của class con, nếu không sẽ báo lỗi
  constructor(size, position) {
    super(size); // Calls the parent's constructor - ở đây là Square constructor
    //! Rectangle vẫn có property color = 'blue', vì dòng này dc tính là ở trong Square constructor
    this.position = position;
  }
  sing() {
    console.log('sing');
  }
  // Overriding
  move() {
    super.move(); // Calls the parent's move() method --> Returns "move Square"
    console.log('move Rectangle');
  }
}
const rect = new Rectangle(10, 'top_left'); // rect bây giờ ngoài sing method, có thêm move method dc inherit
