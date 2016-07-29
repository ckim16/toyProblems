'use strict';
function largestProductOfThree(array) {
  array.sort(function(a, b) {
    return b-a;
  });
  
  var productOfFirstThree = array[0] * array[1] * array[2];
  var productOfLastThree = array[array.length-1] * array[array.length-2] * array[array.length-3];
  var productofFirstAndLastTwo = array[0] * array[array.length-1]; * array[array.length-2];

  return Math.max(productOfFirstThree, productOfLastThree, productofFirstAndLastTwo);
}