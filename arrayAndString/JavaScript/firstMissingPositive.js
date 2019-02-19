// Given an unsorted integer array, find the smallest missing positive integer.
// Your algorithm should run in O(n) time and uses constant extra space.

function firstMissingPositive(nums) {
    if (!nums.length) return 1;

    for (let i = 0; i < nums.length; i++) {
        // placing each element/number in its bucket
        while (nums[i] <= nums.length && nums[i] > 0 && nums[nums[i] - 1] !== nums[i]) {
            const idx = nums[i] - 1;
            [nums[i], nums[idx]] = [nums[idx], nums[i]];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) return i + 1;
    }

    return nums.length + 1;
}