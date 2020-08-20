class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.length = 0;
  }

  push(value) {
    this.length++;
    this[this.length] = value;
  }

  pop() {
    var lastElement = this[this.length];
    delete this[this.length];
    if (this.length !== 0) {
      this.length--;
    }
    return lastElement;
  }

  size() {
    return this.length;
  }

}
