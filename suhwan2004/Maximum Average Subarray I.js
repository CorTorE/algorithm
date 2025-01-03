/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/*

17:55 ~ 18:17
Time : O(N)
Space : O(1)
Algo : for
Ds : X
*/

var findMaxAverage = function(nums, k) {
    if(nums.length === 1) return nums[0]
    if(k === 1) return Math.max(...nums)
    
    let sum = 0

    return nums.reduce((prev, cur, i) => {
        sum += cur - (i >= k ? nums[i-k] : 0)
        return k-1 <= i ? Math.max(sum/k, prev) : prev
    }, -Infinity)
};