//1 Private members using Symbol & WeakMap.
// Convention: Có underline đằng trước cho những Private members
const _size = Symbol();
const _draw = Symbol();
const _color = new WeakMap();
const _move = new WeakMap();
class Square {
  constructor(size, color) {
    this[_size] = size;
    _color.set(this, color); // _color = WeakMap(Square => "blue")
    _move.set(this, () => console.log('move', this)); // _move = WeakMap(Square => () => console.log("move", this))
  }
  // Hàm draw là private nên không truy cập chay dc, vẫn có trong proto
  [_draw]() {
    console.log('draw');
  }
  // 2 hàm ở dưới là 2 hàm dc truy cập từ bên ngoài
  showColor() {
    console.log(_color.get(this));
  }
  move() {
    // _move.get(this) trả về function(){console.log('move',this)}, nên phải có thêm dấu () để cho biết nó là function
    _move.get(this)();
  }
  //* Getter & Setter: NOTE: Khai báo như nào, xuống Getter & Setter phải viết form giống vậy
  get size() {
    return this[_size];
  }
  set size(value) {
    this[_size] = value;
  }
  get color() {
    return _color.get(this);
  }
  set color(value) {
    _color.set(this, value);
  }
}
const sq = new Square(5, 'blue');
