/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var addStrings = function(num1, num2) {
    let i = num1.length-1,
        j = num2.length-1;
    
    let sum = 0,
        carry = 0,
        ans = '';
    
    while(i>=0 || j>=0) {
        sum = carry;
        if(i>=0) {
            sum+= +num1.charAt(i);
            console.log(sum)
            i--;
        }
        if(j>=0) {
            sum+= +num2.charAt(j);
            j--;
        }
        ans = sum%10 + ans;
        carry = Math.floor(sum/10);
    }
    
    if(carry) {
        ans = carry + ans;
    }
    
    return ans;
};