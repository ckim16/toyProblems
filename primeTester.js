'use strict';
function primeTester(num) {
  if(num === 2) {
    return true;
  }
  for(var i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}