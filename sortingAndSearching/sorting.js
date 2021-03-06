function bubbleSort(arr) {
  // let count = 0;
  // for(let i = 0; i < arr.length; i++) {
  //   for(let j = 0; j < arr.length; j++) {
  //     console.log(count++)
  //     if (arr[i] < arr[j]) {
  //       [arr[i], arr[j]] = [arr[j], arr[i]];
  //     }
  //   }
  // }
  
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        isSorted = false;
      }
    }
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  
  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid, arr.length));
  
  return sortAndMerge(left, right);
}

function sortAndMerge(left, right) {
  const sortedMerge = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      sortedMerge.push(right.shift());
    } else {
      sortedMerge.push(left.shift());
    }
  }

  return sortedMerge.concat(left).concat(right);
}


function quickSort(arr) {
  // if (arr.length < 2) return arr;

  // const left = [];
  // const right = [];

  // for(let i = 1; i < arr.length; i++) {
  //   if (arr[i] < arr[0]) {
  //     left.push(arr[i]);
  //   } else {
  //     right.push(arr[i]);
  //   }
  // }

  // return quickSort(left).concat([arr[0]]).concat(quickSort(right));

  function partition(start, end) {
    if (start < end) {
      const pivot = arr[end];
      let i = start;
      for(let j = start; j < end; j++) {
        if (arr[j] < pivot) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          i += 1;
        }
      }

      [arr[i], arr[end]] = [arr[end], arr[i]];

      partition(start, i - 1);
      partition(i + 1, end);
    }
  }

  partition(0, arr.length - 1);

  return arr;
}

function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    const cur = arr[i];

    let j = i - 1;
    while (j >= 0 && cur < arr[j]) {
      arr[j + 1] = arr[j];
      j -= 1;
    }

    arr[j + 1] = cur;
  }

  return arr;
}

function shellSort(arr) {
  let gap = Math.floor(arr.length / 2);

  while (gap) {
    for(let i = gap; i < arr.length; i++) {
      const cur = arr[i];

      let j = i - gap;
      while (j >= 0 && cur < arr[j]) {
        arr[j + gap] = arr[j];
        j -= gap;
      }

      arr[j + gap] = cur;
    }

    gap = Math.floor(gap / 2);
  }

  return arr;
}

function countingSort(arr, exp) {
  const count = new Array(10).fill(0);
  // creating an array of count for the current digits;
  for(let i = 0; i < arr.length; i++) {
    count[Math.floor(arr[i] / exp) % 10] += 1;
  }
  // increment the frequency to match correct index;
  for(let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }
  // place numbers into output from the end of array to maintain previous order
  const output = new Array(arr.length);
  for(let i = arr.length - 1; i >= 0; i--) {
    const outputIdx = count[Math.floor(arr[i] / exp) % 10] - 1;
    output[outputIdx] = arr[i];
    count[Math.floor(arr[i] / exp) % 10] -= 1;
  }
  
  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
}

function radixSort(arr) {
  const max = Math.max(...arr);
  let exp = 1;
  while (Math.floor(max / exp)) {
    countingSort(arr, exp);
    exp *= 10;
  }

  return arr;
}

console.log(radixSort([802, 2, 24, 45, 66, 75, 170, 90]));