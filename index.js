// Function takes two arrays of non-objects and returns
module exports function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

//Function takes two objects and returns true if their key value pairs are equal 
module exports function objectsEqual(o1,o2){
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
