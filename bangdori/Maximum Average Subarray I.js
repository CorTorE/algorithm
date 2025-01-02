/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let maxSubSum = -Infinity;
  let currSum = 0;
  let lptr = 0,
    rptr = 0;

  for (let i = 0; i < nums.length; i += 1) {
    rptr += 1;

    if (rptr - lptr > k) {
      currSum -= nums[lptr];
      lptr += 1;
    }

    currSum += nums[i];
    if (rptr - lptr === k) {
      maxSubSum = Math.max(maxSubSum, currSum);
    }
  }

  return maxSubSum / k;
};
