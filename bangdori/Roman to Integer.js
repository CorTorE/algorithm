/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const stack = s.split("");
  let result = 0;

  while (!isEmpty(stack)) {
    const currNumber = convertRomanToNumber(stack.pop());

    if (isEmpty(stack)) {
      result += currNumber;
      break;
    }

    const nextNumber = convertRomanToNumber(stack[stack.length - 1]);
    if (nextNumber >= currNumber) {
      result += currNumber;
    } else {
      stack.pop();
      result += currNumber - nextNumber;
    }
  }

  return result;
};

function isEmpty(array) {
  return array.length === 0;
}

function convertRomanToNumber(roman) {
  switch (roman) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return 0;
  }
}
