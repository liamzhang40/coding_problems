// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.


function threeSum(arr) {
    const res = [];
    arr.sort((a, b) => a > b);

    for(let i = 0; i < arr.length - 2; i++) {
        if (arr[i] !== arr[i - 1]) {
            let left = i + 1;
            let right = arr.length - 1;

            while (left < right) {
                if (arr[i] + arr[left] + arr[right] > 0) {
                    right--;
                } else if (arr[i] + arr[left] + arr[right] < 0) {
                    left++;
                } else {
                    res.push([arr[i], arr[left], arr[right]]);
                    right--;
                    while (arr[right] === arr[right + 1] && left < right) right--;
                    left++;
                    while (arr[left] === arr[left - 1] && left < right) left++;
                }
            }
        }
    }

    return res;
}

console.log(threeSum([-2, 0, 0, 2, 2]));