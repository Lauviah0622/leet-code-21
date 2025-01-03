defmodule ValidParentheses.Test do
  use ExUnit.Case

  test "case 1" do
    res = ValidParentheses.is_valid("()")

    assert res === true
  end

  test "case 2" do
    res = ValidParentheses.is_valid("()[]{}")

    assert res === true
  end

  test "case 3" do
    res = ValidParentheses.is_valid("(]")

    assert res === false
  end

  @tag :only
  test "case 4" do
    res = ValidParentheses.is_valid("([])")

    assert res === true
  end


end
