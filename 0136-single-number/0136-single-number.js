/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // Intuition: sorted pairs sit next to each other
    const n = nums.length;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < n - 1; i += 2) {
        if (nums[i] !== nums[i + 1]) return nums[i];
    }
    return nums[n - 1];
};