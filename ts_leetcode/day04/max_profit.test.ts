import { expect, test } from "bun:test";
import { maxProfit } from "./max_profit";

test("Example 1: maxProfit([7,1,5,3,6,4])", () => {
  const prices = [7, 1, 5, 3, 6, 4];
  const expectedOutput = 5;

  expect(maxProfit(prices)).toBe(expectedOutput);
});

// Example 2: prices = [7,6,4,3,1]
test("Example 2: maxProfit([7,6,4,3,1])", () => {
  const prices = [7, 6, 4, 3, 1];
  const expectedOutput = 0;

  expect(maxProfit(prices)).toBe(expectedOutput);
});

test("Example 3: maxProfit([2,4,1])", () => {
  const prices = [2,4,1];
  const expectedOutput = 2;

  expect(maxProfit(prices)).toBe(expectedOutput);
});