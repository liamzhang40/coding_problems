// Given a set of distinct integers, nums, return all possible subsets (the power set).

function subsets(nums) {

    // function _sub(idx) {
    //     if (idx < 0) return [[]];

    //     const num = nums[idx];
    //     const preSubsets = _sub(idx - 1);
    //     const length = preSubsets.length;

    //     for(let i = 0; i < length; i++) {
    //         preSubsets.push(preSubsets[i].slice().concat([num]));
    //     }

    //     return preSubsets;
    // }

    // return _sub(nums.length - 1);


    // backtracking
    const res = [];
    function _backtrack(sets, idx) {
        res.push(sets.slice());

        for(let i = idx; i < nums.length; i++) {
            sets.push(nums[i]);
            _backtrack(sets, i + 1);
            sets.pop();
        }
    }

    _backtrack([], 0);
    return res;
}

console.log(subsets([1, 2, 3]));