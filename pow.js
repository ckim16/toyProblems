'use strict';
function pow(num, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return num;
  }
  var n = num;
  var iter = 2;
  while(iter <= exp) {
    num *= n;
    iter++;
  }

  return num;
}