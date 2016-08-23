'use strict';
function allAnagrams(str) {
  var anagram = {};

  function generator(text, option) {
    if(text.length === str.length) {
      anagram[text] = true;
    }
    for(var i = 0; i < option.length; i++) {
      generator(text + option[i], option.slice(0, i) + option.slice(i+1));
    }
  }
  generator('', str);
  console.log('ana', anagram);
  return Object.keys(anagram);
}
allAnagrams('abc');