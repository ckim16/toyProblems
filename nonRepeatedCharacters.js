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

// different solution

function nrcOpt(str) {
  var startIdx = 0;
  var endIdx = str.length-1;
  var storage = [];

  while (startIdx < endIdx && startIdx < Math.floor(str.length/2)) {
    if (str.charAt(startIdx) === str.charAt(endIdx)) {
      startIdx++;
      endIdx = str.length-1;
      storage = [];
    } else {
      storage.push(str.charAt(startIdx));
      endIdx--;
    }
  }
  console.log('storage', storage);
  return storage[0] || 'sorry';
}
