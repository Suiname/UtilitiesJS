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

module.exports = {bubbleSort, selectionSort};
