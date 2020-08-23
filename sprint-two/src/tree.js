var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  if (target === this.value) {
    return true;
  }
  if (this.children.length) {
    for (let i = 0; i < this.children.length; i++) {
      if (treeMethods.contains.apply(this.children[i], arguments)) {
        return true;
      }
    }
  }
  return false;
};
// tree
// tree.children = [5, 6]
treeMethods.removeChild = function(value) {
  for (let i = 0; i < this.children.length; i++) {
    if (this.children[i].value === value) {
      this.children.splice(i, 1);
    }
  }
};




/*
 * Complexity: What is the time complexity of the above functions?
 //treeMethods.addChild:
 //Since this function only adds new children to the end of the children array this function is constant time. O(1).

 //treeMethods.contains:
//Since we have to compare every child to the target this function is linear time. O(n)

 */
