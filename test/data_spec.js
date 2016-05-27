var assert = require('chai').assert,
  expect = require('chai').expect,
  should = require('chai').should,
  sort = require('../index.js').sort,
  PriorityQueue = require('../data.js');
  bubbleSort = sort.bubbleSort;
  selectionSort = sort.selectionSort;
  insertionSort = sort.insertionSort;
  mergeSort = sort.mergeSort;

describe('Data Class', function(){
  describe('#PriorityQueue', function() {
    var queue;
    it('can create a new PriorityQueue by passing the constructor a function', function() {
      queue = new PriorityQueue(function(a, b) {
        return a.cash - b.cash;
      });
      assert.deepEqual(typeof queue, 'object', 'constructor should return an object')
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
        assert.deepEqual(queue.size(), 1, 'should be equal to 1')
        queue.enq({});
        assert.deepEqual(queue.size(), 2, 'should now be equal to 2');
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
        queue.enq({});
        assert.deepEqual(queue.size(), 1, 'should be equal to 1');
        queue.enq({});
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
      enqueue()
      console.log(dq());
    })
  })
});
