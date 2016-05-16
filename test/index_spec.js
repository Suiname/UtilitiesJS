var assert = require('chai').assert,
  utils = require('../index.js'),
  objectsEqual = utils.objectsEqual;



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
  it('takes two identical objects with nested key value pairs and returns false', function(){
    assert.isTrue(objectsEqual(obj4,obj5), "This will be true")
  });
  it('takes two different objects with nested key value pairs and returns false', function(){
    assert.isFalse(objectsEqual(obj5,obj6), "This will be false")
  });
  it('takes two different objects with the same values but different keys and returns false', function(){
    assert.isFalse(objectsEqual(obj2, obj7), "This will be false")
  })
})
