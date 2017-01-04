'use strict';
function rotateMatrix(matrix) {
  var result = [];
  for(var i = 0; i < matrix.length; i++) {
    result.push([]);
  }

  for(var j = 0; j < matrix.length; j++) {
    for(var k = 0; k < matrix.length; k++) {
      result[k].push(matrix[matrix.length-j-1][k]);
    }
  }
  return result;
}

console.log(rotateMatrix([ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, "A", "B", "C" ], [ "D", "E", "F", "G" ] ]));
console.log(rotateMatrix([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]));

// better solution
function rotateMatrixOpt(matrix) {
  return matrix[0].map(function(value, index) {
    return  matrix.reduceRight(function(total, arr) {
      total.push(arr[index]);
      return total;
    }, []);
  });
}