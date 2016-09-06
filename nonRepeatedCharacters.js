'use strict';
// return the first non-repeating character
function nonRepeatedCharacters(string) {
  var hist = {};
  var strArr = string.split('');
  strArr.reduce(function(accum, item) {
    if(!accum[item]) {
      accum[item] = 1;
    } else {
      accum[item]++;
    }
    return accum;
  }, hist);
  
  for(var i = 0; i < strArr.length; i++) {
    if(hist[strArr[i]] === 1) {
      return strArr[i];
    } 
  }
  return 'sorry';
}