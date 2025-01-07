import { describe, expect, test } from 'bun:test';
import { arrayToBinaryTree, lowestCommonAncestor, lowestCommonAncestor2, TreeNode } from './lca';

describe('lowestCommonAncestor', () => {
  test('Example 1: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8', () => {
    const tree = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5];
    const p = new TreeNode(2);
    const q = new TreeNode(8);

    const expectedOutput = 6;

    expect(lowestCommonAncestor(arrayToBinaryTree(tree), p, q)?.val).toBe(
      expectedOutput
    );
  });

  test('Example 2: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4', () => {
    const tree = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5];
    const p = new TreeNode(2);
    const q = new TreeNode(4);

    const expectedOutput = 2;

    expect(lowestCommonAncestor(arrayToBinaryTree(tree), p, q)?.val).toBe(
      expectedOutput
    );
  });

  test('Example 3: root = [2,1], p = 2, q = 1', () => {
    const tree = [2, 1];
    const p = new TreeNode(2);
    const q = new TreeNode(1);

    const expectedOutput = 2;

    expect(lowestCommonAncestor(arrayToBinaryTree(tree), p, q)?.val).toBe(
      expectedOutput
    );
  });

  test('Example 4: root = [0,-1000000000,1000000000], p = -1000000000, q = 1000000000', () => {
    const tree = [0, -1000000000, 1000000000];
    const p = new TreeNode(-1000000000);
    const q = new TreeNode(1000000000);

    const expectedOutput = 0;

    expect(lowestCommonAncestor(arrayToBinaryTree(tree), p, q)?.val).toBe(
      expectedOutput
    );
  });
});


describe('lowestCommonAncestor2', () => {
  test('Example 1: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8', () => {
    const tree = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5];
    const p = new TreeNode(2);
    const q = new TreeNode(8);

    const expectedOutput = 6;

    expect(lowestCommonAncestor2(arrayToBinaryTree(tree), p, q)?.val).toBe(
      expectedOutput
    );
  });

  test('Example 2: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4', () => {
    const tree = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5];
    const p = new TreeNode(2);
    const q = new TreeNode(4);

    const expectedOutput = 2;

    expect(lowestCommonAncestor2(arrayToBinaryTree(tree), p, q)?.val).toBe(
      expectedOutput
    );
  });

  test('Example 3: root = [2,1], p = 2, q = 1', () => {
    const tree = [2, 1];
    const p = new TreeNode(2);
    const q = new TreeNode(1);

    const expectedOutput = 2;

    expect(lowestCommonAncestor2(arrayToBinaryTree(tree), p, q)?.val).toBe(
      expectedOutput
    );
  });

  test.only('Example 4: root = [0,-1000000000,1000000000], p = -1000000000, q = 1000000000', () => {
    const tree = [0, -1000000000, 1000000000];
    const p = new TreeNode(-1000000000);
    const q = new TreeNode(1000000000);

    const expectedOutput = 0;

    expect(lowestCommonAncestor2(arrayToBinaryTree(tree), p, q)?.val).toBe(
      expectedOutput
    );
  });
})