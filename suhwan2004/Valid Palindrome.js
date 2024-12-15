/*
Time : O(N), Space : O(N)
ALGO : two pointer
DS : string
Constraints
 - 1 <= s.length <= 2 * 105
 - s consists only of printable ASCII characters.
Edge case : X
*/

var isPalindrome = function (s) {
  let start = 0,
    end = s.length - 1;

  while (start !== end && start <= end) {
    const sChar = changeLowerCase(s[start]);
    const eChar = changeLowerCase(s[end]);

    if (!checkValidChar(sChar)) {
      start++;
      continue;
    } else if (!checkValidChar(eChar)) {
      end--;
      continue;
    }

    if (sChar !== eChar) {
      return false;
    }

    start++;
    end--;
  }

  return true;
};

const changeLowerCase = (c) => {
  const charCd = c.charCodeAt();
  if (charCd >= 65 && charCd <= 90) {
    return c.toLowerCase();
  }
  return c;
};

const checkValidChar = (c) => {
  const charCd = c.charCodeAt();
  return (charCd >= 97 && charCd <= 122) || (charCd >= 48 && charCd <= 57);
};
