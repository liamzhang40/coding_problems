// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time.The robot is trying to reach the bottom - right corner of the grid(marked 'Finish' in the diagram below).

// How many possible unique paths are there ?

function uniquePaths(m, n) {
    // let numOfPath = 0;

    // function _dfs(i, j) {
    //     if (i === m && j === n) {
    //         numOfPath += 1;
    //         return;
    //     } else if (i <= m && j <= n) {
    //         _dfs(i + 1, j);
    //         _dfs(i, j + 1);
    //     }
    // }

    // function _bfs(i, j) {
    //     const queue = [[i, j]];
    //     while (queue.length) {
    //         const node = queue.shift();
    //         if (node[0] === m && node[1] === n) {
    //             numOfPath += 1;
    //             continue;
    //         }

    //         if (node[0] + 1 <= m) queue.push([node[0] + 1, node[1]]);
    //         if (node[1] + 1 <= n) queue.push([node[0], node[1] + 1]);
    //     }
    // }

    // _dfs(1, 1);

    // return numOfPath;
    // both dfs and bfs go through every unique path once, time complexity
    // will be O((m + n) * num of unique path);


    // DP
    // number of unique paths to each box = 
    // number of unique paths to the box above + 
    // number of unique paths to the left box

    // const row = new Array(m).fill(1);
    // for(let i = 1; i < n; i++) {
    //     for(let j = 1; j < m; j++) {
    //         row[j] = row[j] + row[j - 1];
    //     }
    // }

    // return row[row.length - 1];


    // Pascal Triangle

    const row = n + m - 2;
    const column = m - 1;
    const facMemo = [1, 1];

    const fac = num => {
        if (facMemo[num]) return facMemo[num];
        facMemo[num] = num * fac(num - 1);
        return facMemo[num];
    };

    return fac(row) / (fac(column) * fac(row - column));
}

console.log(uniquePaths(7, 3));