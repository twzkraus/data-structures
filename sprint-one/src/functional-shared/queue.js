var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {
    headIndex: null,
    tailIndex: null
  };
  _.extend(someInstance, queueMethods);
  return someInstance;
};



var queueMethods = {

  enqueue: function(value) {
    var newIndex = this.storage.tailIndex + 1;
    if (!this.storage.headIndex) {
      this.storage.headIndex = newIndex;
    }
    this.storage.tailIndex = newIndex;
    this[newIndex] = value;
    return this;
  },
  dequeue: function() {
    var firstElement = this[this.storage.headIndex];
    delete this[this.storage.headIndex];
    this.storage.headIndex++;
    if (this.storage.headIndex > this.storage.tailIndex) {
      this.storage.headIndex = null;
      this.storage.tailIndex = null;
    }
    return firstElement;
  },
  size: function() {
    if (this.storage.headIndex === null) {
      return 0;
    }
    return this.storage.tailIndex - this.storage.headIndex + 1;
  }
};
