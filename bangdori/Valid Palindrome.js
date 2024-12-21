/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const removedNonAlphanemuricString = [...s.toLowerCase()].filter(
    (alpha) => isLowerAlphabet(alpha) || isNumeric(alpha)
  );

  return (
    removedNonAlphanemuricString.join("") ===
    removedNonAlphanemuricString.reverse().join("")
  );
};

function isLowerAlphabet(character) {
  return character >= "a" && character <= "z";
}

function isNumeric(character) {
  return character >= "0" && character <= "9";
}
