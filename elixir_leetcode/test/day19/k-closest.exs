defmodule KClostest.Test do
  use ExUnit.Case

  def sorter(list) do
    list
    |> Enum.sort(fn ([head_a | _], [head_b | _]) -> head_a > head_b end)
  end

  test "Example 1" do
    points = [[3,3],[5,-1],[-2,4]];
    k = 2;
    output = [
      [3, 3], [-2, 4]
    ];

    assert KClostest.k_closest(points, k) |> sorter == output |> sorter()
  end


end
