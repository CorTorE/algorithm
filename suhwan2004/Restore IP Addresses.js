/*
18:55 ~ 19:36 
Time : O(3^4) => O(1)
Space : O(3^4) => O(1)
ALGO : dfs, for
DS : array
Constraints : 
- 1 <= s.length <= 20
- s는 무조건 숫자로 이루어져 있다
Edge Case : 12보다 s의 길이가 크면 절대 ip로 만들어질 수 없기에 빈 배열 반환
*/
var restoreIpAddresses = function(s) {
    if(s.length > 12) return []
    return dfs(s, 0, [], [])
};

const dfs = (s, pos, arr, res) => {
    if(arr.length > 4) return res
    if(pos >= s.length && arr.length === 4){
        res.push(arr.join("."))
        return res
    }

    for(let i = pos + 1 ; i <= Math.min(s.length, pos + 3); i++){
        const curStr = s.slice(pos, i)
        const curNum = Number(curStr)

        if(curStr[0] === '0' && curStr.length > 1) continue
        if(curNum >= 0 && curNum <= 255) {
            arr.push(curNum)
            dfs(s, i, arr, res)
            arr.pop(curNum)
        }
    }

    return res
}
