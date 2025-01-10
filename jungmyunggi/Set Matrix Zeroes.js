/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function(matrix) {
    if(matrix.length === 1 && matrix[0].includes(0)){
        matrix[0].fill(0);
        return matrix
    }
    const arr = []
    for(let i=0;i<matrix.length;i++){
        for (let j=0;j<matrix[i].length;j++){
            if(matrix[i][j] === 0){
                arr.push([i,j])
            }
        }
};
for(let i=0;i<arr.length;i++){
    for(let j=0;j<matrix[0].length;j++){
        matrix[arr[i][0]][j] = 0;
    }
    for(let j=0;j<matrix.length;j++){
        matrix[j][arr[i][1]] = 0;
    }
}
return matrix
}