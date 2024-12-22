//16:00 ~ 16:16

/*
Bruth force
Time : O(2^n)
Space : O(1)

한번 갈지, 두번갈지를 dfs로 재귀하면서 다 찾는 방식.
최대 45계단까지 있을 수 있기 때문에 시간초과가 날 확률이 높음
*/

/*
Optimal Solution
Time : O(N)
Space : O(1)
ALGO : For, DP
DS : X
Edge Case : n === 1 or n === 2 or n === 3 => return n
Constraints
 - 1 <= n <= 45

문제의 테케에서 나오는 값을 보면...
1 => 1 
2 => 2
3 => 3
4 => 5
5 => 8
...

n번째 값은 n-1번째 값 + n-2번째 값이라고 볼 수 있기에 해당 로직을 코드에 적용
*/

var climbStairs = function(n) {
    if(n <= 3) return n;

    let resVal = 3;
    let prev1 = 3, prev2 = 2;

    for(let i = 4; i <= n; i++){
        resVal = prev1 + prev2;
        prev2 = prev1;
        prev1 = resVal;
    }

    return resVal;
};