export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(
    val: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export function arrayToBinaryTree(arr: (number | null)[]) {
  let root: null | TreeNode = null;
  let fillingQueue: [TreeNode, 'left' | 'right'][] = [];

  const apply = (
    node: TreeNode | null,
    val: number | null,
    pos?: 'left' | 'right'
  ) => {
    const n = new TreeNode(val);

    if (!node) {
      return n;
    }

    pos && (node[pos] = n);
    return n;
  };

  arr.forEach((element) => {
    if (!root) {
      const node = apply(root, element);
      root = node;
      fillingQueue.push([node, 'left'], [node, 'right']);
      return;
    }

    const target = fillingQueue.shift();
    if (!target) {
      return;
    }

    const [position, side] = target;
    const node = apply(position, element, side);
    fillingQueue.push([node, 'left'], [node, 'right']);
  });

  return root;
}

export function binaryTreeToArray(root: TreeNode | null): (number | null)[] {
  if (!root) return [];

  const result: (number | null)[] = [];
  const queue: (TreeNode | null)[] = [root];

  while (queue.length) {
      const node = queue.shift();
      if (node) {
          result.push(node.val);
          queue.push(node.left);
          queue.push(node.right);
      } else {
          result.push(null);
      }
  }

  while (result[result.length - 1] === null) {
      result.pop();
  }

  return result;
}

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next: ListNode | null = null) {
      this.val = val
      this.next = next;
  }
  print(depth: number) {
    if (depth === 0) return
    console.log(this.val)
    this.next?.print(depth - 1)
  }
}

export function createCycleLinkList(arr: number[], tail: number) {
  const head = new ListNode(arr.shift()!);
  const nodes = [head]
  let current = head

  while (arr.length > 0) {
    const val = arr.shift();
    if (val === undefined) break;

    const n = new ListNode(val)

    nodes.push(n);
    current.next = n;
    current = n;
  }

  console.log('nodes', nodes);
    

  current.next = nodes?.[tail] ?? null

  return head

}