//16:19 ~ 16:44

/*
M = 10^4, N = 10^5
Time : O(N)
Space : O(N)
ALGO : for
DS : HashMap, Array
Edge Case : X
Constraints :
- 1 <= nums.length <= 10^5
- -10^4 <= nums[i] <= 10^4
- k is in the range [1, the number of unique elements in the array].
- It is guaranteed that the answer is unique.

nums를 순회하면서 hashmap에 key는 현제 나온 값, value는 해당 값이 지금까지 나온 횟수로써 추가해준다.

이후, hashMap을 배열화 해서 한번 돌면서 배열안에 나온 횟수 인덱스에 현재 값을 넣어준다
arr[value].push(key)

뒤를 돌면서 원하는 순위까지만큼 찾아서 k가 채워질 정도 까지만 push 하고 반환해준다

*/
var topKFrequent = function(nums, k) {
    const map = new Map(); // Space : O(N)
    let arr = []; // Space : O(2*M  =>  M)
    let res = []; // Space : O(M)
    nums.forEach((num) => map.set(num, (map.get(num) || 0) + 1)); // Time : O(N)
    
    for (let [key, value] of map.entries()) { // Time : O(N)
        if(arr[value]) arr[value].push(key);
        else arr[value] = [key];
    }

    for(let i = arr.length -1; i >= 0; i--){ // Space : O(M)
        if(arr[i])res.push(...arr[i].slice(0, k - res.length))
        if(res.length === k) break;
    }

    return res;
};