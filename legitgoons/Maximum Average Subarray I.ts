function findMaxAverage(nums: number[], k: number): number {
  let 최대합 = 0;
  let 현재합 = 0;

  for (let i = 0; i < k; i++) {
    현재합 += nums[i];
  }
  최대합 = 현재합;

  for (let i = k; i < nums.length; i++) {
    현재합 = 현재합 - nums[i - k] + nums[i];
    최대합 = Math.max(최대합, 현재합);
  }

  return 최대합 / k;
}
