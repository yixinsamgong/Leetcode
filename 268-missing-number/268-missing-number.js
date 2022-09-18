/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let arrayNum = 0
    let TotalNum = 0
    for (i=0; i<nums.length+1; i++){
        TotalNum += i
        if (nums[i]){
            console.log(nums[i])
            arrayNum += nums[i]
        }
    }
    return (TotalNum-arrayNum)
};