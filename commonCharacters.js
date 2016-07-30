'use strict';
function commonCharacters(str1, str2) {
  var result = '';
  for(var i = 0; i < str1.length; i++) {
    for(var j = 0; j < str2.length; j++) {
      if(str1.charAt(i) !== ' ' && str2.charAt(j) !== ' ') {
        if(str1.charAt(i) === str2.charAt(j) && result.indexOf(str1.charAt(i)) === -1) {
          result += str1.charAt(i);
        }
      }
    }
  }
  return result;
}
commonCharacters('', 'No more')