var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    let oldHead = list.head;
    list.head = list.head.next;
    return oldHead.value;
  };

  list.contains = function(target, segment=list.head) {
    if(segment === null) {
      return false;
    }
    if (target === segment.value) {
      return true;
    } else {
      return list.contains(target, segment.next);
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail:
 Since we already have an exact reference to the list's tail this function's time complexity is O(1).

 removeHead:
 Since we already have an exact reference to the list's head this function's time complexity is 0(1).


 Contains:
 Since we have to compare every node this function's time complexity is O(n).

 */
