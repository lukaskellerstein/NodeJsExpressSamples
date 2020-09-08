

// Function to find the maximum 
// profit with two transactions 
// on a given list of stock prices 
const maxProfit = (price, n) => {

    // buy1 - Money lent to buy 1 stock 
    // profit1 - Profit after selling 
    // the 1st stock buyed. 
    // buy2 - Money lent to buy 2 stocks 
    // including profit of selling 1st stock 
    // profit2 - Profit after selling 2 stocks 
    let buy1, profit1, buy2, profit2;

    // Set initial buying values to 
    // int.MaxValue as we want to  
    // minimize it 
    buy1 = buy2 = 9999999999;

    // Set initial selling values to 
    // zero as we want to maximize it 
    profit1 = profit2 = 0;

    for (let i = 0; i < n; i++) {

        // Money lent to buy the stock 
        // should be minimum as possible. 
        // buy1 tracks the minimum possible 
        // stock to buy from 0 to i-1. 
        buy1 = Math.min(buy1, price[i]);

        // Profit after selling a stock 
        // should be maximum as possible. 
        // profit1 tracks maximum possible 
        // profit we can make from 0 to i-1. 
        profit1 = Math.max(profit1, price[i] - buy1);

        // Now for buying the 2nd stock, 
        // we will integrate profit made 
        // from selling the 1st stock 
        buy2 = Math.min(buy2, price[i] - profit1);

        // Profit after selling a 2 stocks 
        // should be maximum as possible. 
        // profit2 tracks maximum possible 
        // profit we can make from 0 to i-1. 
        profit2 = Math.max(profit2, price[i] - buy2);
    }

    return profit2;
}


let price = [2, 30, 15, 10, 8, 25, 80];
console.log(`Maximum Profit = ${maxProfit(price, price.length)}`); 