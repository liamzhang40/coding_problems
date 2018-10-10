// You are given coins of different denominations and a total amount of money amount. 
// Write a function to compute the fewest number of coins that you need to make up that amount. 
// If that amount of money cannot be made up by any combination of the coins, return -1.

function leastCoins(total, coins) {
    // Greedy

    let leastAmount = Infinity;
    function _greedy(amount, idx, count) {
        const coin = coins[idx];
        if (idx === 0 && amount % coin === 0) {
            leastAmount = Math.min(leastAmount, count + amount / coin);
        } else {
            for(let numOfCoin = Math.floor(amount / coin); numOfCoin >= 0 && count + numOfCoin < leastAmount; numOfCoin--) {
                _greedy(amount - numOfCoin * coin, idx - 1, count + numOfCoin);
            }
        }
    }

    _greedy(total, coins.length - 1, 0);

    return leastAmount;

    // DP

    // const arr = new Array(total + 1).fill(Infinity);
    // arr[0] = 0;

    // coins.forEach(coin => {
    //     for(let i = coin; i < arr.length; i++) {
    //         arr[i] = Math.min(arr[i], arr[i - coin] + 1);
    //     }
    // });

    // return arr[arr.length - 1] === Infinity ? -1 : arr[arr.length - 1];
}

console.log(leastCoins(11, [1, 2, 5]));