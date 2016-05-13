function objectsEqual(o1, o2){
  var keys1 = Object.keys(o1);
  var keys2 = Object.keys(o2);
  if(keys1.length !== keys2.length){
    return false;
  }
  for(var i = keys1.length; i--;) {
    if (typeof o1[keys1[i]] !== 'object') {
      if(o1[keys1[i]] !== o2[keys2[i]]){
        return false;
      }
    } else {
      if(!objectsEqual(o1[keys1[i]],o2[keys2[i]])){
        return false;
      }
    }
  }
  return true;
}
module.exports = {objectsEqual};
