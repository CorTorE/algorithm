/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 1) return strs[0];

  const sortedStrs = strs.sort((a, b) => a.length - b.length);
  const base = strs[0];

  for (let pos = 0; pos < base.length; pos += 1) {
    for (let n = 1; n < strs.length; n += 1) {
      if (strs[n].at(pos) !== base.at(pos)) {
        return base.substring(0, pos);
      }
    }
  }

  return base;
};
