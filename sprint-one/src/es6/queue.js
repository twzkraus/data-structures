class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.headIndex = null;
    this.tailIndex = null;
    this.length = 0;
  }
  enqueue(value) {
    this.length++;
    let newIndex = this.tailIndex + 1;
    if (!this.headIndex) {
      this.headIndex = newIndex;
    }
    this.tailIndex = newIndex;
    this[newIndex] = value;
    return this;
  }

  dequeue() {
    this.length--;
    let firstElement = this[this.headIndex];
    delete this[this.headIndex];
    this.headIndex++;
    if (this.headIndex > this.tailIndex) {
      this.headIndex = null;
      this.tailIndex = null;
    }
    return firstElement;
  }

  size() {
    if (this.headIndex === null) {
      return 0;
    }
    return this.length;
  }

}
