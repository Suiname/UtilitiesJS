var assert = require('chai').assert,
  expect = require('chai').expect,
  should = require('chai').should,
  utils = require('../index.js'),
  bubbleSort = utils.sort.bubbleSort,
  selectionSort = utils.sort.selectionSort,
  insertionSort = utils.sort.insertionSort,
  mergeSort = utils.sort.mergeSort;

describe('Sort Class', function(){
  describe('#bubbleSort', function(){
    var notSorted = [1,9,4,5,6,2,10,3,8,7];
    var sorted = [1,2,3,4,5,6,7,8,9,10];
    it('takes an unsorted array and sorts it', function(){
      assert.notDeepEqual(sorted,notSorted, "This should return false")
      bubbleSort(notSorted);
      assert.deepEqual(sorted, notSorted, "This should return true");
    })
  })

  describe('#selectionSort', function(){
    var notSorted = [1,9,4,5,6,2,10,3,8,7];
    var sorted = [1,2,3,4,5,6,7,8,9,10];
    it('takes an unsorted array and sorts it', function(){
      assert.notDeepEqual(sorted,notSorted, "This should return false")
      selectionSort(notSorted);
      assert.deepEqual(sorted, notSorted, "This should return true");
    })
  })

  describe('#insertionSort', function(){
    var notSorted = [1,9,4,5,6,2,10,3,8,7];
    var sorted = [1,2,3,4,5,6,7,8,9,10];
    it('takes an unsorted array and sorts it', function(){
      assert.notDeepEqual(sorted,notSorted, "This should return false")
      insertionSort(notSorted);
      assert.deepEqual(sorted, notSorted, "This should return true");
    })
  })

  describe('#mergeSort', function(){
    var notSorted = [1,9,4,5,6,2,10,3,8,7];
    var sorted = [1,2,3,4,5,6,7,8,9,10];
    it('takes an unsorted array and sorts it', function(){
      assert.notDeepEqual(sorted,notSorted, "This should return false")
      mergeSort(notSorted);
      assert.deepEqual(sorted, notSorted, "This should return true");
    })
  })

})
