// Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

// You have the following 3 operations permitted on a word

// Insert a character
// Delete a character
// Replace a character

function editDistance (word1, word2) {
    // The recursive calls basically build a tri-nary tree,
    // and there will be duplicated calls. idx1 and idx2
    // combination will be unique so I can use a 2D array memo
    // function _recursive (idx1, idx2) {
    //     if (idx1 < 0 && idx2 < 0) return 0;
    //     if (idx1 < 0) return idx2 + 1;
    //     if (idx2 < 0) return idx1 + 1;

    //     if (word1[idx1] === word2[idx2]) {
    //         return _recursive(idx1 - 1, idx2 - 1);
    //     } else {
    //         return 1 + Math.min(
    //             _recursive(idx1 - 1, idx2),
    //             _recursive(idx1, idx2 - 1),
    //             _recursive(idx1 - 1, idx2 - 1)
    //         );
    //     }
    // }

    const memo = [];
    for (let i = 0; i < word1.length; i++) {
        memo.push([]);
    }

    function _recursive(idx1, idx2) {
        if (idx1 < 0 && idx2 < 0) return 0;
        if (idx1 < 0) return idx2 + 1;
        if (idx2 < 0) return idx1 + 1;

        if (memo[idx1][idx2]) return memo[idx1][idx2];

        if (word1[idx1] === word2[idx2]) {
            memo[idx1][idx2] = _recursive(idx1 - 1, idx2 - 1);
        } else {
            memo[idx1][idx2] = 1 + Math.min(
                _recursive(idx1 - 1, idx2),
                _recursive(idx1, idx2 - 1),
                _recursive(idx1 - 1, idx2 - 1)
            );
        }

        return memo[idx1][idx2];
    }
    
    return _recursive(word1.length - 1, word2.length - 1);
}

console.log(editDistance("horse", "ros"));