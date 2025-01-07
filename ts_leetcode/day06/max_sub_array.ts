

export function maxSubArray(nums: number[]): number {
  let maxSum = 0

  for (let from = 0; from < nums.length; from++) {
    for (let to = 0; to < nums.length; to++) {
      const sum = nums.slice(from, to + 1).reduce((s, num) => s + num, 0);
      
      
      maxSum = Math.max(maxSum, sum)
    }
  }

  return maxSum
}

export function maxSubArrayKadane(nums: number[]): number{
  let maxSum: number = nums[0];
  let sofarSum: number = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    sofarSum = Math.max(sofarSum + num, num);
    maxSum = Math.max(maxSum, sofarSum);
    
  }

  return maxSum
}
