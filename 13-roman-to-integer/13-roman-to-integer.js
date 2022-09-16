/**
 * @param {string} s
 * @return {number}
 */

letters = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};
var romanToInt = function(s) {

    let number = 0
    for (let i=0; i <s.length; i++){
        if(letters[s[i]] < letters[s[i+1]]) {
            number = number - letters[s[i]]
        }else{
            number = number + letters[s[i]]
        }
    }
     return number
};