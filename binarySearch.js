'use strict';
function binarySearch(array, target) {
 
  function recurse(low, high) {
    var middle = Math.floor((low + high)/2);
    if(low > high) {
      return -1;
    }

    if(array[middle] === target) {
      return middle;
    } else if (array[middle] < target) {
      recurse(middle+1, high);
    } else if (array[middle] > target) {
      recurse(low, middle-1);
    }
  }
  return recurse(0, array.length-1); 
}