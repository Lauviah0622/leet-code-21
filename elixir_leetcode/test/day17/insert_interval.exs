defmodule InsertInterval.Test do
  use ExUnit.Case

  test "Example 1" do
    intervals = [[1, 3], [6, 9]];
    newInterval = [2, 5];
    output = [
      [1, 5],
      [6, 9],
    ];

    assert InsertInterval.insert(intervals, newInterval) == output
  end

  test "Example 2" do
    intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]];
    newInterval = [4, 8];
    output = [
      [1, 2],
      [3, 10],
      [12, 16],
    ];

    assert InsertInterval.insert(intervals, newInterval) == output
  end

  test "Example 3" do
    intervals = [[1, 5]];
    newInterval = [0, 3];
    output = [
      [0, 5],
    ];

    assert InsertInterval.insert(intervals, newInterval) == output
  end

  test "Example 4" do
    intervals = [[1, 5]];
    newInterval = [0, 0];
    output = [
      [0, 0],
      [1, 5],
    ];

    assert InsertInterval.insert(intervals, newInterval) == output
  end

end
