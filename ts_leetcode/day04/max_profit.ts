export function maxProfit(prices: number[]): number {
  let min = Infinity;
  let maxProfit = 0;

  for (const price of prices) {
    price < min && (min = price);
    maxProfit = Math.max(maxProfit, price - min);
  }

  return maxProfit
}