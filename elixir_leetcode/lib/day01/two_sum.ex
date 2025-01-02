defmodule SumNum do
  @spec two_sum(nums :: [integer], target :: integer) :: [integer]
  def two_sum(nums, target) do
    val = find_two_sum(nums, target)
    IO.puts(val)
    val
  end


  @spec find_two_sum(nums :: [integer], target :: integer) :: [integer]

  def find_two_sum(nums, target, position \\ 0, seen \\ %{})
  def find_two_sum([head | tail], target, position, seen) do
    if (Map.has_key?(seen, target - head)) do
      [Map.get(seen, target - head), position]
    else
      next = Map.put(seen, head, position)
      find_two_sum(tail, target, position + 1, next)
    end
  end

  def find_two_sum([], _target, _position, _seen) do
    []
  end




end
