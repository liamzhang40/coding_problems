// Given a collection of distinct integers, return all possible permutations.


function permutations(nums) {

    // function _permute(idx) {
    //     if (idx === 0) return [[nums[idx]]];
    
    //     const num = nums[idx];
    //     const thisPermutation = [];
    //     const prevPermutation = _permute(idx - 1);
    
    //     prevPermutation.forEach(subArr => {
    //         for(let i = 0; i < subArr.length + 1; i++) {
    //             const arr = subArr.slice(0, i).concat([num]).concat(subArr.slice(i));
    //             thisPermutation.push(arr);
    //         }
    //     });
    
    //     return thisPermutation;
    // }

    // return _permute(nums.length - 1);


    const res = [];

    function _backtrack(idx) {
        if (idx === nums.length - 1) res.push(nums.slice());

        for(let i = idx; i < nums.length; i++) {
            [nums[i], nums[idx]] = [nums[idx], nums[i]];
            _backtrack(idx + 1);
            [nums[i], nums[idx]] = [nums[idx], nums[i]];
        }
    }
    _backtrack(0);

    return res;
}

console.log(permutations([1,2,3]));