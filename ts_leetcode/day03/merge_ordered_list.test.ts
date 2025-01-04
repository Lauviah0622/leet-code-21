import { expect, test } from "bun:test";
import { ListNode, mergeTwoLists } from "./merge_ordered_list";

const isMatch = (list: ListNode | null, arr: number[]) => {
  let res = true;

  arr.forEach((element) => {
    res &&= list?.val === element;
    list = list?.next ?? null;
  });

  return res;
};

const createListNode = (arr: number[]) => {
  let node: ListNode | null = null
  let start: ListNode | null = node

  arr.forEach((e) => {
    if (node === null) {
      node = new ListNode(e)
      start = node
      return 
    }

    node.next = new ListNode(e);
    node = node.next
  });

  return start;
};

test.skip("isMatch", () => {
  const arr = [1, 2, 3];

  // createListNode(arr).print()
  
  expect(isMatch(createListNode(arr), arr)).toBe(true);
});

// Example 1: merge [1, 2, 4] and [1, 3, 4]
test("Example 1: merge [1, 2, 4] and [1, 3, 4]", () => {
  const list1 = [1, 2, 4];
  const list2 = [1, 3, 4];
  const expectedOutput = [1, 1, 2, 3, 4, 4];

  const res = mergeTwoLists(createListNode(list1), createListNode(list2))

  console.log('res', res);
  

  expect(isMatch(res, expectedOutput)).toBe(true);
});

// Example 2: merge [] and []
test("Example 2: merge [] and []", () => {
  const list1:number[] = [];
  const list2:number[] = [];
  const expectedOutput:number[] = [];

  expect(
    isMatch(
      mergeTwoLists(createListNode(list1), createListNode(list2)),
      expectedOutput
    )
  ).toBe(true);
});

// Example 3: merge [] and [0]
test("Example 3: merge [] and [0]", () => {
  const list1:number[] = [];
  const list2 = [0];
  const expectedOutput = [0];
  const res = mergeTwoLists(createListNode(list1), createListNode(list2))

  // console.log('res', res);
  

  expect(isMatch(res, expectedOutput)).toBe(true);
});
