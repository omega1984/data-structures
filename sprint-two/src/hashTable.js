

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];

  if (!bucket) {
    var newBucket = [];
    this._storage[index] = newBucket;
  }
  if (this._storage[index].length > 0){
    for (var tuple = 0; tuple < this._storage[index].length; tuple++){
      if (this._storage[index][tuple][0] === k){
        this._storage[index][tuple][1] = v;
      }
    }
  }
  bucket = this._storage[index];
  bucket.push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  if (!bucket){
    return null;
  }
  for (var i = 0; i < bucket.length; i++){
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


