/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let answer = 0;
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
      continue;
    }

    if (stack.length > 0 && stack.at(-1) === "(") {
      stack.pop();
      continue;
    }

    answer += 1;
  }

  answer += stack.length;
  return answer;
};
