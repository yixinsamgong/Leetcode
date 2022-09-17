/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let word = s.toLowerCase().replace(/[^a-z\d]/g, '')
    console.log(word)
    let left = 0
    let right = word.length-1
    while (left < right){
       if (word.charAt(left) != word.charAt(right)){
           return false
           }
        left ++
        right --
    }
    return true
};

// s = s.replace(/[^0-9a-zA-Z]+/gmi,"");
//     s = s.toLowerCase();
//     var l = 0, r = s.length - 1;
//     console.log(s);

//     while(l<r) {
//         if(s.charAt(l) != s.charAt(r)) {
//             return false;
//         }