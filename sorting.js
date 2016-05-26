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


function insertionSort(arr) {

    var len     = arr.length,     // number of items in the array
        value,                      // the value currently being compared
        i,                          // index into unsorted section
        j;                          // index into sorted section

    for (i=0; i < len; i++) {

        // store the current value because it may shift later
        value = arr[i];

        /*
         * Whenever the value in the sorted section is greater than the value
         * in the unsorted section, shift all items in the sorted section over
         * by one. This creates space in which to insert the value.
         */
        for (j=i-1; j > -1 && arr[j] > value; j--) {
            arr[j+1] = arr[j];
        }

        arr[j+1] = value;
    }

    return arr;
}

function mergeSort(arr){

    if (arr.length < 2) {
        return arr;
    }

    var middle = Math.floor(arr.length / 2),
        left    = arr.slice(0, middle),
        right   = arr.slice(middle),
        params = merge(mergeSort(left), mergeSort(right));

    // Add the arguments to replace everything between 0 and last item in the array
    params.unshift(0, arr.length);
    arr.splice.apply(arr, params);
    return arr;
}

function merge(left, right){
    var result  = [],
        il      = 0,
        ir      = 0;

    while (il < left.length && ir < right.length){
        if (left[il] < right[ir]){
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }

    return result.concat(left.slice(il)).concat(right.slice(ir));
}

module.exports = {bubbleSort, selectionSort, insertionSort, mergeSort};
