defmodule ValidParentheses do
  @spec is_valid(s :: String.t) :: boolean
  def is_valid(s) do
    check(s)
  end

  def check(str, queue \\ [])
  def check("", []), do: true
  def check("", queue), do: false

  def check("}" <> str, ["{" | tail]), do: check(str, tail)
  def check("]" <> str, ["[" | tail]), do: check(str, tail)
  def check(")" <> str, ["(" | tail]), do: check(str, tail)

  def check(<<char_code>> <> str, queue) do
    check(str, [<<char_code::utf8>> | queue])
  end


end
