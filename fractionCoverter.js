'use strict';
function fractionConverter(num) {
  var denominator = 0;

  while(true) {
    if(Math.round(num*denominator)/denominator === num) {
      return Math.round(num*denominator) + '/' + denominator;
    }
    denominator++;
  }
}