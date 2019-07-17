var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var count = size;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    if (size > 0){
      var deletedItem = storage[count - size];
      delete storage[count - size];
      size--;
    }else{
      return undefined;
    }
    return deletedItem;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
