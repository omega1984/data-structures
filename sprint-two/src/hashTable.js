var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.size = 0;
};
// LimitedArray(this.limit) => we call the function LimitedArray and pass in (this.limit) => it returns limitedArray which stores all the methods that we can use;
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // container.get(index) returns a value at index;
  var container = this._storage;
  if (!container.get(index)){
    // check if there isn't a bucket, if no bucket, then create a bucket with a tuple of k, v in it and insert it into the array using .set method;
    var bucket = [[k, v]];
    container.set(index, bucket);
    this.size++;
  }else{
    // container.get(index) returns a value at index;
    var existBucket = container.get(index);
    for (var i = 0; i < existBucket.length; i++){
      if (existBucket[i][0] === k){
        existBucket[i][1] = v;
      } else if (i === existBucket.length - 1) {
        existBucket.push([k, v]);
        this.size++;
      }
    }
  }
  // resizing
  if (this.size > 0.75 * this._limit){
    this._limit = this._limit*2;
    var newLimit = this._limit;
    var oldStorage = this._storage;
    var newStorage = LimitedArray(newLimit);

    oldStorage.each(function(bucket){
      if (bucket){
        for (var i = 0; i < bucket.length; i++){
          var newIndex = getIndexBelowMaxForKey(bucket[i][0], newLimit);
          var newBucket = newStorage.get(newIndex);
          if (!newBucket){
            newStorage.set(newIndex, [[bucket[i][0], bucket[i][1]]]);
          }else{
            newBucket.push([bucket[i][0], bucket[i][1]]);
          }
        }
      }
    });
    this._storage = newStorage;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var container = this._storage;
  var bucket = container.get(index);
  if (bucket){
    for (var i = 0; i < bucket.length; i++){
      if (bucket[i][0] === k){
        return bucket[i][1];
      }
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
        this.size--;
      }
    }
  }
  if (this.size < 0.25 * this._limit){
    this._limit = this._limit/2;
    var newLimit = this._limit;
    var oldStorage = this._storage;
    var newStorage = LimitedArray(newLimit);

    oldStorage.each(function(bucket){
      if (bucket){
        for (var i = 0; i < bucket.length; i++){
          var newIndex = getIndexBelowMaxForKey(bucket[i][0], newLimit);
          var newBucket = newStorage.get(newIndex);
          if (!newBucket){
            newStorage.set(newIndex, [[bucket[i][0], bucket[i][1]]]);
          }else{
            newBucket.push([bucket[i][0], bucket[i][1]]);
          }
        }
      }
    });
    this._storage = newStorage;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?

 O(n);

 resizing O(n^2);
 */


