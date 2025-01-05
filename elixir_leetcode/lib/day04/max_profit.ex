defmodule MaxProfit do
  @spec max_profit(prices :: [integer]) :: integer
  def max_profit(prices) do
    calc(prices)
  end

  def calc(prices, min_price \\ 10 ** 4, max_profit_num \\ 0)
  def calc([], _min_price, max_profit_num) do
    max_profit_num
  end

  def calc([price | tail], min_price, max_profit_num) do
    next_min_price = min(price, min_price)
    calc(tail, next_min_price, max(max_profit_num, price - next_min_price))
  end
end
