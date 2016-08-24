'use strict';
var mixEvents = function(obj) {
  var events = {};

  obj.trigger = function(event) {
    if(events[event]) {
      var args = Array.prototype.slice.call(arguments, 1);

      for(var i = 0; i < events[event].length; i++) {
        events[event][i].apply(null, args);
      }
    }
  };

  obj.on = function(event, callback) {
    events[event] = events[event] || [];
    events[event].push(callback);
  };

  return obj;
}