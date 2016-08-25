'use strict';
function longestPalindrome(str) {
  var longestPal = '';
  var letters;
  for(var i = 0; i < str.length; i++) {
    letters = str.charAt(i);
    for(var j = i+1; j < str.length; j++) {
      letters += str.charAt(j);
      if(letters.split('').reverse().join('') === letters && letters.length > longestPal.length) {
        longestPal = letters;
      }
    }
  }
  return longestPal;
}
