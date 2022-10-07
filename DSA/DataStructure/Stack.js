// Last in First out
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
  pop(value) {
    if (this.length === 0) return false;
    else {
      if (this.length === 1) return null;
      else {
        let temp = this.top;
        this.top = this.top.next;
        temp.next = null;
      }
      this.length--;
    }
  }
}
const stack = new Stack(4);
stack.push(5);
stack.push(6);
