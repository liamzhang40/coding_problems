// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

function containDuplicates(arr) {
    const hash = {};
    
    for(let i = 0; i < arr.length; i++) {
        if (hash[arr[i]]) return true;
        hash[arr[i]] = true;
    }

    return false;
}

const arr = [1, 2, 3];
console.log(containDuplicates(arr));