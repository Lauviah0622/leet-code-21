import { ListNode } from "../utils";

export function hasCycle(head: ListNode | null): boolean {
  let current: ListNode | null = head;
  const set = new Set();
  while (current !== null) {
    set.add(current)
    current = current?.next ?? null
    if (set.has(current)) {
      return true
    }
  }

  return false
}

export function hasCycleTwoPtr(head: ListNode | null): boolean {
  let slow: ListNode | null = head
  let fast: ListNode | null = head

  while (fast !== null && slow !== null) {
    
    
    fast = fast.next?.next ?? null
    slow = slow.next
    
    if (slow === fast && fast !== null) return true;
    console.log(slow, fast);
    
  }

  return false
}



export function hasCycleTwoPtr2(head: ListNode | null): boolean {
  let slow: ListNode | null = head
  let fast: ListNode | null = head

  while (fast !== null && fast.next !== null) {
    fast = fast.next?.next ?? null
    slow = slow?.next ?? null
    
    if (slow === fast) return true;
  }

  return false
}
