import { expect, test } from "bun:test";
import { isBalanced } from "./balance_tree";
import { arrayToBinaryTree } from "../utils";

test("Example 1", () => {
  const input = [3,9,20,null,null,15,7];
  const output = true;

  expect(isBalanced(arrayToBinaryTree(input))).toEqual(output);
});

test("Example 2", () => {
  const input = [1,2,2,3,3,null,null,4,4];
  const output = false;

  expect(isBalanced(arrayToBinaryTree(input))).toEqual(output);
});

test("Example 3", () => {
  const input: number[] = [];
  const output = true;

  expect(isBalanced(arrayToBinaryTree(input))).toEqual(output);
});
