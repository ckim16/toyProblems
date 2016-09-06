'use strict';
function longestWord(sentence) {
  var longest;
  if(sentence[sentence.length-1] === '.') {
    var sen = sentence.slice(0, -1).split(' ');
  } else {
    sen = sentence.split(' ');
  }
  longest = sen[0];
  for(var i = 0; i < sen.length; i++) {
    if(sen[i].length > longest.length) {
      longest = sen[i];
    }
  }
  return longest;
}