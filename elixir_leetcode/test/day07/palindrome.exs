defmodule Palindrome.Test do
  use ExUnit.Case


  test "Example 1: is_palindrome('A man, a plan, a canal: Panama')" do
    s = "A man, a plan, a canal: Panama"
    expected_output = true

    assert Palindrome.is_palindrome(s) == expected_output
  end

  test "Example 2: is_palindrome('race a car')" do
    s = "race a car"
    expected_output = false

    assert Palindrome.is_palindrome(s) == expected_output
  end

  test "Example 3: is_palindrome(' ')" do
    s = " "
    expected_output = true

    assert Palindrome.is_palindrome(s) == expected_output
  end

end
