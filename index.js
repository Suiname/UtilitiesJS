function objectsEqual(o1, o2) {
	if (typeof o1 !== typeof o2)
		return false

	if (typeof o1 === 'object') {
		var k1 = Object.keys(o1);
		var k2 = Object.keys(o2);
		if (k1.length !== k2.length)
			return false
    for (var i = 0; i < k1.length; i++) {
      if (k1[i] !== k2[i]) {
        return false
      }
    }
		for (var i = 0; i < k1.length; i++) {
			if (! objectsEqual(o1[k1[i]], o2[k2[i]]))
      	return false
		}
    return true
	}
	else
		return o1 === o2
}

function randomInt(min, max) {
  if (min <= max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    throw new RangeError("Minimum must be less than or equal to Maximum")
  }
}

function bubbleSort(arr) {
  var swapped = true;
  var tmp, j=0;
  while (swapped) {
    swapped = false
    j++;
    for (var i = 0; i < arr.length - j; i++){
      if(arr[i] > arr[i+1]){
        tmp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = tmp;
        swapped = true;
      }
    }
  }
}

function selectionSort(arr){
  var minIdx, temp,
      len = arr.length;
  for(var i = 0; i < len; i++){
    minIdx = i;
    for(var  j = i+1; j<len; j++){
       if(arr[j]<arr[minIdx]){
          minIdx = j;
       }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}

module.exports = {objectsEqual, randomInt, bubbleSort, selectionSort};
