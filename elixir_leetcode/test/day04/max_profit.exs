defmodule MaxProfit.Test do
  use ExUnit.Case

  test "Example 1: max_profit([7, 1, 5, 3, 6, 4])" do
    prices = [7, 1, 5, 3, 6, 4]
    expected_output = 5

    assert MaxProfit.max_profit(prices) == expected_output
  end

  test "Example 2: max_profit([7, 6, 4, 3, 1])" do
    prices = [7, 6, 4, 3, 1]
    expected_output = 0

    assert MaxProfit.max_profit(prices) == expected_output
  end


end
