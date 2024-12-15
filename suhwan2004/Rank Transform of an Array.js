/**
 * @param {number[]} arr
 * @return {number[]}
 */

/*
N === arr.length
Time : O(NlogN), Space : O(N)
ALGO : for
DS : hashMap, Array
Constraints
 - 0 <= arr.length <= 10^5
 - -10^9 <= arr[i] <= 10^9
Edge Case : arr.length === 0 일시, return arr
*/
var arrayRankTransform = function (arr) {
  if (arr.length === 0) {
    return arr;
  }
  const sortMap = new Map();
  const sortArr = [...arr].sort((a, b) => a - b);

  let rank = 1;
  for (let i = 0; i < sortArr.length; i++) {
    if (i !== 0 && sortArr[i] !== sortArr[i - 1]) {
      rank++;
    }
    sortMap.set(sortArr[i], rank);
  }
  return arr.map((cur) => sortMap.get(cur));
};
