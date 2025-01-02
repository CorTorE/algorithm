/**
 * @param {string} s
 * @return {number}
 */

var minAddToMakeValid = function(s) {
  let openMark = 0;
  let closeMark = 0;
  for(const c of s){
    if(c === "(") openMark += 1;
    else if(c === ")"){
        if(openMark !== 0){
            openMark -= 1;
        }
        else{
            closeMark +=1;
        }
    }

  }  
  return openMark + closeMark
};
