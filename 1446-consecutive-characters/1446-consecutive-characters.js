/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let count = 0 
    let maxCount = 0
    let previous = ' '
    for (let i=0; i < s.length; i++){
        let c = s.charAt(i)
        if(c === previous){
            count++
        }else{
            count = 1
            previous = c
        }
        maxCount = Math.max(maxCount, count)
    }
    return maxCount
};