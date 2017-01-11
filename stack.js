function Stack() {
  this.store = {};
  this.len = 0;
  this.minimum = 0;
}

Stack.prototype.push = function(value) {
  this.store[this.len] = value;
  this.len++;
  if (this.minimum > value) {
    this.minimum = value;
  }
};

Stack.prototype.pop = function() {
  var popped = this.store[this.len];
  delete this.store[this.len];
  this.len--;
  return popped;
};

Stack.prototype.returnMin = function() {
  return this.minimum;
};

Stack.prototype.size = function() {
  return this.len;
}

Stack.prototype.sort = function() {
  var end = this.len;
  var temp;
  for(var i = 0; i < end - 1; i++) {
    for(var j = i+1; j < end; j++) {
      if (this.store[i] > this.store[j]) {
        temp = this.store[i];
        this.store[i] = this.store[j];
        this.store[j] = temp;
      }
    }
  }
};

var stack = new Stack();
stack.push(2);
stack.push(1);
stack.push(7);
stack.push(3);
stack.push(9);
stack.push(4);
console.log('1', stack);
stack.sort();
console.log('sort', stack);
