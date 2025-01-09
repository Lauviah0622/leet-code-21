import { expect, test } from 'bun:test';
import { search } from './binary_search';

test("Example 1", () => {
  const nums = [-1,0,3,5,9,12]
  const target = 9
  const output = 4
  
  expect(search(nums, target)).toBe(output);
});

test("Example 2", () => {
  const nums = [-1,0,3,5,9,12]
  const target = 2;
  const output = -1

  expect(search(nums, target)).toBe(output);
});
