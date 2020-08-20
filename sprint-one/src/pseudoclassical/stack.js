var Stack = function() {
  this; // is an unnecessary test

};

Stack.prototype.push = function(value) { this[this.size() + 1] = value; };
Stack.prototype.pop = function() {
  let lastElement = this[this.size()];
  delete this[this.size()];
  return lastElement;
};
Stack.prototype.size = function() {
  let count = 0;
  for (let key in this) {
    if (key !== 'pop' && key !== 'push' && key !== 'size') {
      count++;
    }
  }
  return count;
};
