const bracketMap = {
  "]": -1,
  ")": -2,
  "}": -3,
  "[": 1,
  "(": 2,
  "{": 3,
};

var isValid = function (s) {
  if (bracketMap[s[0]] < 0) {
    return false;
  }

  const stack = [];

  for (let i = 0; i < s.length; i += 1) {
    const symbol = bracketMap[s[i]];

    if (isOpenBracket(symbol)) {
      stack.push(symbol);
      continue;
    }

    if (isEmptyStack(stack)) {
      return false;
    }

    if (stack[stack.length - 1] === symbol * -1) {
      stack.pop();
    } else {
      stack.push(symbol);
    }
  }

  return isEmptyStack(stack);
};

function isEmptyStack(stack) {
  return stack.length === 0;
}

function isOpenBracket(symbol) {
  return symbol > 0;
}
