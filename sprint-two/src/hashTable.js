

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let tuple = [k, v];
  if (!this._storage.get(index)) {
    this._storage.set(index, [tuple]);
  } else {
    var currentStorage = this._storage.get(index);
    currentStorage.push(tuple);
    this._storage.set(index, currentStorage);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageArray = this._storage.get(index);
  var result;
  _.each(storageArray, function(item) {
    if (item[0] === k) {
      result = item[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let tuple = [];
  this._storage.set(index, tuple);
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert
  Since this function does not use any iteration and adds arrays to specific index's, this function is constant time, O(1).
 retrieve
  Since this function does iterate but the iteration is expected to be so minimal, this function is constant time, O(1).
 remove
  Since this function does not use any iteration and resets the array at a particular index, this function is constant time, O(1).
 */


