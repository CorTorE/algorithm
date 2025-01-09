/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s[0] === "0") return 0;

  const sLen = s.length;
  const dp = new Array(sLen + 1).fill(0);
  dp[0] = dp[1] = 1;

  for (let i = 2; i <= sLen; i++) {
    const oneDigit = parseInt(s[i - 1]);
    const twoDigit = parseInt(s.substring(i - 2, i));

    if (1 <= oneDigit && oneDigit <= 9) {
      dp[i] += dp[i - 1];
    }

    if (10 <= twoDigit && twoDigit <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[sLen];
};
