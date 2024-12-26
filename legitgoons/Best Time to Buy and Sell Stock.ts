/**
 * 2중 For문 돌리기 -> 시간복잡도 O(n^2)인데 100000^2은 감당불가
 * 투 포인터로 풀면 되지않을까? -> 구현하다가 깨달았는데 투 포인터도 이중 for문이라서 터짐
 * 그냥 반복문 돌면서, 지금까지 값이랑 비교했을 가장 작은값이 얘인지 check
 * 그 다음 현재까지 최고이득 vs 지금값 - 최소값
 */
function maxProfit(prices: number[]): number {
    let minPrice = 10000;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        const nowPrice = prices[i];
        minPrice = Math.min(minPrice, nowPrice);
        maxProfit = Math.max(maxProfit, nowPrice - minPrice);
    }

    return maxProfit;
}