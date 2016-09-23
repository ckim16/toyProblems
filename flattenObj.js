'use strict';
function flattenObj(input) {
  var result = {};

  function recursion(obj, key) {
    if(typeof obj !== 'object') {
      result[key] = obj;
    } else {
      var keys = Object.keys(obj);
      keys.forEach(function(element) {
        var input;
        if(key === '') {
          input = '';
        } else {
          input = '.';
        }
        recursion(obj[element], key + input + element);
      });
    }
  }
  recursion(input, '');
  return result;
}

var o = {
  a: {
    m: {
      x: "1",
      y: "2"
    }
  },
  b: "3",
  c: {
    m: "4"
  }
}; // -> {a.m.x: 1, a.m.y: 2, b: 3, c.m: 4}
console.log(flattenObj(o));