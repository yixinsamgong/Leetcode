/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count = 0
    word=s.trim()
    for (i=word.length-1; i>=0; i--){
        console.log(word.charAt(i))
        if (word.charAt(i) == " "){
            break
        }count ++
    }
    return count
};  
