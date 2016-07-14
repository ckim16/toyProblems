'use strict';
function rockPaperScissorPermutation(round) {
  var result = [];
  var hands = ['r', 'p', 's'];

  function recursion(input) {
    if(input.length === round) {
      result.push(input);
    } else {
      for(var i = 0; i < hands.length; i++) {
        recursion(input + hands[i]);
      }
    }
  }
  recursion('');
  console.log('result', result)
  return result;
}