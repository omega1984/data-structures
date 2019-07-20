var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  return someInstance;
};

var stackMethods = {
  push: function(value){
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function(){
    if (this.count > 0){
      var deletedItem = this.storage[this.count-1];
      delete this.storage[this.count-1];
      this.count--;
    }else{
      return undefined;
    }
    return deletedItem;
  },
  size: function(){
    return this.count;
  }
};


