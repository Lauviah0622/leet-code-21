defmodule LongestSubstring.Test do
  use ExUnit.Case

  def sorter(list) do
    list
    |> Enum.sort(fn ([head_a | _], [head_b | _]) -> head_a > head_b end)
  end

  test "Example 1" do
    input = "abcabcbb"
    output = 3

    assert LongestSubstring.length_of_longest_substring_2(input) == output
  end

  test "Example 2" do
    input = "bbbbb"
    output = 1
    assert LongestSubstring.length_of_longest_substring_2(input) == output
  end

  test "Example 3" do
    input = "pwwkew"
    output = 3

    assert LongestSubstring.length_of_longest_substring_2(input) == output
  end

  test "Example 4" do
    input = "dvdf"
    output = 3

    assert LongestSubstring.length_of_longest_substring_2(input) == output
  end

  test "Example 5" do
    input = "hvnjphmatuyqrooblzklatcsgfsswzhfuwpledozyopreftqeddgzfyhlqzjriongfzmjpnjdeak"
    output = 13

    assert LongestSubstring.length_of_longest_substring_2(input) == output
  end


  test "Example 6" do
    input = "nqcvcfclryeraaxmoidvuzuvgepdyfolvsgzxkkqiqjkqgzhrccnexikdzpbefobyvaxhmqqdzc"
    output = 13

    assert LongestSubstring.length_of_longest_substring_2(input) == output
  end

  test "Example 7" do
    input = "aabaab!bb"
    output = 3

    assert LongestSubstring.length_of_longest_substring_2(input) == output
  end

  test "Example 8" do
    input = "tgzbdztihyxiscgdfvtgggdvquzorxflffojghrnhqybvggaczikhnfxheozetmjaash"
    output = 11

    assert LongestSubstring.length_of_longest_substring_3(input) == output
  end


end
