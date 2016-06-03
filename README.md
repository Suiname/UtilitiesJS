## Utilities Library

### Utilities
Some useful Utilities
```
var utils = require('tham-utils')
var objectsEqual = utils.objectsEqual
var randomInt = utils.randomInt
```

#### objectsEqual(obj1, obj2)
Takes 2 objects and returns true if their key value pairs are all equal and false if they are not.  Will handle nested objects and arrays as well.  
Have you ever done this in JavaScript?
```
var jsObject = {}; // could also be jsObject = [];
if(jsObject){
  return true;
} else {
  return false;
}
```
The above code will return true.  With objectEqual you can now do this (note I switched the return values as objectEqual evaluating to true means jsObject is empty):
```
var jsObject = {};
if(objectsEqual(jsObject,{})){
  return false;
} else {
  return true;
}
```

#### randomInt(min, max)
Takes 2 integers and returns a random integer (inclusive) in the range of the two numbers.  Throws a range error if min is greater than max.
```
randomInt(1,5) // returns int between 1 and 5 (inclusive)
```

### Sorting Algorithms
All sorting algorithms were gathered from here: http://khan4019.github.io/front-end-Interview-Questions/sort.html#selectionSort

```
var sort = require('tham-utils').sort
```

#### sort.bubbleSort(arr)
sorts Array using Bubble sort algorithm, which is O(n^2) worst case
```
sort.bubbleSort([3,4,5,2,1]) // should return [1,2,3,4,5]
```

#### sort.selectionSort(arr)
sorts Array using Selection sort algorithm, which is O(n^2) worst case
```
sort.selectionSort([3,4,5,2,1]) // should return [1,2,3,4,5]
```

#### sort.insertionSort(arr)
sorts Array using Insertion sort algorithm, which is O(n^2) worst case
```
sort.insertionSort([3,4,5,2,1]) // should return [1,2,3,4,5]
```

#### sort.mergeSort(arr)
sorts Array using Merge sort algorithm, which is O(n log n) worst case
```
sort.mergeSort([3,4,5,2,1]) // should return [1,2,3,4,5]
```

### Data Structures
Data Structures in JavaScript

#### PriorityQueue
from here https://github.com/janogonzalez/priorityqueuejs

```
var PriorityQueue = require('tham-utils').data.PriorityQueue
```

##### API

###### PriorityQueue()

Initializes a new empty `PriorityQueue` wich uses `.DEFAULT_COMPARATOR()` as
the comparator function for its elements.

###### PriorityQueue(comparator)

Initializes a new empty `PriorityQueue` with uses the given `comparator(a, b)`
function as the comparator for its elements.

The comparator function must return a positive number when `a > b`, 0 when
`a == b` and a negative number when `a < b`.

###### PriorityQueue.DEFAULT_COMPARATOR(a, b)

Compares two `Number` or `String` objects.

###### PriorityQueue#deq()

Dequeues the top element of the priority queue.
Throws an `Error` when the queue is empty.

###### PriorityQueue#enq(element)

Enqueues the `element` at the priority queue and returns its new size.

###### PriorityQueue#forEach(fn)

Executes `fn` on each element. Just be careful to not modify the priorities,
since the queue won't reorder itself.

###### PriorityQueue#isEmpty()

Returns whether the priority queue is empty or not.

###### PriorityQueue#peek()

Peeks at the top element of the priority queue.
Throws an `Error` when the queue is empty.

###### PriorityQueue#size()

Returns the size of the priority queue.


#### List

Linked list

```
var List = require('tham-utils').data.List
```

##### API

###### List()

Initializes a new empty list with this.start and this.end set to null
```
var list = new List();
return list.start // null
return list.end // null
```

###### List.makeNode()

Function used to generate a new node object.  Creates an object with properties data and next both set to null.
```
var node = List.makeNode()
return node // {data: null, next: null}
```

###### add(data)

Adds a new node to the list with data value set to passed argument, if list is not empty the node is added to the end
```
var list = new List()
list.add("data")
return list.start.data // "data"
list.add("data2")
return list.start.data // "data"
return list.end.data // "data2"
```

###### delete(data)

Deletes the first node with data value that matches passed argument
```
var list = new List()
list.add("data")
return list.start.data // "data"
list.delete("data")
return list.start.data // null
```

###### insertAsFirst(data)

Inserts new node at the start of the list with data value that equals passed argument
```
var list = new List()
list.add("data")
return list.start.data // "data"
list.insertAsFirst("data2")
return list.start.data // "data2"
```

######  insertAfter(node, data)

Inserts new node after the first node that has data which equals the first argument passed.  The new node will have a data value of the second argument passed.
```
var list = new List()
list.add("data")
return list.start.data // "data"
list.insertAfter("data", "moar data")
return list.end.data // "moar data"
```

###### item(index)

Returns the node at the index passed.  The start of the list is index 1.  The Argument given must be an integer.
```
var list = new List()
list.add("data")
list.add("data2")
return list.item(1) // {data: "data", next: {data:"data2", next: null}}
return list.item(2) // {data:"data2", next: null}
```

######  each(fn)

Takes a function as an argument and runs it on each node in the list.
```
var list = new List()
list.add(1)
list.add(2)
function square(node){
  node.data *= node.data;
}
list.each(square);
return list.start.data // 1
return list.end.data // 4
```


#### Tree

Binary Tree

```
var Tree = require('tham-utils').data.Tree
```

##### API

######  Tree()

Creates Tree Object with properties level, node, and Nodes.  Nodes is an array which stores the values of each node in the tree, level and node are integers which indicate which location of the tree you are currently at.
```
var tree = new Tree();
return tree.Nodes // []
return tree.level // 0
return tree.node // 0
tree.setNode(0,0,0); //set value of node at (0,0) to 0
return tree.Nodes //[0]
```

###### setNode(value, level, node)

Sets the value of the node at level, node to be the first argument passed.  If only one argument is passed (value), it sets the value of the current location to the passed argument.
```
var tree = new Tree();
tree.setNode(0,0,0); //set value of node at (0,0) to 0
tree.getNode() // 0 (returns value at current node)
tree.setNode(1); // set value of node at (0,0) to 1
tree.getNode() // 1 (returns value at current node)
```

###### getNode(level, node)

Gets the value of the node at the level and node of passed arguments.  If no arguments are given, returns the value of the node at the current location.
```
var tree = new Tree();
tree.setNode(0,1,1); //set value of node at (1,1) to 0
tree.getNode() // null (returns value at current node)
tree.getNode(1,1) // 0 (returns value at node (1,1))
```

###### root(value)

Sets the current location to the root (0,0).  If an argument was passed, it sets the value of the root node to that argument, otherwise it will return the value of the root node.
```
var tree = new Tree();
tree.node = 1;
tree.level = 1;
tree.root(1); // sets root node value to 1, sets current location to root node
tree.node // 0
tree.level // 0
tree.root() // 1 (returns value of root node)
```

###### leftChild(value)

Sets current location to the left child of the current node.  If an argument is passed it also sets the value of the left child to that argument.

```
var tree = new Tree();
tree.leftChild("Left Child") // sets value of node at (1,0) to "Left Child"
tree.node // 0
tree.level // 1
tree.getNode(1,0) // "Left Child"
```

###### rightChild(value)

Sets current location to the right child of the current node.  If an argument is passed it also sets the value of the right child to that argument.

```
var tree = new Tree();
tree.rightChild("Right Child") // sets value of node at (1,1) to "Left Child"
tree.node // 1
tree.level // 1
tree.getNode(1,1) // "Right Child"
```

###### parent(value)

Sets the current location to the parent node of the current node.  If an argument is passed it also sets the value of the parent to that argument.

```
var tree = new Tree();
tree.rightChild() // sets location to (1,1)
tree.node // 1
tree.level // 1
tree.parent() // sets location to parent (0,0)
tree.node // 0
tree.level // 0
tree.leftChild() // sets location to (1,0)
tree.parent("Root") // sets value of parent node to "Root"
tree.root() // "Root"
```
