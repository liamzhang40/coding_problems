// Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

// You have the following 3 operations permitted on a word:

//Insert a character
//Delete a character
//Replace a character

function editDistance(word1, word2) {
    // using a hash has slower run time because inserting and looking up both
    // call hashing function.
    // const memo = {};
    // function _count(idx1, idx2) {
    //     if (idx1 < 0 && idx2 < 0) return 0;
    //     if (idx1 < 0) return idx2 + 1;
    //     else if (idx2 < 0) return idx1 + 1;

    //     if (!memo[[idx1, idx2]]) {
    //         if (word1[idx1] === word2[idx2]) {
    //             memo[[idx1, idx2]] = _count(idx1 - 1, idx2 - 1);
    //         } else {
    //             memo[[idx1, idx2]] = (1 + Math.min(
    //                 _count(idx1 - 1, idx2 - 1),
    //                 _count(idx1 - 1, idx2),
    //                 _count(idx1, idx2 - 1)
    //             ));
    //         }
    //     }

    //     return memo[[idx1, idx2]];
    // }


    // pre build a 2D array to track visited combinations
    const memo = [];
    for(let i = 0; i < word1.length; i++) {
        memo.push([]);
    }

    function _count(idx1, idx2) {
        if (idx1 < 0 && idx2 < 0) return 0;
        if (idx1 < 0) return idx2 + 1;
        else if (idx2 < 0) return idx1 + 1;

        if (memo[idx1][idx2] === undefined) {
            if (word1[idx1] === word2[idx2]) {
                memo[idx1][idx2] = _count(idx1 - 1, idx2 - 1);
            } else {
                memo[idx1][idx2] = (1 + Math.min(
                    _count(idx1 - 1, idx2 - 1),
                    _count(idx1 - 1, idx2),
                    _count(idx1, idx2 - 1)
                ));
            }
        }

        return memo[idx1][idx2];
    }
    return _count(word1.length - 1, word2.length - 1);
}

console.log(editDistance("intention", "execution"));
console.log(editDistance("horse", "ros"));