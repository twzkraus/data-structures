

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let tuple = [k, v];
  // if our storage spot is empty,
  if (!this._storage.get(index).length) {
    // set the storage spot equal to our tuple
    this._storage.set(index, [tuple]);
  } else {
  // otherwise,
    // get the current storage spot
    var currentStorage = this._storage.get(index);
    // push the new tuple into the storage spot value
    currentStorage.push(tuple);
    // set the storage spot equal to an array with the new tuple concatenated to the end of previous tuples
    this._storage.set(index, currentStorage);
  }
};
// previously:
// storageArray[index]: ['turner', 'kraus']
// now:
// storageArray[index]: [['turner', 'kraus']]
// or: [['turner', 'kraus'], ['scott', 'mounce']]


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let tuple = [];
  this._storage.set(index, tuple);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


