/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const size = nums.length;
  let maxEnablePos = 0; // 이동할 수 있는 최대 위치

  for (let i = 0; i < size; i++) {
    if (i > maxEnablePos) return false;
    maxEnablePos = Math.max(maxEnablePos, i + nums[i]);
  }

  return true;
};
