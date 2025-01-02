export function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) break;
      if (nums[i] + nums[j] === target) return [j, i];
    }
  }

  return [0, 0];

}

export function twoSum2(nums: number[], target: number): number[] {
  const records: Record<number, number> = {}

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (records?.[num] !== undefined) {
      return [records[num], i];
    }

    records[target - num] = i
  }

  return [];
}
