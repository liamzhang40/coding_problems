// Given two arrays, write a function to compute their intersection.

function intersection(nums1, nums2) {
    const hash = {};
    nums1.forEach(num => {
        if (hash[num]) hash[num] += 1;
        else hash[num] = 1;
    });

    const arr = [];
    nums2.forEach(num => {
        if (hash[num]) {
            arr.push(num);
            hash[num] -= 1;
        }
    });

    return arr;
}


function intersectionIfSorted(nums1, nums2) {
    const arr = [];    
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] > nums2[j]) {
            j++;
        } else if ((nums1[i] < nums2[j])) {
            i++;
        } else {
            arr.push(nums1[i]);
            i++;
            j++;
        }
    }

    return arr;
}

console.log(intersectionIfSorted([1,2,2,3], [2,2,4,5]));