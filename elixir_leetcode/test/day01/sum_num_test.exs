defmodule SumNum.Test do
  use ExUnit.Case

  test "case 1" do
    [first, last] = SumNum.two_sum([2, 7, 11, 15], 9)

    assert first === 0
    assert last === 1
  end
  test "case 2" do
    [first, last] = SumNum.two_sum([3, 2, 4], 6)

    assert first === 1
    assert last === 2
  end
  test "case 3" do
    [first, last] = SumNum.two_sum([3, 3], 6)

    assert first === 0
    assert last === 1
  end

end
