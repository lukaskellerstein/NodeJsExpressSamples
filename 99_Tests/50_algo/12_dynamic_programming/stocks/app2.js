

// Function to find out maximum profit by  
// buying & selling/ a share at most k times 
// given stock price of n days 
const maxProfit = (price, n, k) => {
    // table to store results of subproblems 
    // profit[t][i] stores maximum profit using atmost 
    // t transactions up to day i (including day i) 
    let profit = [k + 1, n + 1];

    // For day 0, you can't earn money 
    // irrespective of how many times you trade 
    for (let i = 0; i <= k; i++) {
        profit[i, 0] = 0;
    }

    // profit is 0 if we don't do any transation 
    // (i.e. k =0) 
    for (let j = 0; j <= n; j++) {
        profit[0, j] = 0;
    }

    // fill the table in bottom-up fashion 
    for (let i = 1; i <= k; i++) {
        for (let j = 1; j < n; j++) {
            let max_so_far = 0;

            for (let m = 0; m < j; m++) {
                max_so_far = Math.max(max_so_far, price[j] -
                    price[m] + profit[i - 1, m]);
            }

            profit[i, j] = Math.max(profit[i, j - 1], max_so_far);
        }
    }

    return profit[k, n - 1];
}


let k = 6;
// let price = [10, 22, 5, 75, 65, 80];
let price = [2, 30, 15, 10, 8, 25, 80];
console.log(`Maximum Profit = ${maxProfit(price, price.length, k)}`); 