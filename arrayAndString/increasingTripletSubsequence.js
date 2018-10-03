// Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

// Formally the function should:

// Return true if there exists i, j, k 
// such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.

// note: Your algorithm should run in O(n) time complexity and O(1) space complexity.

function triplet(arr) {
    let low = null;
    let mid = null;

    for(let i = 0; i < arr.length; i++) {
        if (!low || arr[i] < low) {
            low = arr[i];
        } else if (!mid || arr[i] < mid) {
            mid = arr[i];
        } else {
            return true;
        }
    }
    
    return false;
}

console.log(triplet([1, 3, 2, 1, 5]))