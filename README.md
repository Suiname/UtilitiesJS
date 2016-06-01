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
