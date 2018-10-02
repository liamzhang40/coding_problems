// Given an array, rotate the array to the right by k steps, where k is non-negative.

function rotateArray(arr, k) {
    // const res = [];
    // for (let i = 0; i < arr.length; i++) {
    //     res.push(arr[(i + arr.length - k % arr.length) % arr.length]);
    // }

    // return res;

    // in-place
    reverse(0, arr.length - 1);
    reverse(0, k % arr.length - 1);
    reverse(k % arr.length, arr.length - 1);

    function reverse(left, right) {
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr;
}

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(rotateArray(arr, 10));