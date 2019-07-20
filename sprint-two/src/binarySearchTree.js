var BinarySearchTree = function(value) {
  var BST = Object.create(BSTMethods);
  BST.value = value;
  BST.left = null;
  BST.right = null;
  return BST;
};

var BSTMethods = {};

BSTMethods.insert = function(val) {
  if (val < this.value) {
    if (!this.left){
      this.left = BinarySearchTree(val);
    }else{
      this.left.insert(val);
    }
  }else if (val > this.value){
    if (!this.right){
      this.right = BinarySearchTree(val);
    }else{
      this.right.insert(val);
    }
  }else{
    return `${val} is already in the tree`;
  }
};

BSTMethods.contains = function(val) {
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

BSTMethods.depthFirstLog = function(callback) {
  callback(this.value)
  if (this.left){
    this.left.depthFirstLog(callback);
  }
  if (this.right){
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
