'use strict';
function nthFibonacci(n) {
  var first = 0;
  var second = 1;
  var sum = 0;
  var iter = 2;
  if(n === 0) {
    return first;
  }
  if(n === 1) {
    return second;
  }
  while(iter <= n) {
    sum = second + first;
    first = second;
    second = sum;
    iter++;
  }
  return sum;
}