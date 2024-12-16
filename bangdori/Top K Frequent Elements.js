/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();

  for (const num of nums) {
    let count = 1;

    if (map.has(num)) {
      const prevCount = map.get(num);
      count += prevCount;
    }

    map.set(num, count);
  }

  const numsWithCount = [...map].sort((a, b) => b[1] - a[1]);
  const answer = [];

  for (let i = 0; i < k; i++) {
    answer.push(numsWithCount[i][0]);
  }

  return answer;
};
