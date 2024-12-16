/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buyPrice = Infinity;
  let maxProfit = 0;

  for (const price of prices) {
    if (buyPrice > price) {
      buyPrice = price;
    } else {
      maxProfit = Math.max(maxProfit, price - buyPrice);
    }
  }

  return maxProfit;
};
