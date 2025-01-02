function findMaxAverage(nums, k) {
    let max = -Infinity;
    let temp = 0;

    for (let i = 0; i < k; i++) {
        temp += nums[i];
    }
    max = temp;
    
    for (let i = k; i < nums.length; i++) {
        temp = temp - nums[i-k] + nums[i];
        max = Math.max(max,temp)
    }

    return max/k;
}