/*
N === grid.length
Time : O(N^3), Space : O(N^2)
ALGO : DFS, for
DS : Array
Constraints
 - 2 <= grid.length <= 100
 - grid[i][j] is either 0 or 1
*/

const LAND = 1
const VISITED_LAND = 2
var shortestBridge = function (grid) {
  let arr = [];
  let arr2 = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == LAND) {
        if (arr.length == 0) {
          grid[i][j] = VISITED_LAND;
          dfs(grid, i, j, arr);
        } else {
          grid[i][j] = VISITED_LAND;
          dfs(grid, i, j, arr2);
        }
      }
    }
  }

  let val = 0;
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      val =
        Math.abs(arr2[j][0] - arr[i][0]) + Math.abs(arr2[j][1] - arr[i][1]) - 1;
      min = Math.min(min, val)
    }
  }
  return min;
};

function dfs(grid, i, j, arr) {
  arr.push([i, j]);
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  for(let direction of directions){
    const newI = direction[0] + i;
    const newJ = direction[1] + j;
    if(newI >= 0 && newI < grid.length && newJ >= 0 && newJ < grid[0].length && grid[newI][newJ] === LAND){
      grid[newI][newJ] = VISITED_LAND;
      dfs(grid, newI, newJ, arr)
    }
  }
}
