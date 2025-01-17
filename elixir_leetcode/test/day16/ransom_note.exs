defmodule RansomNote.Test do
  use ExUnit.Case

  test "Example 1" do
    ransomNote = "a"
    magazine = "b"
    output = false

    assert RansomNote.can_construct(ransomNote, magazine) == output
  end

  test "Example 2" do
    ransomNote = "aa"
    magazine = "ab"
    output = false

    assert RansomNote.can_construct(ransomNote, magazine) == output
  end

  test "Example 3" do
    ransomNote = "aa"
    magazine = "aab"
    output = true

    assert RansomNote.can_construct(ransomNote, magazine) == output
  end

  test "Example 1 - 2" do
    ransomNote = "a"
    magazine = "b"
    output = false

    assert RansomNote.can_construct_2(ransomNote, magazine) == output
  end

  test "Example 2 - 2" do
    ransomNote = "aa"
    magazine = "ab"
    output = false

    assert RansomNote.can_construct_2(ransomNote, magazine) == output
  end

  test "Example 3 - 2" do
    ransomNote = "aa"
    magazine = "aab"
    output = true

    assert RansomNote.can_construct_2(ransomNote, magazine) == output
  end
end
