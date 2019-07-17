var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var max = 0;
  var min = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[max] = value;
    max++;
  };

  someInstance.dequeue = function() {
    if (max > min){
      var deletedItem = storage[min];
      delete storage[min];
      min++;
    }else if (min >= max){
      return -1;
    }
    return deletedItem;
  };

  someInstance.size = function() {
    return max - min;
  };

  return someInstance;
};
