const WATER = 0;
const ISLAND = 1;
const ISLAND2 = 2;
const DIRS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  let queue = [];

  const exploreIslandDFS = (row, col) => {
    if (grid[row][col] === ISLAND2) return;

    grid[row][col] = ISLAND2;
    queue.push([row, col]);

    for (let [dx, dy] of DIRS) {
      const nextRow = row + dx;
      const nextCol = col + dy;

      if (
        nextRow >= 0 &&
        nextRow < rows &&
        nextCol >= 0 &&
        nextCol < cols &&
        grid[nextRow][nextCol] === ISLAND
      ) {
        exploreIslandDFS(nextRow, nextCol);
      }
    }
  };

  const connectIslandBFS = () => {
    /**
     * 이동 거리를 나타내는 변수
     * ISLAND와 차이를 두기 위해 음수값으로 적용
     */
    let distance = -1;
    let currentQueue = queue;

    while (currentQueue.length > 0) {
      queue = [];

      for (const [row, col] of currentQueue) {
        for (const [dx, dy] of DIRS) {
          const nextRow = row + dx;
          const nextCol = col + dy;

          if (
            nextRow >= 0 &&
            nextRow < rows &&
            nextCol >= 0 &&
            nextCol < cols
          ) {
            if (grid[nextRow][nextCol] === WATER) {
              queue.push([nextRow, nextCol]);
              grid[nextRow][nextCol] = distance;
            }

            if (grid[nextRow][nextCol] === ISLAND) {
              return (distance + 1) * -1;
            }
          }
        }
      }

      distance -= 1;
      currentQueue = queue;
    }

    return 1;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === WATER) continue;

      exploreIslandDFS(r, c);
      return connectIslandBFS();
    }
  }

  return -1; // Error
};
