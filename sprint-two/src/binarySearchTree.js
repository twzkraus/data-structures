var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);
  tree.left = null;
  tree.right = null;
  tree.value = value;
  return tree;
};
BinarySearchTree.prototype.insert = function(value) {
  var newTree = BinarySearchTree(value);
  //if input value is less than this
  if (newTree.value < this.value) {
    // if this.left already has a value
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = newTree;
    }
  } else if (newTree.value > this.value) {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = newTree;
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  // base
  if (this.value === value) {
    return true;
  }
  // if value is less than current value
  if (value < this.value) {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }

};
BinarySearchTree.prototype.depthFirstLog = function(func) {
  //takes in a function
  //executes func on all values in the tree
  func(this.value);
  // this.value contains this.right and this.left
  if (this.left !== null) {
    this.left.depthFirstLog(func);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(func);
  }
};




/*
 * Complexity: What is the time complexity of the above functions?
insert
Since this function's worst case scenario mean's that it has to visit every child tree, this function has a linear time. O(n).

contains
Since this function's worst case scenario mean's that it has to visit every child tree, this function has a linear time. O(n).

depthFirstLog
Since this function necessarily has to visit every child tree, this function has a linear time. O(n).

 */
