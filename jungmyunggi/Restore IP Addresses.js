/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const n = s.length;
    if(n >=13){
    return [];
  }
  if(n <= 3){
    return [];
  }
  const result = [];
  function isVaild(splitString){
    if(Number(splitString) === 0 && splitString.length === 1) return true;
    if(splitString[0] === '0') return false;
    if(Number(splitString) <= 255) return true;
    return false;
} 

  for(let i1 = 1; i1 < n - 2; i1++){
    const part1 = s.slice(0,i1);
    if(isVaild(part1) === false) continue;
    for(let i2 = i1 + 1; i2 < n - 1; i2++){
        const part2 = s.slice(i1,i2);
        if(isVaild(part2) === false) continue;
        for(let i3 = i2 + 1; i3 < n; i3++){
            const part3 = s.slice(i2,i3);
            if(isVaild(part3) === false) continue;
            const part4 = s.slice(i3);
            if(isVaild(part4) === false) continue;
            result.push(part1+"."+part2+"."+part3+"."+part4);
        }
    }
  }
  return result;
};
