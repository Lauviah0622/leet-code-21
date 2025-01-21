import { describe, expect, test } from "bun:test";
import { lengthOfLongestSubstring } from "./longest_substring";

describe('lengthOfLongestSubstring', () => {
  test("Example 1", () => {
    const input = "abcabcbb"
    const output = 3
  
    expect(lengthOfLongestSubstring(input)).toEqual(output);
  });
 
  test("Example 2", () => {
    const input = "bbbbb"
    const output = 1
  
    expect(lengthOfLongestSubstring(input)).toEqual(output);
  });
 
  test("Example 3", () => {
    const input = "pwwkew"
    const output = 3
  
    expect(lengthOfLongestSubstring(input)).toEqual(output);
  });

  test("Example 4", () => {
    const input = "dvdf"
    const output = 3
  
    expect(lengthOfLongestSubstring(input)).toEqual(output);
  });
 
})  
