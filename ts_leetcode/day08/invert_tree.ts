import { TreeNode, arrayToBinaryTree } from '../utils';

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;

  const left = invertTree(root?.right);
  const right = invertTree(root?.left);

  root.left = left;
  root.right = right;

  return root;
}
