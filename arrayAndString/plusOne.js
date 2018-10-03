// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

function plusOne(arr) {
    arr[arr.length - 1] += 1;
    if (arr[arr.length - 1] < 10) return arr;

    for(let i = arr.length - 1; i > 0; i--) {
        if (arr[i] > 9) {
            arr[i] %= 10;
            arr[i - 1] += 1;
        }
    }

    if (arr[0] > 9) {
        arr[0] %= 10;
        arr.unshift(1);
        return arr;
    } else {
        return arr;
    }
}

console.log(plusOne([4, 3, 2, 1]));