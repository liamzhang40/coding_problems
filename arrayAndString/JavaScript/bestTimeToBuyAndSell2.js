//Say you have an array for which the ith element is the price of a given stock on day i.

//Design an algorithm to find the maximum profit.You may complete as many transactions as you like(i.e., buy one and sell one share of the stock multiple times).

//Note: You may not engage in multiple transactions at the same time(i.e., you must sell the stock before you buy again).

function buyAndSell(arr) {
    let total = 0;
    let buyInPrice = null;

    for (let i = 0; i < arr.length; i++) {
        if (buyInPrice) {
            if (arr[i] > buyInPrice && arr[i] > arr[i + 1] || i === arr.length - 1) {
                total += arr[i] - buyInPrice;
                buyInPrice = null;
            }
        } else {
            if (arr[i + 1] > arr[i]) {
                buyInPrice = arr[i];
            }
        }
    }

    return total;
}

const arr = [1, 2, 3, 4, 5];
console.log(buyAndSell(arr));