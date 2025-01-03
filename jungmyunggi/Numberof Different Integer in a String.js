/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    const regex = /[0-9]+/g;
    const arr = word.match(regex)
    if(!arr) return 0
    const set = new Set(arr.map(n => BigInt(n)))
    return [...set].length
};
