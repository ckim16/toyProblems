'use strict';
function characterFrequency(str) {
  var arr = str.split('');
  var sorted = arr.reduce(function(accum, value) {
    if(!accum[value]) {
      accum[value] = 1;
    } else {
      accum[value] += 1;
    }
    return accum;
  }, {});
  
  var result = [];
  for(var key in sorted) {
    result.push([key, sorted[key]]);
  }
  result.sort(function(a, b) {
    if(a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  });
}