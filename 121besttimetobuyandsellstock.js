/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0]; let profit = 0;let sell = prices[prices.length-1];
    prices.forEach((v,i) => {
        if(i&&prices[i] > sell) sell=prices[i];
        if(prices[i] < buy) {
            buy=prices[i];
            sell=buy;
        }
        if((sell-buy)>profit) profit=sell-buy;
    })
    return profit;
};