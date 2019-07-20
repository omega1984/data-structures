var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.count] = value;
  this.count++;
};
stackMethods.pop = function(){
  if (this.count > 0){
    var deletedItem = this.storage[this.count-1];
    delete this.storage[this.count-1];
    this.count--;
  }else{
    return undefined;
  }
  return deletedItem;
};
stackMethods.size = function(){
  return this.count;
};


