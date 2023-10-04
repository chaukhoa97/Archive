function Shape(color) {
  this.color = color;
}
Shape.prototype.duplicate = () => {
  console.log('duplicate shape');
};
function Circle(radius, color) {
  //1 Instance members của Circle:
  // Gọi this.color = color (line 3) lên this, ở đây là function Circle, color trong (this, color) là giá trị color trong function Circle(radius, color).
  Shape.call(this, color);
  const id = 1;
  const location = { x: 0, y: 1 };
  // Có thể được truy cập từ bên ngoài
  this.radius = radius;
  this.draw = function () {
    // Cần this, vì nó reference tới new object Circle
    console.log(this.radius);
    // Không cân this, vì đây là private property trong Constructor Function này
    console.log(location);
  };
}
//1 PROTOTYPE MEMBER CỦA CIRCLE
/* Dùng cho những method lặp đi lặp lại để tiết kiệm bộ nhớ thay vì tạo ra hằng trăm copy của method đó ở từng Circle object,
  ở đây vì radius mỗi Circle khác nhau nên không dùng, nhưng method "move" ở các object đều giống nhau nên sẽ sử dụng Prototype members ở đây.
  ! Function trong Property members KHÔNG dùng Arrow function được (KHÔNG dùng Circle.prototype.move = () => {this.draw()...}),
  vì "this" ở đây sẽ không bị redefine scope như global function, nên nó sẽ reference tới method Circle.move, chứ không phải là Circle object.
  Nên khi chạy sẽ báo lỗi "this.draw is not a function at Circle.move", vì draw là method của Circle constructor, ko phải của Circle.move */
Circle.prototype.move = () => {
  this.draw();
  console.log(`move ${this.radius}`);
};

function extend(Child, Parent) {
  // Lấy parentBase làm prototype property cho Child, thay vì childBase (trong trường hợp này: để thừa kế duplicate function)
  // Child.prototype là một object được sử dụng để làm parent cho các objects tạo ra từ Child Constructor
  Child.prototype = Parent.prototype;
  // Khi thay childBase -> parentBase ở trên, ta cũng đã thay đổi Constructor của nó (vì trong childBase gốc có chứa Constructor)
  // Vì vậy phải đặt lại Constructor cho Child về lại Constructor gốc của Child
  Child.prototype.constructor = Child;
}
extend(Circle, Shape);

const circle = new Circle(10);

// Iterating members
console.log(Object.keys(circle)); // Chỉ trả về OWN PROPERTY (instance members)
for (const key in circle) console.log(key, circle[key]); // Return all members (instance & prototype)
if ('info' in person) console.log('Có thuộc tính info');

// Overriding Method, đè lên hàm duplicate dc inherit từ Shape
Circle.prototype.duplicate = function () {
  console.log('duplicateee được override');
  // Ta vẫn có thể gọi dc hàm duplicate của Shape bằng call function
  Shape.prototype.duplicate.call(this);
};
