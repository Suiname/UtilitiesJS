var assert = require('chai').assert,
  expect = require('chai').expect,
  should = require('chai').should,
  sort = require('../index.js').sort,
  PriorityQueue = require('../data.js').PriorityQueue,
  List = require('../data.js').List,
  bubbleSort = sort.bubbleSort,
  selectionSort = sort.selectionSort,
  insertionSort = sort.insertionSort,
  mergeSort = sort.mergeSort;

describe('Data Class', function(){
  describe('PriorityQueue', function() {
    var queue;
    describe('#PriorityQueue', function(){
      it('can create a new PriorityQueue by passing the constructor a function', function() {
        queue = new PriorityQueue(function(a, b) {
          return a.cash - b.cash;
        });
        assert.deepEqual(typeof queue, 'object', 'constructor should return an object')
      })
    })
    function makeNewQ(){
      queue = new PriorityQueue(function(a, b) {
        return a.cash - b.cash;
      });
    }
    function enqueue(){
      if (queue === undefined) {
        makeNewQ();
      }
      queue.enq({})
    }
    describe('#enq', function() {
      it('can enqueue an object with the enq method and not throw an error', function() {
        makeNewQ();
        assert.doesNotThrow(enqueue, Error, 'enq does not throw an error');
      })
      it('can hold multiple objects by calling enq again', function(){
        makeNewQ();
        enqueue();
        assert.deepEqual(queue.size(), 1, 'should be equal to 1')
        enqueue();
        assert.deepEqual(queue.size(), 2, 'should now be equal to 2');
      })
      it('returns the size of the queue', function(){
        makeNewQ();
        assert.deepEqual(queue.size(), 0, 'should be equal to 0, queue is empty')
        assert.deepEqual(queue.enq({}), 1, 'should return 1, queue has 1 object')
      })
    })
    describe('#peek', function(){
      it('Throws an error on an empty queue', function() {
        function emptyPeek(){
          makeNewQ();
          queue.peek();
        }
        assert.throws(emptyPeek, Error, 'PriorityQueue is empty');
      })
      it('will show the last object in the queue', function(){
        makeNewQ();
        queue.enq(1);
        assert.deepEqual(queue.peek(), 1, 'These should be equal to 1');
        queue.enq(2);
        assert.deepEqual(queue.peek(), 2, 'These should be equal to 2')
      })
    })
    describe('#size', function(){
      it('returns 0 for an empty queue', function(){
        makeNewQ();
        assert.deepEqual(queue.size(), 0, 'should be equal to 0');
      })
      it('can see number of objects in queue with size method', function(){
        enqueue();
        assert.deepEqual(queue.size(), 1, 'should be equal to 1');
        enqueue();
        assert.deepEqual(queue.size(), 2, 'should be equal to 2');
      })
    })
    describe('#deq', function(){
      function dq(){
        queue.deq();
      }
      it('can remove an item from the queue', function(){
        makeNewQ();
        enqueue();
        assert.deepEqual(queue.size(), 1, 'should be equal to 1');
        dq();
        assert.deepEqual(queue.size(), 0, 'should be equal to 0');
      })
      it('returns an undefined value', function() {
        enqueue();
        assert.deepEqual(dq(), undefined, 'should be equal');
      })
    })
  })

  describe("List", function(){
    var list;
    function NewList(){
      list = new List();
    }
    describe("#List", function(){
      it('can create a new List object using the constructor', function(){
        NewList();
        assert.isObject(list, 'list is an object');
      })
      it('returns an undefined value', function(){
        assert.isUndefined(List(), "Constructor should return undefined")
      })
      it('creates an object with null properties start and end', function(){
        NewList();
        assert.propertyVal(list, 'start', null);
        assert.propertyVal(list, 'end', null);
      })
      it('creates an object with methods add, delete, insertAsFirst, insertAfter, item, and each', function(){
        NewList();
        var methods = ['add', 'delete', 'insertAfter', 'insertAsFirst', 'item', 'each'];
        for (var method in methods) {
          assert.isFunction(list[methods[method]], methods[method] + " should be a function");
        }
      })
    })
  })
});
