// given a total amount and a list of coins with differenr values. Find the number of possibilities to make change

function changeCombinations(total, coins) {
    // recursive

    // let combinations = 0;
    // function _makeCombinatinos(left, idx) {
    //     if (!left) combinations += 1;

    //     for(let i = idx; i < coins.length; i++) {
    //         if (left - coins[i] < 0) return;
    //         _makeCombinatinos(left - coins[i], i);
    //     }
    // }

    // _makeCombinatinos(total, 0);
    // return combinations;

    // DP 
    // start an arr assuming given no coins and try to make change for (0 .. total)
    // 0 | 1 | 2 | 3 |... (0 .. total)
    // 1 | 0 | 0 | 0 |... (combinaitons with coin [])

    // 0 | 1 | 2 | 3 |... (0 .. total)
    // 1 | 1 | 1 | 1 |... (combinaitons with coin [1])

    // 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 ... (0 .. total)
    // 1 | 1 | 1 | 2 | 2 | 2 | 3 | 3 | 3 | 4 | 4  ... (combinaitons with coin [1, 3])
    // at total of 3, the total combination = previous combination for 3 with only coin [1] + previous combinaiton for 3 - 3 with only coin [1]
    // at total of 6, the total combination = previous combination for 6 with only coin [1] + previous combinaiton for 6 - 3 with only coin [1]
    
    // 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 ... (0 .. total)
    // 1 | 1 | 1 | 2 | 2 | 3 | 4 | 4 | 5 | 6 | 7  ... (combinaitons with coin [1, 3, 5])

    const arr = new Array(total + 1).fill(0);
    arr[0] = 1;

    coins.forEach(coin => {
        for(let i = coin; i < arr.length; i++) {
            arr[i] += arr[i - coin];
        }
    });

    return arr[arr.length - 1];
}

console.log(changeCombinations(10, [1,3,5]));