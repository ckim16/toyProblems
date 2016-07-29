'use strict';
function longestRun(str) {
  var arr = [];
  var letters = '';
  for(var i = 0; i < str.length; i++) {
    if(str.charAt(i) !== str.charAt(i+1)) {
      arr.push(letters + str.charAt(i));
      letters = '';
    } else {
      letters += str.charAt(i);
    }
  }

  var longest = 0;
  var longestLetter;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].length > longest) {
      longest = arr[i].length;
      longestLetter = arr[i];
    }
  }
  return [str.indexOf(longestLetter[0]), str.indexOf(longestLetter[0])+longest-1]
}