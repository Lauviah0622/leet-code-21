defmodule BinarySearch do
  @spec search(nums :: [integer], target :: integer) :: integer
  def search(nums, target) do
    IO.puts('--')
    divide(nums, target, 0, length(nums))
  end


  def divide(arr, target, left, right) do
    index = floor((left + right) / 2)
    # Enum.at/3 跟 Enum.fetch/2 相比，可以給 default 值，那他媽的 Enum.fetch/2 要幹嘛？？？
    num = Enum.at(arr, index, nil)

    cond do
      # 會拿不到值，這時候就 return -1
      num == nil -> -1
      left >= right -> -1
      num === target -> index
      target > num ->
        divide(arr, target, index + 1, right)
      true ->
        divide(arr, target, left, index)
    end
  end


end
