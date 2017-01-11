'use strict';
function addNumInArr(arr1, arr2) {
  var carry = 0;
  var len = (arr1.length > arr2.length) ? arr1.length : arr2.length;
  var result = [];
  for(var i = 0; i < len; i++) {
    var sum = carry + (arr1[i] === undefined ? 0 : arr1[i]) + (arr2[i] === undefined ? 0 : arr2[i]);

    if (sum >= 10) {
      carry = 1;
    } else {
      carry = 0;
    }

    sum = sum % 10;

    result.push(sum);
  }
  if (carry === 1) {
    result.unshift(1);
  }
  return result;
}

console.log(addNumInArr([1,2,3], [1,1,1,1]))