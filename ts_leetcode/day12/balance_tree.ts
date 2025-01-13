import { TreeNode } from "../utils";

export function isBalanced(root: TreeNode | null): boolean {
  const result = depthCheck(root);
  console.log("result", result);

  return result >= 0;
}

function depthCheck(root: TreeNode | null): number {
  if (root === null) return 0;

  const left = depthCheck(root.left);
  const right = depthCheck(root.right);

  if (left === -1 || right === -1) return -1;

  return Math.abs(left - right) > 1 ? -1 : Math.max(left, right) + 1;
}

/**
1. 有一邊不平衡，就是 false
2.
*/
