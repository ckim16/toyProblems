'use strict';
function findDuplicate(array) {
  var hist = {};
  for(var i = 0; i < array.length; i++) {
    if(!hist[array[i]]) {
      hist[array[i]] = 1;
    } else {
      return array[i];
    }
  }
  return 0;
}