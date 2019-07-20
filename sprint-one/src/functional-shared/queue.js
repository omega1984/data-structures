var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.max = 0;
  someInstance.min = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};
queueMethods.enqueue = function(value){
  this.storage[this.max] = value;
  this.max++;
};
queueMethods.dequeue = function(){
  if (this.max > this.min){
    var deletedItem = this.storage[this.min];
    delete this.storage[this.min];
    this.min++;
  }else if (this.min >= this.max){
    return -1;
  }
  return deletedItem;
};
queueMethods.size = function(){
  return this.max - this.min;
};


