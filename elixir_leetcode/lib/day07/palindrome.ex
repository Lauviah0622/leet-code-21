defmodule Palindrome do
  @spec is_palindrome(s :: String.t()) :: boolean
  def is_palindrome(s) do
    list =
      s
      |> String.downcase()
      # 替換掉所有非法字元
      |> String.replace(~r/[^a-zA-Z0-9]/, "")

    String.reverse(list) == list
  end
end
