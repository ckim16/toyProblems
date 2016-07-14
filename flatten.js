'use strict';
function flatten(input) {
  var result = [];
  if(!Array.isArray(input)) {
    return false;
  }

  function recursion(array) {
    for(var i = 0; i < array.length; i++) {
      if(!Array.isArray(array[i])) {
        result.push(array[i]);
      } else {
        recursion(array[i]);
      }
    }
  }
  recursion(input);
  return result;
}