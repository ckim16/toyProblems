'use strict';
function balancedParenthesis(string) {
  var str = string.split('');
  var result = 0;
  for(var i = 0; i < str.length; i++) {
    if(str[i] === '(' || str[i] === '{' || str[i] === '<') {
      result++;
    } else if(str[i] === ')' || str[i] === '}' || str[i] === '>') {
      result--;
    }

    if(result < 0) {
      return false;
    }
  }
  return result === 0;
}