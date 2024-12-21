/**
 * 1칸 Or 2칸
 * 45칸이면 일단 1+1+...+1
 * n = 1 return 1
 * n = 2 return 2
 * n = 3 return 3
 * n = 4 return 5 [1, 1, 1, 1] [2, 1, 1] [1, 2, 1] [1, 1, 2] [2, 2]
 * n = 5 return 8 [1, 1, 1, 1, 1] [2, 1, 1, 1] [1, 2, 1, 1][1, 1, 2, 1][1, 1, 1, 2][2, 2, 1][2, 1, 2][1, 2, 2]
 * 1, 2, 3, 5, 8 -> n = (n-2)번째 + (n-1)번째
 * 새로운 함수 호출하니까 시간때문에 터짐 -> 걍 반복문 돌리자
 */

function climbStairs(n: number): number {
  if (n <= 3) return n;

  let x = 2;
  let y = 3;
  let sum = 0;

  for (let i = 4; i <= n; i++) {
    sum = x + y;
    x = y;
    y = sum;
  }
  return sum;
}
