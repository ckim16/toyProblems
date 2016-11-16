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

//optimized..

function reverseVowelOpt(str) {
  var startIdx = 0;
  var endIdx = str.length-1;
  var strArr = str.split('');

  function isVowel(letter) {
    letter = letter.toLowerCase();
    return (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u');
  }
  
  while (startIdx < endIdx) {
    while(startIdx < endIdx && !isVowel(str[startIdx])) {
      startIdx++;
    }

    while(startIdx < endIdx && !isVowel(str[endIdx])) {
      endIdx--;
    }
    if(str[startIdx] !== str[endIdx]) {
      var temp= strArr[startIdx];
      strArr[startIdx] = strArr[endIdx];
      strArr[endIdx] = temp;
    }
    startIdx++;
    endIdx--;
  }
  return strArr.join('');
}