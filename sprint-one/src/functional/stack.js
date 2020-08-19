var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[someInstance.size() + 1] = value;
  };

  someInstance.pop = function() {
    var lastElement = someInstance[someInstance.size()];
    delete(someInstance[someInstance.size()]);
    return lastElement;
  };

  someInstance.size = function() {
    let count = 0;

    for (let key in someInstance) {
      if (key !== 'push' && key !== 'pop' && key !== 'size') {
        count++;
      }
    }
    return count;
  };

  return someInstance;
};
