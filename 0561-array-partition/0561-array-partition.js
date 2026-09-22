/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    var ans = 0
    var n = nums.length
    nums.sort((a, b) => {
        return a - b;
    })
    for(let i = 0; i < n; i += 2)
        ans += nums[i]
    
    return ans
};