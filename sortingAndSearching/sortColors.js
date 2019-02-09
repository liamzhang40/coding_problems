// Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Note: You are not suppose to use the library 's sort function for this problem.

function sortColors(arr) {
    // one pass in-place sort
    let zeroCount = 0;
    let oneCount = 0;

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            [arr[i], arr[zeroCount]] = [arr[zeroCount], arr[i]];

            if (arr[i] === 1) {
                [arr[i], arr[zeroCount + oneCount]] = [arr[zeroCount + oneCount], arr[i]];
            }
        
            zeroCount += 1;
        } else if (arr[i] === 1) {
            [arr[i], arr[zeroCount + oneCount]] = [arr[zeroCount + oneCount], arr[i]];
            oneCount += 1;
        }
    }

    return arr;

    // or go through the array to count all 0, 1, 2
}

console.log(sortColors([2, 0, 2, 1, 1, 0]));