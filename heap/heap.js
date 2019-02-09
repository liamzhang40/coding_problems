class MinHeap {
  // will potentially simulate resizing too
  constructor() {
    this.arr = [];
  }

  heapSize() {
    return this.arr.length;
  }

  peak() {
    if (this.heapSize) return this.arr[0];

    return "empty heap";
  }

  insert(num) {
    this.arr.push(num);
    this.heapifyUp();
  }

  delete(num) {
    const idx = this.contains(num);
    if (idx === false) {
      return "number does not exist";
    } else {
      this.arr[idx] = this.arr[this.arr.length - 1];
      this.arr.pop();
      this.heapifyDown(idx);
    }
  }

  contains(num) {
    if (this.heapSize()) {
      const idxQ = [0];
  
      while (idxQ.length) {
        const idx = idxQ.shift();
        if (this.arr[idx] === num) {
          return idx;
        } else if (this.arr[idx] < num) {
          if (this.hasLeftChildNode(idx)) idxQ.push(this.getLeftChildIndex(idx));
          if (this.hasRightChildNode(idx)) idxQ.push(this.getRightChildIndex(idx));
        }
      }
    }

    return false;
  }

  heapifyUp() {
    let idx = this.heapSize() - 1;
    while (this.hasParentNode && this.arr[this.getParentIndex(idx)] > this.arr[idx]) {
      this.swap(this.getParentIndex(idx), idx);
      idx = this.getParentIndex(idx);
    }
  }

  heapifyDown(idx) {
    while (this.hasLeftChildNode(idx)) {
      let smallerChildIdx = this.getLeftChildIndex(idx);
      if (this.hasRightChildNode(idx) && this.arr[this.getRightChildIndex(idx)] < this.arr[this.getLeftChildIndex(idx)]) {
        smallerChildIdx = this.getRightChildIndex(idx);
      }

      if (this.arr[idx] < this.arr[smallerChildIdx]) {
        break;
      } else {
        this.swap(idx, smallerChildIdx);
        idx = smallerChildIdx;
      }
    }
  }

  swap(idx1, idx2) {
    [this.arr[idx1], this.arr[idx2]] = [this.arr[idx2], this.arr[idx1]];
  }

  hasParentNode(idx) {
    return idx;
  }
  
  hasLeftChildNode(idx) {
    return this.getLeftChildIndex(idx) < this.arr.length;
  }

  hasRightChildNode(idx) {
    return this.getRightChildIndex(idx) < this.arr.length;
  }

  getParentIndex(idx) {
    return Math.floor((idx - 1) / 2);
  }

  getLeftChildIndex(idx) {
    return 2 * idx + 1;
  }

  getRightChildIndex(idx) {
    return 2 * idx + 2;
  }
}

const Heap = new MinHeap();

const arr = [9, 3, 1, 7, 6, 4];

for(let i = 0; i < arr.length; i++) {
  Heap.insert(arr[i]);
}

console.log(Heap);
Heap.delete(6);
console.log(Heap);