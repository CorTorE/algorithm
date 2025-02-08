/**
 * @param {number} n
 * @return {number}
 */
var twoEggDrop = function (n) {
    function find(number) {
      let temp = 0;
      for (let i = 1; i <= number; i++) {
        temp += i;
      }
      if (temp >= n) return number;
      else return false;
    }
    let i = 0;
    while (true) {
      if (find(i) !== false) return i;
      i++;
    }
  };
