// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in -place with O(1) extra memory.

function removeDuplicates(arr) {
    let i = 0;
    
    for (let j = 1; j < arr.length; j ++) {
        if (!(arr[i] === arr[j])) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    return arr;
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));