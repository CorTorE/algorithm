/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const answer = [];
  const sortedNums = [...nums].sort((a, b) => a - b);

  let leftPos = 0;
  let rightPos = nums.length - 1;

  while (leftPos < rightPos) {
    const leftNum = sortedNums[leftPos];
    const rightNum = sortedNums[rightPos];
    const sum = leftNum + rightNum;

    if (sum > target) {
      rightPos -= 1;
      continue;
    }

    if (sum < target) {
      leftPos += 1;
      continue;
    }

    if (sum === target) {
      const leftRealPos = nums.indexOf(leftNum);
      const rightRealPos = nums.lastIndexOf(rightNum);

      answer.push(leftRealPos);
      answer.push(rightRealPos);

      break;
    }
  }

  return answer;
};
