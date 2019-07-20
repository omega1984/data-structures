var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var add = 0;
  var del = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[add] = value;
    add++;
  };

  someInstance.dequeue = function() {
    if (add > del){
      var deletedItem = storage[del];
      delete storage[del];
      del++;
    }else if (del >= add){
      return -1;
    }
    return deletedItem;
  };

  someInstance.size = function() {
    return add - del;
  };

  return someInstance;
};
