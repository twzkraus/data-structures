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

setPrototype.containsAll = function() {
  let allInList = true;
  let that = this;
  console.log(arguments[0]);
  _.each(arguments[0], function(arg) {
    // console.log(arg);
    // console.log('contained in list?: ' + that.contains(arg));
    if (!that.contains(arg)) {
      allInList = false;
    }
  });
  return allInList;
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
