'use strict';
function bubbleSort(array) {
  var temp;
  for(var i = 0; i < array.length; i++) {
    for(var j = i+1; j < array.length; j++) {
      if(array[i] > array[j]) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  console.log('array', array);
  return array;
};
