

// Instantiate a new graph
var Graph = function() {
  this.graphBlocks = [];
};

var GraphNode = function(value) {
  this.value = value;
  this.neighborValues = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  let graphNode = new GraphNode(node);
  this.graphBlocks.push(graphNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (let i = 0; i < this.graphBlocks.length; i++) {
    if (this.graphBlocks[i].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (let i = 0; i < this.graphBlocks.length; i++ ) {
    if (this.graphBlocks[i].value === node) {
      let from = node;
      for (let k = 0; k < this.graphBlocks[i].neighborValues.length; k++) {
        let to = this.graphBlocks[i].neighborValues[k];
        this.removeEdge(from, to);
      }
      this.graphBlocks.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //iterate over the graphBlocks
  for (let i = 0; i < this.graphBlocks.length; i++) {
    //if the current graphNode is equal to fromNode
    if (this.graphBlocks[i].value === fromNode) {
      //  this.graphBlocks[i].neighborValues contains toNode
      if (this.graphBlocks[i].neighborValues.includes(toNode)) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // iterate over graphBlocks
  for ( let i = 0; i < this.graphBlocks.length; i++) {
    // if current graphBlock has 'fromNode' as value
    if ( this.graphBlocks[i].value === fromNode ) {
      // push 'toNode' value to fromNode neighbor
      this.graphBlocks[i].neighborValues.push(toNode);
    }
    // if current graphBlock has 'toNode' as value
    if ( this.graphBlocks[i].value === toNode ) {
      // push 'fromNode' value to toNode neighbor
      this.graphBlocks[i].neighborValues.push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // iterate over graphBlocks
  for ( let i = 0; i < this.graphBlocks.length; i++) {
    // if current graphBlock has 'fromNode' as value
    if ( this.graphBlocks[i].value === fromNode ) {
      this.graphBlocks[i].neighborValues.splice(_.indexOf(toNode), 1);
    }
    // if current graphBlock has 'toNode' as value
    if ( this.graphBlocks[i].value === toNode ) {
      this.graphBlocks[i].neighborValues.splice(_.indexOf(fromNode), 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //iterate over the graphBlocks
  for (let i = 0; i < this.graphBlocks.length; i++) {
    cb.call(this, this.graphBlocks[i].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode
 Since this function creates a new node and adds a new node to the end of an array, this function is constant time. O(1).

 contains
 Since this function has 1 iteration that checks an entire array for a comparable value, this function is linear time. O(n).

 removeNode
 Since removeNode iterates over all of the graphBlocks, it is at least O(n). It also runs removeEdge for each neighbor relationship, and removeEdge is O(n). Therefore, removeNode is O(n^?)

 hasEdge
 addEdge
 removeEdge
 forEachNode


 */


