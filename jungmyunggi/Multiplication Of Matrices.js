arr1 = [
    [2, 3, 2],
    [4, 2, 4],
    [3, 1, 4],
];
arr2 = [
    [5, 4, 3],
    [2, 4, 1],
    [3, 1, 1],
];

function solution(arr1, arr2) {
    var answer = [[]];
    const r1 = arr1.length;
    const c1 = arr1[0].length;
    const r2 = arr2.length;
    const c2 = arr2[0].length;
    const temp = [];
    for (let i = 0; i < r1; i++) {
        temp.push(new Array(c2).fill(0));
    }

    for (let i = 0; i < r1; i++) {
        for (let j = 0; j < c2; j++) {
            for (let k = 0; k < c1; k++) {
                temp[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    answer = [...temp];
    return answer;
}

console.log(solution(arr1, arr2));
