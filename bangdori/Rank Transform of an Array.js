/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  const sortedArr = [...arr].sort((a, b) => a - b);
  const ranks = {};

  let rank = 1;
  for (const element of sortedArr) {
    if (ranks[element]) continue;

    ranks[element] = rank;
    rank += 1;
  }

  const ranksArr = arr.map((element) => ranks[element]);
  return ranksArr;
};
