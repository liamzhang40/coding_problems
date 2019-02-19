// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

function moveZeros(arr) {

    // keep original order
    let i = 0;
    let j = 1;
    // zeros will be moved between i and j
    while (j < arr.length) {
        console.log(arr);
        if (!arr[i] && arr[j]) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j++;
        } else if (!arr[i] && !arr[j]) {
            j++;
        } else {
            i++;
            j++;
        }
    }

    
    // order is not maintained
    // let front = 0;
    // let numOfZeros = 0;
    
    // while (front < arr.length - numOfZeros) {
    //     if (arr[front]) {
    //         front += 1;
    //     } else {
    //         const back = arr.length - numOfZeros - 1;
    //         if (arr[back]) {
    //             [arr[front], arr[back]] = [arr[back], arr[front]];
    //             front += 1;
    //         } else {
    //             numOfZeros += 1;
    //         }
    //     }
    // }

    return arr;
}

console.log(moveZeros([0, 1, 0, 3, 0, 12]));