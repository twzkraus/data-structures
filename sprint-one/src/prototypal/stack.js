var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newClassObj = Object.create(stackMethods);
  return newClassObj;
};

var stackMethods = {};
stackMethods.push = function(value) { this[this.size() + 1] = value; };
stackMethods.pop = function() {
  let lastVal = this[this.size()];
  delete this[this.size()];
  return lastVal;
};
stackMethods.size = function() {
  let count = 0;
  for (let key in this) {
    if (key !== 'push' && key !== 'pop' && key !== 'size') {
      count++;
    }
  }
  return count;
};
