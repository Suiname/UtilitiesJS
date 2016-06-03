  var assert = require('chai').assert,
  expect = require('chai').expect,
  should = require('chai').should,
  sort = require('../index.js').sort,
  PriorityQueue = require('../data.js').PriorityQueue,
  List = require('../data.js').List,
  Tree = require('../data.js').Tree,
  bubbleSort = sort.bubbleSort,
  selectionSort = sort.selectionSort,
  insertionSort = sort.insertionSort,
  mergeSort = sort.mergeSort;

describe('Data Class', function(){
  describe('PriorityQueue', function() {
    var queue;
    describe('#PriorityQueue', function(){
      it('can create a new PriorityQueue Object by passing the constructor a function', function() {
        queue = new PriorityQueue(function(a, b) {
          return a.cash - b.cash;
        });
        assert.isObject(queue, 'constructor should return an object')
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
        queue.enq({});
        assert.deepEqual(queue.size(), 1, 'should be equal to 1')
        queue.enq({});
        assert.deepEqual(queue.size(), 2, 'should now be equal to 2');
      })
      it('returns the size of the queue', function(){
        makeNewQ();
        assert.deepEqual(queue.size(), 0, 'should be equal to 0, queue is empty')
        assert.deepEqual(queue.enq({}), 1, 'should return 1, queue has 1 object')
      })
      it('inserts into the queue based on the comparator', function () {
        makeNewQ();
        var cash100 = {cash: 100}
        var cash200 = {cash: 200}
        queue.enq(cash100);
        queue.enq(cash200); // since 2nd object.cash > 1st object.cash, it should be inserted first in queue
        assert.deepEqual(queue.deq(), cash200, "cash200 should be given priority based on cash value")
      })
      it('takes an object that is evaluated as equal by the comparator and inserts it after the object already in the queue', function () {
        makeNewQ();
        var John = {name: "John", cash: 100}
        var James = {name: "James", cash: 100} // John and James have equal cash values, so comparator will find them equal
        queue.enq(John);
        queue.enq(James);
        assert.deepEqual(queue.deq(), John, "John was inserted first, so John is dequeued first")
      })
      it('inserts objects that are undefined by comparator and inserts them last in, first out', function () {
        makeNewQ();
        queue.enq(1);
        queue.enq(2);
        assert.deepEqual(queue.deq(), 2, "1 and 2 are both undefined, so 2 comes out first since it was inserted last");
      })
      it('inserts objects that are defined by comparator before objects undefined by comparator', function () {
        makeNewQ();
        queue.enq(1);
        queue.enq(2);
        queue.enq({cash:100});
        assert.deepEqual(queue.deq(), {cash:100}, "1 and 2 are both undefined, so a defined object comes out first");
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
      it('will show the first object in the queue', function(){
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
      it('removes object at the front of the queue', function () {
        makeNewQ();
        queue.enq(1);
        queue.enq(2);
        assert.deepEqual(queue.deq(), 2, "dequeues first object in queue")
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
      var Data = "Data"
      it('inserts a node into an empty list', function () {
        NewList();
        list.insertAsFirst(Data);
        assert.propertyVal(list.start, "data", Data);
      })
      it('inserts a node with data into the start of a non-empty list', function () {
        NewList();
        list.add(1);
        list.add(2);
        assert.propertyVal(list.start, "data", 1); //added 1 to the list first
        list.insertAsFirst(Data);
        assert.propertyVal(list.start, "data", Data);
      })
      it('pushes the node at the start of the list to the next position in the list', function(){
        NewList();
        list.add(1);
        var oneNode = list.start;
        assert.propertyVal(list.start, "next", null); // only 1 item in the list, next should be null
        list.insertAsFirst(Data);
        assert.propertyVal(list.start, "next", oneNode); //oneNode should now be next node from the first start of the list
      })
    })
    describe("#insertAfter", function(){
      var Data = "Data"
      var Data2 = "Data2"
      it('finds a node in the list with data equal to 1st argument then inserts a new node after it that has data equal to 2nd argument', function () {
        NewList();
        list.add(Data); //add node with data= Data
        list.insertAfter(Data, Data2); //insert node with Data2 after node with data = Data
        assert.propertyVal(list.start, "data", Data); // first node should be data = Data
        assert.propertyVal(list.end, "data", Data2); // second node should be data = Data2
      })
      it('does nothing if Data cannot be found in the list', function () {
        NewList();
        var listBeforeInsert = {}, listAfterInsert={};
        list.add(Data);
        Object.assign(listBeforeInsert, list);
        list.insertAfter("Data that doesn't exist", Data2);
        Object.assign(listAfterInsert, list);
        assert.deepEqual(listBeforeInsert, listAfterInsert, "These should be equal");
      })
      it('inserts after the first data match if multiple matches exist in the list', function () {
        NewList();
        list.add(Data);
        list.add(Data);
        list.add(Data);
        // List now contains 3 nodes with data = Data;
        list.insertAfter(Data, Data2);
        assert.deepEqual(list.end.data, Data, "The last item in the list should have data = Data")
        assert.deepEqual(list.start.next.data, Data2, "These should be equal");
      })
    })
    describe('#item', function () {
      it('takes an integer argument and returns the node at that position of the list', function () {
        NewList();
        list.add("one");
        assert.deepEqual(list.item(1), {data:'one', next:null}, "The first and only list item should be an {} with data of 'one'")
      })
      it('returns null if the list item does not exist', function(){
        NewList();
        assert.isNull(list.item(1), "List is empty, so this will return null")
      })
    })
    describe('#each', function () {
      it('takes a function with a single parameter and runs it on each node in the list, passing each node as the argument', function(){
        function squareData(node){
          node.data *= node.data;
        }
        NewList();
        list.add(2)
        list.add(4)
        assert.deepEqual(list.item(1).data, 2, "This will be 2");
        assert.deepEqual(list.item(2).data, 4, "This will be 4");
        list.each(squareData);
        assert.deepEqual(list.item(1).data, 4, "This will be 4 (2 squared)");
        assert.deepEqual(list.item(2).data, 16, "This will be 16 (4 squared)");
      })
    })
  })
  describe("Tree", function () {
    describe("#Tree", function () {
      it('creates a Tree Object with properties of level, node, and Nodes', function () {
        var tree = new Tree();
        assert.isObject(tree, "This should be an object");
        assert.property(tree, 'level');
        assert.property(tree, 'node');
        assert.property(tree, 'Nodes');
      })
    })
    var tree;
    function NewTree(){
      tree = new Tree();
    }
    describe("#setNode", function () {
      it('takes 3 arguments: value, level, and node and sets the value of the node at the specified level', function () {
        NewTree();
        tree.setNode("Value", 1, 1);
        assert.deepEqual(tree.getNode(1,1), "Value", "getNode should return the value at 1,1 which we just set");
      })
      it('overwrites an existing value if the node already has a value', function(){
        NewTree();
        tree.setNode("Value", 1, 1);
        assert.deepEqual(tree.getNode(1,1), "Value", "Value was set as 'Value'");
        tree.setNode("New Value", 1, 1);
        assert.deepEqual(tree.getNode(1,1), "New Value", "'New Value' should have been set at node 1,1");
      })
      it('if given only 1 argument, writes the value to the current level and node', function () {
        NewTree();
        tree.node = 2;
        tree.level = 2;
        tree.setNode("Two");
        assert.deepEqual(tree.getNode(2,2), "Two", "node and level were both 2, so node 2,2 should be set to 'Two'");
      })
    })
    describe("#getNode", function () {
      it('takes 2 arguments: level and node and returns the value of the tree at the level and node', function () {
        NewTree();
        tree.setNode("Two", 2, 2);
        assert.deepEqual(tree.getNode(2,2), "Two", "getNode should return the value at 2,2 which we set to Two");
      })
      it('returns value at current level and node if given no arguments', function () {
        NewTree();
        tree.setNode("Two", 2, 2);
        tree.level = 2;
        tree.node = 2;
        assert.deepEqual(tree.getNode(), "Two", "This should return Two");
      })
    })
    describe('#root', function () {
      it('sets the level and node of the tree to 0', function () {
        NewTree();
        tree.level = 2;
        tree.node = 2;
        assert.deepEqual(tree.level, 2, "Should now be set to 2")
        assert.deepEqual(tree.node, 2, "Should now be set to 2")
        tree.root();
        assert.deepEqual(tree.level, 0, "Should now be set to 0")
        assert.deepEqual(tree.node, 0, "Should now be set to 0")
      })
      it('returns the value of the root node when given no arguments', function () {
        NewTree();
        tree.setNode("Root", 0, 0)
        assert.deepEqual(tree.root(), "Root", "Value of root node should be string 'Root'");
      })
      it('sets the value of the root node to the argument given', function () {
        NewTree();
        assert.isUndefined(tree.root(), "Value not set, should be undefined");
        tree.root(1);
        assert.deepEqual(tree.root(), 1, "Value set to 1, .root() should now return 1")
      })
    })
    describe('#leftChild', function () {
      it('sets the value of node and level to the location of the left child', function () {
        NewTree();
        tree.root("Root");
        tree.setNode("Left Child",1,0);
        tree.setNode("Right Child",1,1);
        assert.propertyVal(tree, 'node', 0, "We are at the Root so node and level should be 0");
        assert.propertyVal(tree, 'level', 0, "We are at the Root so node and level should be 0");
        tree.leftChild();
        assert.propertyVal(tree, 'node', 0, "We are at the left child so node should be 0");
        assert.propertyVal(tree, 'level', 1, "We are at the left child so level should be 1");
      })
      it('returns the value of the left child of the current node if not passed an argument', function () {
        NewTree();
        tree.root("Root");
        tree.setNode("Left Child",1,0);
        tree.setNode("Right Child",1,1);
        assert.deepEqual(tree.leftChild(), "Left Child", "This was set to the string 'Left Child'");
      })
      it('sets the value of the left child of the current node if passed an argument', function () {
        NewTree();
        tree.root("Root");
        tree.setNode("Incorrect",1,0); // set the left child's value to "Incorrect"
        tree.setNode("Right Child",1,1);
        assert.deepEqual(tree.leftChild(), "Incorrect", "We set this value to the string 'Incorrect'");
        tree.root(); //set the current node back to the root
        tree.leftChild("Left Child"); // setting the Left Child of the root aka node(1,0) to the value "Left Child"
        assert.deepEqual(tree.getNode(1,0), "Left Child", "We set the value to the string 'Left Child'");
      })
    })
    describe('#rightChild', function () {
      it('sets the value of node and level to the location of the right child', function () {
        NewTree();
        tree.root("Root");
        tree.setNode("Left Child",1,0);
        tree.setNode("Right Child",1,1);
        assert.propertyVal(tree, 'node', 0, "We are at the Root so node and level should be 0");
        assert.propertyVal(tree, 'level', 0, "We are at the Root so node and level should be 0");
        tree.rightChild();
        assert.propertyVal(tree, 'node', 1, "We are at the right child so node should be 1");
        assert.propertyVal(tree, 'level', 1, "We are at the right child so level should be 1");
      })
      it('returns the value of the right child of the current node if not passed an argument', function () {
        NewTree();
        tree.root("Root");
        tree.setNode("Left Child",1,0);
        tree.setNode("Right Child",1,1);
        assert.deepEqual(tree.rightChild(), "Right Child", "This was set to the string 'Right Child'");
      })
      it('sets the value of the right child of the current node if passed an argument', function () {
        NewTree();
        tree.root("Root");
        tree.setNode("Left Child",1,0); // set the left child's value to "Incorrect"
        tree.setNode("Incorrect",1,1);
        assert.deepEqual(tree.rightChild(), "Incorrect", "We set this value to the string 'Incorrect'");
        tree.root(); //set the current node back to the root
        tree.rightChild("Right Child"); // setting the Left Child of the root aka node(1,0) to the value "Left Child"
        assert.deepEqual(tree.getNode(1,0), "Left Child", "We set the value to the string 'Right Child'");
      })
    })
    describe("#parent", function () {
      it('sets the value of node and level to the location of the parent node', function () {
        NewTree();
        tree.root("Root");
        tree.setNode("Left Child",1,0);
        tree.setNode("Right Child",1,1);
        tree.rightChild(); // set location to right child
        assert.propertyVal(tree, 'node', 1, "location was set to right child, so node and level should be 1")
        assert.propertyVal(tree, 'level', 1, "location was set to right child, so node and level should be 1")
        tree.parent(); // set location to parent
        assert.propertyVal(tree, 'node', 0, "location was set to parent of right child, so node and level should be 0")
        assert.propertyVal(tree, 'level', 0, "location was set to parent of right child, so node and level should be 0")
      })
      it('returns the value of the parent node if not given an argument', function () {
        NewTree();
        tree.root("Root");
        tree.setNode("Left Child",1,0);
        tree.setNode("Right Child",1,1);
        tree.rightChild(); // set location to right child
        assert.deepEqual(tree.parent(), "Root", "Will return the value of the parent node, which is 'Root'");
      })
      it('sets the value of the parent node if passed an argument', function () {
        NewTree();
        tree.root("Incorrect");
        tree.setNode("Left Child",1,0);
        tree.setNode("Right Child",1,1);
        assert.deepEqual(tree.root(), "Incorrect", "Value of root node initially set to 'Incorrect'");
        tree.rightChild(); // set location to right child
        tree.parent("Root"); // set parent value to Root
        assert.deepEqual(tree.root(), "Root", "Value of root node was set to 'Root'");
      })
    })
  })
});
