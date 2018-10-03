// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

function moveZeros(arr) {
    let i = 0;
    let j = 1;

    while (j < arr.length) {
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

    return arr;
}

console.log(moveZeros([0, 1, 0, 3, 12]));