/*
23:53 ~ 24:05

Time : O(N)
Space :O(1)
ALGO : for
DS : x
Constraints
- 1 <= s.length <= 1000
- s[i] 는 무조건 '(', ')' 둘중 하나이다
Edge Case : x
*/

var minAddToMakeValid = function(s) {
    let open = 0;
    let close = 0; 

    for(let i = 0; i < s.length; i++){
        const curC = s[i]
        const isOpen = curC ==='('

        if(!isOpen && open > 0) open--
        else if(isOpen) open++
        else close++ 
    }

    return open + close
};