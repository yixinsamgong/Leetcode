/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2){
        return x
    } else {
        for (let i=0; i<=x; i++){
        if (i*i == x){
            return i
         } else if ( i * i > x ) {
            return i-1
        } 
        }
    }
}