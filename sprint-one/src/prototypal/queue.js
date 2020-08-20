var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(queueMethods);
  someInstance.headIndex =  null;
  someInstance.tailIndex =  null;
  return someInstance;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  var newIndex = this.tailIndex + 1;
  if(!this.headIndex) {
    this.headIndex = newIndex;
  }
  this.tailIndex = newIndex;
  this[newIndex] = value;
  return this;
};
queueMethods.dequeue = function() {
  var firstElement = this[this.headIndex];
  delete this[this.headIndex];
  this.headIndex++;
  if (this.headIndex > this.tailIndex) {
    this.headIndex = null;
    this.tailIndex = null;
  }
  return firstElement;
};
queueMethods.size = function() {
  if (this.headIndex === null) {
    return 0;
  }
  return this.tailIndex - this.headIndex + 1;
};

