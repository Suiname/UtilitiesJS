var assert = require('chai').assert,
  expect = require('chai').expect,
  should = require('chai').should,
  utils = require('../index.js'),
  objectsEqual = utils.objectsEqual;
  randomInt = utils.randomInt;
  bubbleSort = utils.sort.bubbleSort;
  selectionSort = utils.sort.selectionSort;



// console.log(utils.objectsEqual([1,2,[1,2],{"what": 'is this'}],[1,2,[1,2],{"what": 'is this'}]));
describe('#objectsEqual', function(){
  var obj1 = {"name": "Jason", "job": "coding"},
    obj2 = {"name": "Jason", "job": "coding"},
    obj3 = {"name": "Jason", "job": "not coding"},
    obj4 = {"first": obj1, "second": obj2, "third": { first: obj1, second: obj2}, fourth: [1,2,3]},
    obj5 = {"first": obj1, "second": obj2, "third": { first: obj1, second: obj2}, fourth: [1,2,3]},
    obj6 = {"first": obj2, "second": obj1, "third": { first: obj4, second: obj2}, fourth: [1,3]},
    obj7 = {"what": "Jason", "job": "coding"};


  it('takes two objects and returns true or false', function(){
    assert.isBoolean(objectsEqual(obj1, obj2), "This better be a boolean")
  });
  it('takes two objects that have the same key value pairs and returns true', function(){
    assert.isTrue(objectsEqual(obj1,obj2), "This will be true")
  });
  it('takes two objects that have different key value pairs and returns false', function(){
    assert.isFalse(objectsEqual(obj1,obj3), "This will be false")
  });
  it('takes two identical objects with nested key value pairs and returns true', function(){
    assert.isTrue(objectsEqual(obj4,obj5), "This will be true")
  });
  it('takes two different objects with nested key value pairs and returns false', function(){
    assert.isFalse(objectsEqual(obj5,obj6), "This will be false")
  });
  it('takes two different objects with the same values but different keys and returns false', function(){
    assert.isFalse(objectsEqual(obj2, obj7), "This will be false")
  })
})

describe('#randomInt', function(){
  var oneToTen = [1,2,3,4,5,6,7,8,9,10];
  it('takes two numbers and returns a number', function(){
    assert.isNumber(randomInt(1,2), "This should be a number");
  })
  it('returns a number between the two parameters given', function(){
    var result = randomInt(1,5);
    assert.isAtLeast(result, 1, "Result should be greater or equal to 1")
    assert.isAtMost(result, 5, "Result should be less then or equal to 5")
  })
  it('generates a random number between the two parameters given', function(){
    var result = randomInt(1,10);
    assert.include(oneToTen, result, "Result should exist in array of integers 1 to 10")
  })
  it('Throws an error when the minimum param is greater than the maximum param', function(){
    function callWrong(){
      randomInt(2,1)
    }
    expect(callWrong).to.throw(RangeError, /Minimum must be less than or equal to Maximum/);
  })
})

describe('#bubbleSort', function(){
  var notSorted = [1,9,4,5,6,2,10,3,8,7];
  var sorted = [1,2,3,4,5,6,7,8,9,10];
  it('takes an unsorted array and sorts it', function(){
    bubbleSort(notSorted);
    assert.deepEqual(sorted, notSorted, "This should return true");
  })
})

describe('#selectionSort', function(){
  var notSorted = [1,9,4,5,6,2,10,3,8,7];
  var sorted = [1,2,3,4,5,6,7,8,9,10];
  it('takes an unsorted array and sorts it', function(){
    selectionSort(notSorted);
    assert.deepEqual(sorted, notSorted, "This should return true");
  })
})
