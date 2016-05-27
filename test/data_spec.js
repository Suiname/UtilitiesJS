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
    describe("#add", function(){
      it('adds a node to an empty list', function(){
        NewList();
        assert.isNull(list.end, 'Will be null');
        list.add();
        assert.isNotNull(list.end, "Will not be null")
      })
      it('sets the data value of the added node to whatever is passed as a param', function(){
        NewList();
        var NewValue = "New Value"
        list.add(NewValue);
        assert.deepEqual(list.end.data, NewValue, "These should be the same object");
      })
      it('adds a node to the end of a non-empty list', function(){
        NewList();
        var FirstItem = "First Item",
          LastItem = "Last Item";
        list.add(FirstItem);
        assert.deepEqual(list.end.data, FirstItem, "Adds a node with the First Item as the data");
        list.add(LastItem);
        assert.deepEqual(list.start.data, FirstItem, "FirstItem will now be first in the list");
        assert.deepEqual(list.end.data, LastItem, "LastItem added to end of the list");
      })
    })
    describe("#delete", function(){
      it('traverses the List and removes the node with data property that equals the argument given', function() {
        NewList();
        var Data = "Data"
        list.add(Data);
        assert.deepEqual(list.start.data, Data, "Added Data to List");
        list.delete(Data);
        assert.isNull(list.start, "Node with data === Data is removed");
      })
      it('does not change a List that does not contain the argument given', function(){
        var listBeforeDelete = {}, listAfterDelete = {};
        NewList();
        var Data = "Data";
        list.add(1);
        list.add(2);
        Object.assign(listBeforeDelete, list);
        list.delete(Data);
        Object.assign(listAfterDelete, list);
        assert.deepEqual(listBeforeDelete, listAfterDelete, "These should be the same")
      });
    })
    describe("#insertAsFirst", function(){
      it('inserts a node into an empty list', function () {
        NewList();
        list.insertAsFirst(Data = "Data");
        assert.propertyVal(list.start, "data", Data);
      })
      it('inserts a node with data into the start of a non-empty list', function () {
        NewList();
        list.add(1);
        list.add(2);
        assert.propertyVal(list.start, "data", 1); //added 1 to the list first
        list.insertAsFirst(Data = "Data");
        assert.propertyVal(list.start, "data", Data);
      })
      it('pushes the node at the start of the list to the next position in the list', function(){
        NewList();
        list.add(1);
        var oneNode = list.start;
        assert.propertyVal(list.start, "next", null); // only 1 item in the list, next should be null
        list.insertAsFirst(Data = "Data");
        assert.propertyVal(list.start, "next", oneNode); //oneNode should now be next node from the first start of the list
      })
    })
  })
});
