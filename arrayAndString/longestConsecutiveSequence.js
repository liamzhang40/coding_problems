// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

// Your algorithm should run in O(n) complexity.

function longestConsecutive(nums) {
    const hash = {};
    let max = 0;

    nums.forEach(num => {
        if (!hash.hasOwnProperty(num)) {
            const left = hash.hasOwnProperty(num - 1) ? hash[num - 1] : 0;
            const right = hash.hasOwnProperty(num + 1) ? hash[num + 1] : 0;

            const sum = left + right + 1;
            max = Math.max(max, sum);
            hash[num] = sum;
            hash[num - left] = sum;
            hash[num + right] = sum;
        }
    });

    return max;
}