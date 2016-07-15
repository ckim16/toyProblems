'use strict';
function reverseVowel(str) {
  var vowelList = [];
  var vowelObj = {};
  for(var i = 0; i < str.length; i++) {
    if(str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i) === 'i' || str.charAt(i) === 'o' || str.charAt(i) === 'u') {
      vowelList.push(str.charAt(i));
      vowelObj[str.charAt(i)] = i;
    }
  }
  str = str.split('');
  for(var i = 0; i < str.length; i++) {
    if(vowelObj.hasOwnProperty(str[i])) {
      var popped = vowelList.pop();
      str[i] = popped;
    }
  }
  return str.join('');
}
