export function search(nums: number[], target: number): number {
  let l: number = 0;
  let r: number = nums.length;

  do {
    const index = Math.floor((r + l) / 2);
    if (nums[index] === target) return index;
    if (target > nums[index]) {
      l = index + 1;
    } else {
      r = index;
    }
  } while (l < r);

  return -1;
}
