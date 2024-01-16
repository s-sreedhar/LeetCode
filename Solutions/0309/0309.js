function maxProfit(prices) {
  let sell = 0;
  let hold = Number.NEGATIVE_INFINITY;
  let prev = 0;

  for (const price of prices) {
    const cache = sell;
    sell = Math.max(sell, hold + price);
    hold = Math.max(hold, prev - price);
    prev = cache;
  }

  return sell;
}