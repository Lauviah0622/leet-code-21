defmodule MaxSubArray do
  @spec max_sub_array(nums :: [integer]) :: integer
  def max_sub_array(nums) do
    exec2(nums)
  end


  # -1 * abs(hd(nums)) 只是要取一個初始值而已，這個值永遠不能比一個數字大
  def exec2(nums) do
    Enum.scan(nums, -1 * abs(hd(nums)), &max(&1 + &2, &1))
    |> Enum.max()
  end


  def exec(nums, max_sum \\ nil, sofar_sum \\ nil)
  def exec([num | tail], nil, nil) do
    exec(tail, num, num)
  end
  def exec([], max_sum, _sofar_sum) do
    max_sum
  end
  def exec([num | tail], max_sum, sofar_sum) do
    next_sofar_sum = max(sofar_sum + num, num)
    exec(tail, max(next_sofar_sum, max_sum), next_sofar_sum)
  end
end
