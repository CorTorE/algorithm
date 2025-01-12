/*
23:02 ~ 23:43

Time : O((m*n) * 4(m*n) => (m*n)^2) => 큐나 우선순위 큐 쓰면 m*n이 맞는데, 최악의 경우애는 4*(m*n) 만큼의 요소들이 들어갈 수 있고 하나가 shift되면 나머지가 다 땡겨져야되기 때문에 이렇게 됨
Space : O(m*n)
ALGO : BFS, for
DS : array, hash set
Constraints
- m == matrix.length
- n == matrix[0].length
- 1 <= m, n <= 200
- -2^31 <= matrix[i][j] <= 2^31 - 1
Edge Case : X
*/

var setZeroes = function(matrix) {
    const directions = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    let arr = [];
    let visited = new Set();

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                for (let k = 0; k < directions.length; k++) {
                    const newR = i + directions[k][0];
                    const newC = j + directions[k][1];
                    if (isValidRC(newR, newC, k)) {
                        visited.add(`${newR},${newC},${k}`);
                        arr.push([newR, newC, k]);
                    }
                }
            }
        }
    }

    while (arr.length > 0) {
        const [curR, curC, curDirIdx] = arr.shift();
        matrix[curR][curC] = 0;

        const newR = curR + directions[curDirIdx][0];
        const newC = curC + directions[curDirIdx][1];

        if (isValidRC(newR, newC, curDirIdx)) {
            visited.add(`${newR},${newC},${curDirIdx}`);
            arr.push([newR, newC, curDirIdx]);
        }
    }


    function isValidRC (r, c, dirIdx) {
        return r >= 0 && r < matrix.length && c >= 0 && c < matrix[0].length && !visited.has(`${r},${c},${dirIdx}`)
    }


    return matrix;
};
