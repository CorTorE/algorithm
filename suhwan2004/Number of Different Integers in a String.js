/*
22:39 ~ 22:47

Time : O(N)
Space : O(N)
ALGO : for
DS : hash Set, String
Constraints
- 1 <= word.length <= 1000
- 주어지는 word는 숫자와 영소문자로 구성된다
Edge Case : X
*/
var numDifferentIntegers = function(word) {
    let set = new Set()
    let curDigit = ''

    for(let i = 0; i < word.length; i++){
        const curC = word[i]
        const nextC = word[i+1]
        if(curC >= 'a' && curC <= 'z'){
            if(curDigit){
                set.add(curDigit)
                curDigit = ''
            }
        }else if(curDigit === '' && curC === '0') {
            if(i === word.length-1 || (nextC >= 'a' && nextC <= 'z')) curDigit += curC
            else continue;
        }else {
            curDigit += curC
        }
    }

    if(curDigit){
        set.add(curDigit)
        curDigit = ''
    }

    return set.size
};