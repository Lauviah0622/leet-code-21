export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }

    print() {
        console.log(this);
        this?.next?.print();
    }
}

const append = (node: ListNode | null, val: number) => {
    if (node === null) {
        node = new ListNode(val ?? null)
        return node
    }

    node.next = new ListNode(val ??null);
    return node.next
}

export function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null,
): ListNode | null {
    let node1: ListNode | null = list1;
    let node2: ListNode | null = list2;
    let node = null;
    let start = null

    while (node1 || node2) {
        // console.log(node1, node2);
        
      if (!node1) {
        const n = append(node, node2?.val!);
        if (!start) {
            start = n;
          }
          node2 && (node2 = node2.next)
        continue;
      }
      if (!node2) {
        const n = append(node, node1?.val);
        if (!start) {
            start = n;
          }
        node1 = node1.next
        continue;
      }

      if (node2.val < node1.val) {
        const n = append(node, node2?.val);
        if (!start) {
          start = n;
        }
        node = n;
        node2 =  node2.next;
      } else {
        const n = append(node, node1?.val);
        if (!start) {
          start = n;
        }
        node = n;
        node1 = node1.next;
      }
    }

    return start;
}

export function mergeSortedArrays(list1: number[], list2: number[]): number[] {
    let index1 = 0;
    let index2 = 0;
    const result: number[] = [];

    while (index1 < list1.length || index2 < list2.length) {
        if (index1 === list1.length) {
            result.push(list2[index2]);
            index2++;
            continue;
        }

        if (index2 === list2.length) {
            result.push(list1[index1]);
            index1++;
            continue;
        }

        const current1 = list1[index1];
        const current2 = list2[index2];

        if (current1 === current2) {
            result.push(current1);
            result.push(current2);

            index1++;
            index2++;
        }

        if (current1 > current2) {
            result.push(current2);

            index2++;
        }

        if (current1 < current2) {
            result.push(current1);

            index1++;
        }
    }

    return result;
}
