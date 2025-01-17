import { expect, test } from 'bun:test';
import { canConstruct } from './ransom_note';

test('Example 1', () => {
  const ransomNote = 'a';
  const magazine = 'b';
  const output = false;

  expect(canConstruct(ransomNote, magazine)).toBe(output);
});

test('Example 2', () => {
  const ransomNote = 'aa';
  const magazine = 'ab';
  const output = false;

  expect(canConstruct(ransomNote, magazine)).toBe(output);
});

test('Example 3', () => {
  const ransomNote = 'aa';
  const magazine = 'aab';
  const output = true;

  expect(canConstruct(ransomNote, magazine)).toBe(output);
});
