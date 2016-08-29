'use strict';
var compose = function() {
  var fns = Array.prototype.slice.call(arguments);
  return function(val) {
    return fns.reduceRight(function(prev, next) {
      return next(prev);
    }, val);    
  };
};

var pipe = function() {
  var fns = Array.prototype.slice.call(arguments);
  return function(val) {
    return fns.reduce(function(prev, next) {
      return next(prev); 
    }, val);
  };
};