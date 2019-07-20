var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(val) {
  if (val < this.value) {
    if (!this.left){
      this.left = new BinarySearchTree(val);
    }else{
      this.left.insert(val);
    }
  }else if (val > this.value){
    if (!this.right){
      this.right = new BinarySearchTree(val);
    }else{
      this.right.insert(val);
    }
  }else{
    return `${val} is already in the tree`;
  }
};

BinarySearchTree.prototype.contains = function(val) {
  if (val === this.value){
    return true;
  }else if (val < this.value){
    if (!this.left) {
      return false;
    }else{
      return this.left.contains(val);
    }
  }else if (val > this.value){
    if (!this.right){
      return false;
    }else{
      return this.right.contains(val);
    }
  }
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value)
  if (this.left){
    this.left.depthFirstLog(callback);
  }
  if (this.right){
    this.right.depthFirstLog(callback);
  }
};

// var binarySearchTree = new BinarySearchTree(10);
// binarySearchTree.insert(3);
// binarySearchTree.insert(5);
/*
 * Complexity: What is the time complexity of the above functions?
 */
