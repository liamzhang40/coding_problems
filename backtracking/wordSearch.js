// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent"
// cells are those horizontally or vertically neighboring.The same letter cell may not be used more than once.

function wordSearch(board, word) {
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            // if (_dfs(i, j, 0)) return true;
            if (_dfsBacktracking(i, j, 0)) return true;
        }
    }

    return false;
    // hoisted
    // function _dfs(x, y, idx, memo = {}) {
    //     if (idx === word.length) return true;
    //     if (x < 0 || 
    //         x >= board.length ||
    //         y < 0 ||
    //         y >= board[x].length ||
    //         memo[[x, y]] ||
    //         board[x][y] !== word[idx]) return false;
            
    //         memo[[x, y]] = true;

    //         return _dfs(x + 1, y, idx + 1, Object.assign({}, memo)) ||
    //         _dfs(x, y + 1, idx + 1, Object.assign({}, memo)) ||
    //         _dfs(x - 1, y, idx + 1, Object.assign({}, memo)) ||
    //         _dfs(x, y - 1, idx + 1, Object.assign({}, memo));
    // }
    // a copy of the memo object is copy for each dfs step, very costly

    function _dfsBacktracking(x, y, idx) {
        if (idx === word.length) return true;
        if (x < 0 || 
            x >= board.length ||
            y < 0 ||
            y >= board[x].length ||
            board[x][y] !== word[idx]) return false;

        const temp = board[x][y];
        board[x][y] = "*";

        const boolean = _dfsBacktracking(x + 1, y, idx + 1) ||
        _dfsBacktracking(x, y + 1, idx + 1) ||
        _dfsBacktracking(x - 1, y, idx + 1) ||
        _dfsBacktracking(x, y - 1, idx + 1);

        board[x][y] = temp;
        return boolean;
    }
    // Each letter is replaced with "*" in each dfs step, and as call stack 
    // is popped, "*" is switched back to the original letter
}

console.log(wordSearch(
    [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
    ],
    "ABCB"
));