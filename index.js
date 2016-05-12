// Function takes two arrays of non-objects and returns
function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

//Function takes two objects and returns true if their key value pairs are equal
function objectsEqual(o1,o2){
  var keys1 = Object.keys(o1);
  var keys2 = Object.keys(o2);
  if(!arraysEqual(keys1,keys2)) {
    console.log("keys not equal");
    return false
  }
  for(var i = 0; i < keys1.length; i++){
    if(o1[keys1[i]] != o2[keys1[i]]){
      console.log("value of " + keys1[i] + " not equal");
      return false;
    }
  }
  return true
}

function arraysDeepEqual(arr1, arr2){
  if(arr1.length !== arr2.length){
    console.log("Length not equal");
    return false;
  }
  for(var i = arr1.length; i--;) {
    if (typeof arr1[i] !== 'object') {
      if(arr1[i] !== arr2[i]){
        return false;
      }
    } else {
      if(!arraysDeepEqual(arr1[i], arr2[i])){
        return false;
      }
    }
  }
  return true;
}

function objectsDeepEqual(o1, o2){
  var keys1 = Object.keys(o1);
  var keys2 = Object.keys(o2);
  if(keys1.length !== keys2.length){
    console.log("Keys not equal");
    return false;
  }
  for(var i = keys1.length; i--;) {
    if (typeof o1[keys1[i]] !== 'object') {
      if(o1[keys1[i]] !== o2[keys2[i]]){
        console.log("Value not equal");
        return false;
      }
    } else {
      console.log("keys1[i]", keys1[i]);
      console.log("keys2[i]", keys2[i]);
      if(!objectsDeepEqual(o1[keys1[i]],o2[keys2[i]])){
        return false;
      }
    }
  }
  return true;
}
module.exports = {arraysEqual, arraysDeepEqual, objectsEqual, objectsDeepEqual};
