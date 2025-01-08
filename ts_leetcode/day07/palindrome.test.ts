import { describe, expect, test } from 'bun:test';
import { isPalindrome, isAlpha } from './palindrome';

test("isAlpha", () => {
  expect(isAlpha('a')).toBe(true);
  expect(isAlpha('f')).toBe(true);
  expect(isAlpha(' ')).toBe(false);
  expect(isAlpha('^')).toBe(false);
  expect(isAlpha('A')).toBe(true);
  expect(isAlpha('G')).toBe(true);
  expect(isAlpha('Z')).toBe(true);
})

test("Example 1: isPalindrome('A man, a plan, a canal: Panama')", () =>  {
  const s = "A man, a plan, a canal: Panama";
  const expectedOutput = true;

  expect(isPalindrome(s)).toBe(expectedOutput);
});

// Example 2: s = "race a car"
test("Example 2: isPalindrome('race a car')", () => {
  const s = "race a car";
  const expectedOutput = false;

  expect(isPalindrome(s)).toBe(expectedOutput);
});

// Example 3: s = " "
test("Example 3: isPalindrome(' ')", () => {
  const s = " ";
  const expectedOutput = true;

  expect(isPalindrome(s)).toBe(expectedOutput);
});

test("Example 3: isPalindrome(' ')", () => {
  const s = "0P";
  const expectedOutput = false;

  expect(isPalindrome(s)).toBe(expectedOutput);
});

test("Example 3: isPalindrome(' ')", () => {
  const s = "aa";
  const expectedOutput = true;

  expect(isPalindrome(s)).toBe(expectedOutput);
});
