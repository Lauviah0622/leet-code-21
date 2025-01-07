import { describe, expect, test } from 'bun:test';

import { maxSubArray, maxSubArrayKadane } from "./max_sub_array";

describe('maxSubArray', () => {
  test("Example 1: maxSubArray([-2,1,-3,4,-1,2,1,-5,4])", () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const expectedOutput = 6;
  
    expect(maxSubArray(nums)).toBe(expectedOutput);
  });
  
  // Example 2: nums = [1]
  test("Example 2: maxSubArray([1])", () => {
    const nums = [1];
    const expectedOutput = 1;
  
    expect(maxSubArray(nums)).toBe(expectedOutput);
  });
  
  // Example 3: nums = [5,4,-1,7,8]
  test("Example 3: maxSubArray([5,4,-1,7,8])", () => {
    const nums = [5, 4, -1, 7, 8];
    const expectedOutput = 23;
  
    expect(maxSubArray(nums)).toBe(expectedOutput);
  });
})


describe('maxSubArrayKadane', () => {
  test("Example 1: maxSubArrayKadane([-2,1,-3,4,-1,2,1,-5,4])", () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const expectedOutput = 6;
  
    expect(maxSubArrayKadane(nums)).toBe(expectedOutput);
  });
  
  // Example 2: nums = [1]
  test("Example 2: maxSubArrayKadane([1])", () => {
    const nums = [1];
    const expectedOutput = 1;
  
    expect(maxSubArrayKadane(nums)).toBe(expectedOutput);
  });
  
  // Example 3: nums = [5,4,-1,7,8]
  test("Example 3: maxSubArrayKadane([5,4,-1,7,8])", () => {
    const nums = [5, 4, -1, 7, 8];
    const expectedOutput = 23;
  
    expect(maxSubArrayKadane(nums)).toBe(expectedOutput);
  });
})

