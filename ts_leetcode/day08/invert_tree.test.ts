import { expect, test } from 'bun:test';
import { arrayToBinaryTree, binaryTreeToArray } from "../utils";
import { invertTree } from "./invert_tree";


// Example 1: root = [4,2,7,1,3,6,9]
test("Example 1: invertTree([4,2,7,1,3,6,9])", () => {
  const root = arrayToBinaryTree([4, 2, 7, 1, 3, 6, 9]);
  const expectedOutput = [4, 7, 2, 9, 6, 3, 1];

  expect(binaryTreeToArray(invertTree(root))).toEqual(expectedOutput);
});

// Example 2: root = [2,1,3]
test("Example 2: invertTree([2,1,3])", () => {
  const root = arrayToBinaryTree([2, 1, 3]);
  const expectedOutput = [2, 3, 1];

  expect(binaryTreeToArray(invertTree(root))).toEqual(expectedOutput);
});

// Example 3: root = []
test("Example 3: invertTree([])", () => {
  const root = arrayToBinaryTree([]);
  const expectedOutput: number[] = [];

  expect(binaryTreeToArray(invertTree(root))).toEqual(expectedOutput);
});