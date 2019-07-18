 
var Queue = function() {
  var someInstance  = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  return someInstance;
};
 
var queueMethods = {};
 
queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count += 1
  return value;
};
 
queueMethods.dequeue = function() {
  if (this.count === 0){
    return undefined;
  }else{
    var firstValue = this.storage[0]
    for (i = 0; i < this.count - 1; i++){
      this.storage[i] = this.storage[i + 1]
    }
    delete this.storage[this.count - 1];
    this.count -= 1;
    return firstValue;
  }
};
 
queueMethods.size = function() {
  return this.count;
};