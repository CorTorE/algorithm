/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const sortedNums = nums.sort((a, b) => b - a);
  const uniqueNums = [...new Set(sortedNums)];

  if (uniqueNums.length <= 2) {
    return uniqueNums[0];
  }

  return uniqueNums[2];
};
