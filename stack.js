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