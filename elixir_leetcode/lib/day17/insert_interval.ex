defmodule InsertInterval do
  @spec insert(intervals :: [[integer]], new_interval :: [integer]) :: [[integer]]
  def insert(intervals, [new_start, new_end]) do
    left = Enum.filter(intervals, fn [_s, e] -> e < new_start end)
    right = Enum.filter(intervals, fn [s, _e] -> s > new_end end)

    # just get the max and min num from pool
    rest_num =
      [new_start, new_end] ++
      List.flatten(intervals) --
        (List.flatten(left) ++
           List.flatten(right))


    inter = [[Enum.min(rest_num), Enum.max(rest_num)]]

    left ++ inter ++ right
  end
end
