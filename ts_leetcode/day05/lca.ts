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

// console.log(arrayToBinaryTree([6]))
// console.log(arrayToBinaryTree([6,2,8]))
// console.log(JSON.stringify(arrayToBinaryTree([6,2,8,0,4,7,9,null,null,3,5])))

// 這個資料結構不好找 path 啊，真的不好找
// BST 有 sorted 過的有一些特殊的方式可以弄

export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode,
  q: TreeNode
): TreeNode | null {
  const queue = [root];

  while (queue.length > 0) {
    // 這裡是 BFS 

    // 根本不用作 search，就直接找就好了


    const node = queue.shift();

    if (!node) return null;

    if (q.val === node?.val || p.val === node?.val) return node;

    const pDirection = node?.val > p.val ? 'left' : 'right';
    const qDirection = node?.val > q.val ? 'left' : 'right';

    if (pDirection !== qDirection) return node;

    node?.left && queue.push(node?.left);
    node?.right && queue.push(node?.right);
  }

  return null
}


export function lowestCommonAncestor2(
  root: TreeNode | null,
  p: TreeNode,
  q: TreeNode
): TreeNode | null {
  let current = root
  while(current) {
    if (p.val > current.val && q.val > current.val) {
      current = current.right
      // 因為是有序的，所以 p, q 都大於 current 表示兩個 node 都在右邊
    } else if (p.val < current.val && q.val < current.val) {
      current = current.left
       // 因為是有序的，所以 p, q 都大於 current 表示兩個 node 都在左邊
    } else {
      // 表示其中一個 node 就是 p, q，那就是直接 return current
      return current;
    }
  }
  return current;

}