// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

function jumpGame(arr) {
    if (arr.length <= 1) return true;

    let prevMaxJumps = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if (prevMaxJumps === 0) return false;
        prevMaxJumps = Math.max(arr[i], prevMaxJumps - 1);
    }

    return true;
}

console.log(jumpGame([2, 3, 1, 1, 4]));