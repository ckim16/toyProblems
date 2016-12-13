'use strict';
//helper function
function isSubstring(big, small) {
  if (big.indexOf(small) >= 0) {
    return true;
  } else {
    return false;
  }
}

function isRotational(str1, str2) {
  var str1Concat = str1 + str1;

  if (isSubstring(str1Concat, str2)) {
    return true;
  } else {
    return false;
  }
}

console.log(isRotational('waterbottle', 'erbottlewat'));