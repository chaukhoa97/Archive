// Array with no index
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      // this.constructor(value);
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      throw new Error("No item to be popped");
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      this.length--;
      let tempTail = this.head;
      for (let n = 1; n < this.length; n++) {
        this.tail = tempTail.next;
        this.tail.next = null;
      }
    }
    return this;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) {
      throw new Error("There is not any Node to be shifted away");
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    } else {
      let temp = this.head;
      for (let n = 0; n < index; n++) temp = temp.next;
      return temp;
    }
  }
  insert(index, value) {
    const newNode = new Node(value);
    if (index < 0 || index > this.length) return false;
    else {
      if (index === 0) return this.unshift(value);
      if (index === this.length) return this.push(value);
      else {
        const temp = this.get(index);
        this.get(index - 1).next = newNode;
        newNode.next = temp;
      }
      this.length++;
      return this;
    }
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    else {
      if (index === 0) return this.shift();
      if (index === this.length - 1) return this.pop();
      else {
        let temp = this.get(index - 1);
        temp.next = temp.next.next;
        temp.next.next = null;
      }
      this.length--;
      return this;
    }
  }
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

let myLinkedList = new LinkedList(4);
myLinkedList.push(5);
myLinkedList.push(6);
