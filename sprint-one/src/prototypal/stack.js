var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newClassObj = Object.create(model);
  // _.extend(model, stackMethods);
  return newClassObj;
};

var model = {};
_.extend(model, stackMethods);

var stackMethods = {
  push: function(value) { this[this.size() + 1] = value; },
  pop: function() {
    let lastVal = this[this.size()];
    delete this[this.size()];
    return lastVal;
  },
  size: function() {
    let count = 0;
    for (let key in this) {
      if (key !== 'push' && key !== 'pop' && key !== 'size') {
        count++;
      }
    }
    return count;
  }
};


