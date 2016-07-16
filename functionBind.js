'use strict';
var bind = function(fn, context) {
  var args = Array.prototype.slice.call(arguments, 2);
  return function() {
    var output = Array.prototype.slice.call(arguments);
    var pass = args.concat(output);
    return fn.apply(context, pass);
  };
};

Function.prototype.bind = function(context) {
  var args = Array.prototype.slice.call(arguments, 1);
  var fn = this;
  return function() {
    var output = Array.prototype.slice.call(arguments);
    var pass = args.concat(output);
    return fn.apply(context, pass);
  }
};