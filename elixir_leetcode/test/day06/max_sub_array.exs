defmodule MaxSubArray.Test do
  use ExUnit.Case

  test "Example 1: maxSubArray([-2,1,-3,4,-1,2,1,-5,4])" do
    prices = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    expected_output = 6

    assert MaxSubArray.max_sub_array(prices) == expected_output
  end

  test "Example 2: maxSubArray([1])" do
    prices = [1]
    expected_output = 1

    assert MaxSubArray.max_sub_array(prices) == expected_output
  end

  test "Example 3: maxSubArray([5,4,-1,7,8])" do
    prices = [5, 4, -1, 7, 8]
    expected_output = 23

    assert MaxSubArray.max_sub_array(prices) == expected_output
  end

  test "Example 4: maxSubArray([-1])" do
    prices = [-1]
    expected_output = -1

    assert MaxSubArray.max_sub_array(prices) == expected_output
  end


end
