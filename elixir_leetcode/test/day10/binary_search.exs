defmodule BinarySearch.Test do
  use ExUnit.Case

  test "Example 1" do
    nums = [-1,0,3,5,9,12]
    target = 9
    index = 4


    assert BinarySearch.search(nums, target) == index
  end

  test "Example 2" do
    nums = [-1,0,3,5,9,12]
    target = 2
    index = -1

    assert BinarySearch.search(nums, target) == index
  end
  test "Example 3" do
    nums = [-1,0,3,5,9,12]
    target = 13
    index = -1

    assert BinarySearch.search(nums, target) == index
  end
end
