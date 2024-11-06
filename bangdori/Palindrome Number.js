/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  const numbers = makeNumbers(x);

  let ltr = 0;
  let rtr = numbers.length - 1;

  while (ltr < rtr) {
    if (numbers[ltr] === numbers[rtr]) {
      ltr += 1;
      rtr -= 1;
      continue;
    }

    return false;
  }

  return true;
};

function makeNumbers(number) {
  const numbers = [];

  while (number > 0) {
    const digit = number % 10;
    number = parseInt(number / 10, 10);
    numbers.push(digit);
  }

  return numbers;
}
