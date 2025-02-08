/**
 * @param {number[][]} land
 * @return {number[][]}
 */

var findFarmland = function(land) {
    const m = land[0].length
    const n = land.length
    
    const visited = [];
    for(let i=0;i<n;i++){
        visited[i] = []
        for(let j = 0; j<m;j++){
            visited[i][j] = 0;
        }
    }

    const result = []
  

    for(let y = 0; y<n;y++){
        for(let x = 0; x<m; x++){
            if(land[y][x] === 0 || visited[y][x]) continue;
            let tempX = x, tempY = y;
            
            while(tempX + 1 < m && land[y][tempX+1] === 1){
                tempX++;
            }
            while(tempY + 1 < n && land[tempY+1][x] === 1){
                tempY++;
            }

            for(let i = y; i<=tempY;i++){
                for(let j = x;j<=tempX;j++){
                    visited[i][j] = 1;
                }
            }
            
            result.push([y,x,tempY,tempX]);
        }
    }
    return result;
};
