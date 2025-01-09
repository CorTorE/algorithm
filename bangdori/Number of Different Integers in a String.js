const UNSPECIFIED = -1;

/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  let prevNumberPos = UNSPECIFIED;
  const numberGroups = new Set();

  for (let i = 0; i < word.length; i++) {
    if (
      isNumber(word[i]) &&
      prevNumberPos !== UNSPECIFIED &&
      word[prevNumberPos] !== "0"
    ) {
      continue;
    }

    if (isNumber(word[i])) {
      prevNumberPos = i;
      continue;
    }

    if (prevNumberPos === UNSPECIFIED) {
      continue;
    }

    numberGroups.add(word.substring(prevNumberPos, i));
    prevNumberPos = UNSPECIFIED;
  }

  if (prevNumberPos !== UNSPECIFIED) {
    numberGroups.add(word.substring(prevNumberPos, word.length));
  }

  return numberGroups.size;
};

function isNumber(character) {
  return character >= "0" && character <= "9";
}
