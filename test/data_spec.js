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
    var queue = new PriorityQueue(function(a, b) {
      return a.cash - b.cash;
    });
    function enqueue(){
      queue.enq({})
    }
    it('can enqueue an object with the enq method and not throw an error', function() {
      assert.doesNotThrow(enqueue, Error, 'enq does not throw an error');
    })
    it('can see the last enqueued object with the peek method', function() {
      assert.deepEqual(queue.peek(), {}, 'These should be equal; both {}');
    })
    it('can see size of queue with size method', function(){
      assert.deepEqual(queue.size(), 1, 'should be equal to 1');
    })
    it('can hold multiple objects by calling enq again', function(){
      queue.enq({});
      assert.deepEqual(queue.size(), 2, 'should now be equal to 2');
    })
  })
});
