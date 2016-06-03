## Utilities Library

### Utilities

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

##### API

######  Tree()

###### setNode(value, level, node)

###### getNode(value, level, node)

###### root(value)

###### leftChild(value)

###### rightChild(value)

###### parent(value)
