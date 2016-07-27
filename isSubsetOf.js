'use strict';
Array.prototype.isSubsetOf = function(inputArray) {
  var exist = true;
  for(var i = 0; i < this.length; i++) {
    if(inputArray.indexOf(this[i]) === -1) {
      exist = false;
    }
  }
  return exist;
}