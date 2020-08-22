var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // key = item
  let key = item;
  // value = item
  let value = item;
  this._storage[key] = value;
};

setPrototype.contains = function(item) {
  return !!this._storage[item];

};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 .add
  This function is constant time because it has access to every item. O(1).
 .contains
  This function is constant time because it has access to every item. O(1).
 .remove
  This function is constant time because it has access to every item. O(1).
 */
