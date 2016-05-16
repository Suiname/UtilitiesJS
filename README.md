### Utilities Library

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
