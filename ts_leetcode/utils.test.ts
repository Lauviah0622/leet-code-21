import { describe, expect, test } from "bun:test";
import { createCycleLinkList, ListNode } from "./utils";




describe('create cycle link list', () => {
  test('123', () => {

    // cycle the tail
    const arr =[3, 2, 0, -4]
    const tail = 1;
    const output = [3, 2, 0, -4, 2, 0, -4, 2, 0, -4, 2, 0, -4];

    let list: ListNode = createCycleLinkList(arr, tail)

    list.print(10);

    output.forEach((val) => {
      expect(val).toBe(list.val)

      list?.next && (list = list?.next);
    })
    
  });
})
