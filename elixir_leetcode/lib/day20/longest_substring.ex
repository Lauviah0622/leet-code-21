defmodule LongestSubstring do
  @spec length_of_longest_substring(s :: String.t) :: integer
  def length_of_longest_substring(s) do
    sorted_list = s
    |> subsets()
    |> Enum.map(fn str -> String.codepoints(str) end)
    |> Enum.filter(fn str_list ->
      str_list
      |> Enum.frequencies()
      |> Enum.all?(fn {_k, v}->
        v === 1
      end)
    end)
    |> Enum.sort(&(length(&1) > length(&2)))
    |> List.first([])
    |> length
  end

  def subsets(s) do
    str_list= String.codepoints(s)

    pos_list = 0..String.length(s)
    |> Enum.flat_map(fn from ->
      0..String.length(s)
      |> Enum.map(fn to ->
        [from, to]
      end)
    end)
    |> Enum.filter(fn [from ,to] ->
      from < to
    end)
    |> Enum.map(fn [from, to]->
      String.slice(s, from..to - 1)
    end
    )
  end


  def length_of_longest_substring_2(s) do
    get_sub(String.codepoints(s), 0, 0, [])
  end

  def get_sub(str_list, i, max_count, sub_str_list) do
    ch = str_list |> Enum.at(i)

    from = Enum.find_index(sub_str_list, fn c -> c == ch end)

    next_str = if from != nil do
      sub_str_list
        |> Enum.slice(from + 1..-1//1)
        |> Enum.concat([ch])
    else
      sub_str_list ++ [ch]
    end

    if (i == length(str_list)) do
      max_count
    else
      get_sub(str_list, i + 1, max(max_count, length(next_str)), next_str)
    end


  end


  def length_of_longest_substring_3(s) do
    sublen([], String.codepoints(s), 0, 0, 0)
  end

  # left => 左邊已經 loop 過的字
  # right => 右邊已經 loop 過的字
  defp sublen(_, [], _, _, m), do: m

  #
  defp sublen(left, [next | rest] = right, start, stop, m) do
    # 為什麼如果已經有了可以這樣？直接取掉第一個就好？
    # 他不是取掉第一個，他是一直刪掉第一個直到沒有重複
    if Enum.member?(left, next) do
      [_ | mid] = left
      sublen(mid, right, start + 1, stop, m)
    else
      stop = stop + 1
      sublen(left ++ [next], rest, start, stop, max(m, stop - start))
    end
  end


end
