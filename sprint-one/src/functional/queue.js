var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    headIndex: null,
    tailIndex: null
  };

  // Implement the methods below

  someInstance.enqueue = function(value) {
    let newIndex = storage.tailIndex + 1;
    if (!storage.headIndex) {
      storage.headIndex = newIndex;
    }
    storage.tailIndex = newIndex;
    someInstance[newIndex] = value;
  };

  someInstance.dequeue = function() {
    let firstElement = someInstance[storage.headIndex];
    delete someInstance[storage.headIndex];
    storage.headIndex++;
    if (storage.headIndex > storage.tailIndex) {
      storage.headIndex = null;
      storage.tailIndex = null;
    }
    return firstElement;
  };

  someInstance.size = function() {
    let count = 0;
    for (let key in someInstance) {
      if (key !== 'enqueue' && key !== 'dequeue' && key !== 'size') {
        count++;
      }
    }
    return count;
  };

  return someInstance;
};
