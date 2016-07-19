'use strict';
function sumArray(array) {
  var greatest = array[0];
  var sum = 0;
  for(var i = 0; i < array.length; i++) {
    sum = array[i];
    for(var j = i+1; j < array.length; j++) {
      sum += array[j];
      if(sum > greatest) {
        greatest = sum;
      }
    }
  }
  return greatest;
}