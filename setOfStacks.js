function SetofStacks() {
  this.set = [];

  function Stack(capacity) {
    this.len = 0;
    this.capacity = capacity;
    this.stack = {};
  } // -> 

//maybe some helper functions like
//getLastStack..

  SetOfStacks.prototype.push = function(value) {
    // pop it from your set and check that
      // if pop value is not null is not at the capacity 
        // push the value into pop value
      // else
        // create another stack
        // push the value into the stack
        // and push the stack into set
  };

  SetOfStacks.prototype.pop = function() {
    //pop the last value of the last stack
    //if stack capacity is 0
      //that stack must be removed..
  };

  SetOfStacks.prototype.popAt = function(idx1, idx2) {
    //pop the stack at idx1 and pop the value at idx2..
  };
}