/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (isZero(x)) return true;
  if (isNegative(x)) return false;
  if (isZeroInOnesPlace(x)) return false;

  let number = parseInt(x);
  let temp = 0;

  while (number > 0) {
    const digit = number % 10;
    const nextNumber = parseInt(number / 10);
    temp = temp * 10 + digit;

    if (number === temp || nextNumber === temp) {
      return true;
    }

    number = nextNumber;
  }

  return false;
};

function isNegative(number) {
  return number < 0;
}

function isZero(number) {
  return number === 0;
}

function isZeroInOnesPlace(number) {
  return number % 10 === 0;
}
