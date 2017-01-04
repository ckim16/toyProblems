'use strict';
function setToZero(matrix) {
  var row = [];
  var col = [];

  for(var i = 0; i < matrix.length; i++) {
    for(var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        row[i] = 1;
        col[j] = 1;
      }
    }
  }
  console.log(row, col)
  for(var i = 0; i < matrix.length; i++) {
    for(var j = 0; j < matrix[i].length; j++) {
      if (row[i] === 1 || col[j] === 1) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}

console.log(setToZero([[2,0,1], [3,4,5]])) // --> [[0,0,0], [3,0,5]];
console.log(setToZero([[1,2,3,4],[5,6,0,8], [4,2,1,1]]));