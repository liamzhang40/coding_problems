// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.

function mergeSortedArray(nums1, m, nums2, n) {
  let idx1 = m - 1;
  let idx2 = n - 1;
  let idxToReplace = m + n - 1;

  while (idx2 >= 0) {
    if (nums1[idx1] === undefined || nums1[idx1] <= nums2[idx2]) {
      nums1[idxToReplace] = nums2[idx2];
      idx2 -= 1;
    } else {
      nums1[idxToReplace] = nums1[idx1];
      idx1 -= 1;
    }
    idxToReplace -= 1;
  }
}