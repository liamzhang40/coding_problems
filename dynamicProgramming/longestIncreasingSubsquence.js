// Given an unsorted array of integers, find the length of longest increasing subsequence.

// There may be more than one LIS combination, it is only necessary for you to return the length.
// Your algorithm should run in O(n2) complexity.

// Could you improve it to O(n log n) time complexity?

function longest(nums) {
/*
    assume each number is a increasing subsequence with length of 1
    create an array to record longest increasing subsquence at each number

    By iterating nums array, update the LIS at each number by iterating 
    previous number. 

    time complexity O(n^2), space complexity O(n)
*/

    // const lengths = new Array(nums.length).fill(1);
    // let maxLength = 1;

    // for(let i = 0; i < nums.length; i++) {
    //     for(let j = i - 1; j >= 0; j--) {
    //         if (nums[i] > nums[j]) {
    //             lengths[i] = Math.max(lengths[j] + 1, lengths[i]);
    //             if (lengths[i] > maxLength) maxLength = lengths[i];
    //         }
    //     }
    // }

    // return maxLength;

/*
    in order to reduce time complexity to O(n log n), a different approach is needed

    The general idea is keep all possible increasing subsequences and update them under 3 conditions
    By iterating nums, compare each num with the last element of each IS

    Case 1: If num is greater than all last elements of ISs, clone LIS and attach num to its clone
    Case 2: If num is smaller than all last elements of ISs, create a new IS with the num OR replace previous single IS with num
    Case 3: If num is in between the above two conditions, find the IS with largest last element which is smaller than num.
            Clone it and attach num. discard all other ISs with same length

    As IS update, make sure *** ISs[i].last_element > ISs[i - 1].last_element ***

    Ex. input = [10, 9, 2, 5, 3, 7, 101, 18]

    num = 10 (no IS yet)
    10
    ------------------------------------------------
    num = 9 (case 2)
    9
    ------------------------------------------------
    num = 2 (case 2)
    2
    ------------------------------------------------
    num = 5 (case 1)
    2
    2, 5
    ------------------------------------------------
    num = 3 (case 3)
    2
    2, 3
    2, 5 (discard)
    ------------------------------------------------
    num = 7 (case 1)
    2
    2, 3
    2, 3, 7
    ------------------------------------------------
    num = 101 (case 1)
    2
    2, 3
    2, 3, 7
    2, 3, 7, 101
    ------------------------------------------------
    num = 18 (case 3)
    2
    2, 3
    2, 3, 7
    2, 3, 7, 18 (ANSWER!!)
    2, 3, 7, 101 (discard)

    The way to store IS can be simplified down to an TAIL array. 
    Index represents length of IS at this index (index 0 = IS of length 1, index 1 = IS of length 2...) 
    Value at this index represents last/largest element of the IS. (tails[0] = 10 => 9 => 2 from example input)
    Therefore: 

    Ex. input = [10, 9, 2, 5, 3, 7, 101, 18]

    num = 10 (no IS yet)
    10
    ------------------------------------------------
    num = 9
    9
    ------------------------------------------------
    num = 2
    2
    ------------------------------------------------
    num = 5
    2, 5
    ------------------------------------------------
    num = 3
    2, 3
    ------------------------------------------------
    num = 7
    2, 3, 7
    ------------------------------------------------
    num = 101
    2, 3, 7, 101
    ------------------------------------------------
    num = 18
    2, 3, 7, 18

*/

    const arr = [nums[0]];

    for(let i = 1; i < nums.length; i++) {
        const idx = bSearch(nums[i]);
        arr[idx] = nums[i];
    }

    return arr.length;
    
    function bSearch(num) {
        let i = 0;
        let j = arr.length - 1;
        while (i < arr.length && j >= 0) {
            const mid = Math.floor((i + j) / 2);
            if (arr[mid] > num) {
                if (arr[mid - 1] === num) return mid - 1;
                if (arr[mid - 1] < num) return mid;
                j = mid - 1;
            } else if (arr[mid] < num) {
                if (arr[mid + 1] >= num) return mid + 1;
                i = mid + 1;
            } else {
                return mid;
            }
        }

        return i;
    }
}

console.log(longest([10, 9, 2, 5, 3, 7, 101, 18]));