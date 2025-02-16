/**
 * @param {string} date
 * @return {string}
 */

function convertBinary(num){
    const stack = [];
    while(num > 0){
        stack.push(num%2);
        num = Math.floor(num/2);
    }
    return stack.reverse().join("");
}
var convertDateToBinary = function(date) {
    const [year, month, day] = date.split("-");
    const y = convertBinary(Number(year))   
    const m = convertBinary(Number(month))
    const d = convertBinary(Number(day));
    return `${y}-${m}-${d}`
};
