// Got this here - https://raw.githubusercontent.com/janogonzalez/priorityqueuejs/master/index.js

/**
 * Expose `PriorityQueue`.
 */
module.exports.PriorityQueue = PriorityQueue;

/**
 * Initializes a new empty `PriorityQueue` with the given `comparator(a, b)`
 * function, uses `.DEFAULT_COMPARATOR()` when no function is provided.
 *
 * The comparator function must return a positive number when `a > b`, 0 when
 * `a == b` and a negative number when `a < b`.
 *
 * @param {Function}
 * @return {PriorityQueue}
 * @api public
 */
function PriorityQueue(comparator) {
  this._comparator = comparator || PriorityQueue.DEFAULT_COMPARATOR;
  this._elements = [];
}

/**
 * Compares `a` and `b`, when `a > b` it returns a positive number, when
 * it returns 0 and when `a < b` it returns a negative number.
 *
 * @param {String|Number} a
 * @param {String|Number} b
 * @return {Number}
 * @api public
 */
PriorityQueue.DEFAULT_COMPARATOR = function(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  } else {
    a = a.toString();
    b = b.toString();

    if (a == b) return 0;

    return (a > b) ? 1 : -1;
  }
};

/**
 * Returns whether the priority queue is empty or not.
 *
 * @return {Boolean}
 * @api public
 */
PriorityQueue.prototype.isEmpty = function() {
  return this.size() === 0;
};

/**
 * Peeks at the top element of the priority queue.
 *
 * @return {Object}
 * @throws {Error} when the queue is empty.
 * @api public
 */
PriorityQueue.prototype.peek = function() {
  if (this.isEmpty()) throw new Error('PriorityQueue is empty');

  return this._elements[0];
};

/**
 * Dequeues the top element of the priority queue.
 *
 * @return {Object}
 * @throws {Error} when the queue is empty.
 * @api public
 */
PriorityQueue.prototype.deq = function() {
  var first = this.peek();
  var last = this._elements.pop();
  var size = this.size();

  if (size === 0) return first;

  this._elements[0] = last;
  var current = 0;

  while (current < size) {
    var largest = current;
    var left = (2 * current) + 1;
    var right = (2 * current) + 2;

    if (left < size && this._compare(left, largest) >= 0) {
      largest = left;
    }

    if (right < size && this._compare(right, largest) >= 0) {
      largest = right;
    }

    if (largest === current) break;

    this._swap(largest, current);
    current = largest;
  }

  return first;
};

/**
 * Enqueues the `element` at the priority queue and returns its new size.
 *
 * @param {Object} element
 * @return {Number}
 * @api public
 */
PriorityQueue.prototype.enq = function(element) {
  var size = this._elements.push(element);
  var current = size - 1;

  while (current > 0) {
    var parent = Math.floor((current - 1) / 2);

    if (this._compare(current, parent) <= 0) break;

    this._swap(parent, current);
    current = parent;
  }

  return size;
};

/**
 * Returns the size of the priority queue.
 *
 * @return {Number}
 * @api public
 */
PriorityQueue.prototype.size = function() {
  return this._elements.length;
};

/**
 *  Iterates over queue elements
 *
 *  @param {Function} fn
 */
PriorityQueue.prototype.forEach = function(fn) {
  return this._elements.forEach(fn);
};

/**
 * Compares the values at position `a` and `b` in the priority queue using its
 * comparator function.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @api private
 */
PriorityQueue.prototype._compare = function(a, b) {
  return this._comparator(this._elements[a], this._elements[b]);
};

/**
 * Swaps the values at position `a` and `b` in the priority queue.
 *
 * @param {Number} a
 * @param {Number} b
 * @api private
 */
PriorityQueue.prototype._swap = function(a, b) {
  var aux = this._elements[a];
  this._elements[a] = this._elements[b];
  this._elements[b] = aux;
};

module.exports.List = List;

function List() {
 List.makeNode = function() {
  return {data: null, next: null};
 };

 this.start = null;
 this.end = null;

 this.add = function(data) {
  if (this.start === null) {
   this.start = List.makeNode();
   this.end = this.start;
  } else {
   this.end.next = List.makeNode();
   this.end = this.end.next;
  } ;
  this.end.data = data;
 };

 this.delete = function(data) {
  var current = this.start;
  var previous = this.start;
  while (current !== null) {
   if (data === current.data) {
    if (current === this.start) {
     this.start = current.next;
     return;
    }
    if (current === this.end)
                      this.end = previous;
    previous.next = current.next; return;
    }
    previous = current;
    current = current.next;
   }
 };

 this.insertAsFirst = function(d) {
  var temp = List.makeNode();
  temp.next = this.start;
  this.start = temp;
  temp.data = d;
 };

 this.insertAfter = function(t, d) {
  var current = this.start;
  while (current !== null) {
   if (current.data === t) {
    var temp = List.makeNode();
    temp.data = d;
    temp.next = current.next;
    if (current === this.end) this.end = temp;
    current.next = temp;
    return;
   }
   current = current.next;
   }
  };

  this.item = function(i) {
   var current = this.start;
   while (current !== null) {
    i--;
    if (i === 0) return current;
    current = current.next;
   }
   return null;
  };

 this.each = function(f) {
  var current = this.start;
  while (current !== null) {
   f(current);
   current = current.next;
  }
 };
}

module.exports.Tree = BinaryTree;

function BinaryTree(){
 this.Nodes = new Array();
 this.level = 0;
 this.node = 0;

 this.setNode = function(value,level,node){
  if (level === undefined) {
  this.Nodes[this.btSMF(this.level, this.node)] = value;
  }else {
   this.Nodes[this.btSMF(level,node)] = value;
  }
 }

 this.getNode = function(level, node){
  if (level === undefined) {
   return this.Nodes[this.btSMF(this.level,this.node)];
  }else {
   return this.Nodes[this.btSMF(level,node)];
  }
 }

 this.root = function(value){
  this.level = 0;
  this.node = 0;
  if (value !== undefined) {
   this.Nodes[this.btSMF(this.level,this.node)] = value;
  }
  return this.Nodes[this.btSMF(this.level,this.node)];
 }

 this.leftChild = function(value){
  this.level++;
  this.node = this.node * 2;
  if (value !== undefined) {
   this.Nodes[this.btSMF(this.level,this.node)] = value;
  }
  return this.Nodes[this.btSMF(this.level,this.node)];
 }

 this.rightChild = function(value){
  this.level++;
  this.node = this.node * 2 + 1;
  if (value !== undefined) {
   this.Nodes[this.btSMF(this.level, this.node)] = value;
  }
  return this.Nodes[this.btSMF(this.level, this.node)];
 }

 this.parent = function(value){
  this.level--;
  this.node = this.node >> 1;
  if (value !== undefined) {
   this.Nodes[this.btSMF(this.level, this.node)] = value;
  }
  return this.Nodes[this.btSMF(this.level,this.node)];
 }

 this.btSMF = function(level, node){
  return node + (1 << level) - 1;
 }
}
