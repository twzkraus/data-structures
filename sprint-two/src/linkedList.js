var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  // let numOfNodes = 0;

  list.addToTail = function(value) {
    // let key = numOfNodes++;
    let newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  /*
  linkedList.addToTail(4);                    (4) -> null
  linkedList.addToTail(5);                    (4) -> (5) -> null
  linkedList.head.next =
  expect(linkedList.head.value).to.equal(4);
  linkedList.removeHead();
  expect(linkedList.head.value).to.equal(5);
  */

  list.removeHead = function() {
    let oldHead = list.head;
    list.head = list.head.next;
    delete list.head;
    return oldHead.value;
  };

  list.contains = function(target) {
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
 */
