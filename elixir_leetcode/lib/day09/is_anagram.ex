defmodule IsAnagram do
  @spec is_anagram(s :: String.t, t :: String.t) :: boolean
  def is_anagram(s, t) do
    String.bag_distance(s, t) == 1.0
  end

  def is_anagram_3(s, t) do
    to = fn str -> str |> String.to_charlist() |> Enum.frequencies end

    to.(s) == to.(t)
  end

  @spec is_anagram_2(s :: String.t, t :: String.t) :: boolean
  def is_anagram_2(s, t) do
    s_count = to_counts(s)
    t_count = to_counts(t)

    s_count == t_count
  end

  @spec to_counts(s :: String.t) :: number()
  def to_counts(str) do
    str
    |> String.graphemes()
    |> Enum.reduce(%{}, fn e, acc ->
      count = Map.get(acc, e, 0) + 1
      Map.put(acc, e, count)
    end)
  end
end
