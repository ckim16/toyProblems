'use strict';
function firstFactorial(num) {
  if(num === 1) {
    return 1;
  }
  return num * firstFactorial(num-1);
}