'use strict';
function fractionConverter(num) {
  var numStr = num.toString();
  if(numStr.indexOf('.') === -1) {
    return numStr + '/1';
  }
  var digitArr = numStr.split('.');
  var number = digitArr[0];
  var fraction = digitArr[1];

  var gcd = function(a, b) {
    if(!b) {
      return a;
    }
    return gcd(b, a%b);
  };

  var greatestDivisor = gcd(fraction, Math.pow(10, fraction.length));
  var denominator = Math.pow(10, fraction.length) / greatestDivisor;
  var numerator = number*denominator + (fraction/greatestDivisor);
  return numerator + '/' + denominator;
}