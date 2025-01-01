/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rowSize = matrix.length;
  const colSize = matrix[0].length;

  const zeroRows = new Set();
  const zeroCols = new Set();

  for (let row = 0; row < rowSize; row++) {
    for (let col = 0; col < colSize; col++) {
      if (matrix[row][col] !== 0) continue;

      zeroRows.add(row);
      zeroCols.add(col);
    }
  }

  for (const row of zeroRows) {
    for (let col = 0; col < colSize; col++) {
      matrix[row][col] = 0;
    }
  }

  for (const col of zeroCols) {
    for (let row = 0; row < rowSize; row++) {
      matrix[row][col] = 0;
    }
  }
};
