// HtmlElement
function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}
HtmlElement.prototype.focus = function () {
  console.log("focused");
};
const he = new HtmlElement();
function HtmlSelectElement(array = []) {
  this.array = array;
  this.addItem = function (addedItem) {
    this.array.push(addedItem);
  };
  this.removeItem = function (removedItem) {
    while (this.array.includes(removedItem)) {
      this.array.splice(this.array.lastIndexOf(removedItem), 1);
    }
  };
  HtmlElement.call(this); // Xem dòng 12-14
  this.render = function () {
    return `<select>${this.array.map((n) => `<option>${n}</option>`).join("")}
      </select>`;
  };
}
// Cách 1, không kế thừa click vì click không nằm trong prototype của HtmlElement (mà nó ở trong HtmlElement luôn)
HtmlSelectElement.prototype = HtmlElement.prototype; // Hoặc = Object.create(HtmlElement.prototype)
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
// Cách 2, vì new sẽ kế thừa toàn bộ từ HtmlElement
HtmlSelectElement.prototype = new HtmlElement();
// Tạo biến để test
const select = new HtmlSelectElement([1, 3, 2, 3, 4, 3]);

function HtmlImageElement(src = "") {
  this.src = src;
  this.render = function () {
    return `<img src="${this.src}" />`;
  };
}
HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;
const img = new HtmlImageElement("google.com");

//// Stack
const _array = new WeakMap();
class Stack {
  constructor() {
    _array.set(this, []); // _array = [] của riêng từng Stack object
  }

  get count() {
    return _array.get(this).length;
  }

  push(value) {
    _array.get(this).push(value); // _array.get(this) trả về array trống [] ở trên, xong push vào và lưu lại
  }

  pop() {
    if (_array.get(this).length === 0) throw new Error("Empty stack");
    _array.get(this).pop();
  }

  peek() {
    if (_array.get(this).length === 0) throw new Error("Empty stack");
    return _array.get(this);
  }
}
const stack = new Stack();
