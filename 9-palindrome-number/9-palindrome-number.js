/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false 
    
    let p = x
    let q = 0
    while (p >= 1){
        q = q*10 + p%10 
        p = Math.floor(p/10)
    }
    
    return x == q
};