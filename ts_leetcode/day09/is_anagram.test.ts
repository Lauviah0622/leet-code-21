import { expect, test } from 'bun:test';
import { isAnagram } from './is_anagram';

test("Example 1: isAnagram", () => {
  const s = "anagram";
  const t = "nagaram"

  expect(isAnagram(s, t)).toBe(true);
});

test("Example 2: isAnagram", () => {
  const s = "rat";
  const t = "car"

  expect(isAnagram(s, t)).toBe(false);
});


// 幹這個測試案例特別針對 8 bit 的儲存我去你的
test("Example 3: isAnagram", () => {
  const s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab";
  const t = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbba"

  expect(isAnagram(s, t)).toBe(false);
});
