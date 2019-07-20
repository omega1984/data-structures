class Queue {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  enqueue(value){
    this.storage[this.count] = value;
    this.count += 1;
    return value;
  }
  dequeue(){
    if (this.count === 0){
      return undefined;
    }else{
      var firstValue = this.storage[0];
      for (var i = 0; i < this.count - 1; i++){
        this.storage[i] = this.storage[i + 1]
      }
      delete this.storage[this.count - 1];
      this.count -= 1;
      return firstValue;
    }
  }
  size(){
    return this.count;
  }
};
