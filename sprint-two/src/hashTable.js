var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // container.get(index) returns a value at index;
  var container = this._storage;
  if (!container.get(index)){
    // check if there isn't a bucket, if no bucket, then create a bucket with a tuple of k, v in it and insert it into the array using .set method;
    var bucket = [[k, v]];
    container.set(index, bucket);
  }else{
    // container.get(index) returns a value at index;
    var existBucket = container.get(index);
    for (var i = 0; i < existBucket.length; i++){
      if (existBucket[i][0] === k){
        existBucket[i][1] = v;
      } else if (i === existBucket.length - 1) {
        existBucket.push([k, v]);
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var container = this._storage;
  var bucket = container.get(index);
  for (var i = 0; i < bucket.length; i++){
    if (bucket[i][0] === k){
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var container = this._storage;
  var bucket = container.get(index);

  if (!bucket){
    return undefined;
  }else{
    for (var i = 0; i < bucket.length; i++){
      if (bucket[i][0] === k) {
        bucket.splice(i, 1);
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?

 O(n);
 */


