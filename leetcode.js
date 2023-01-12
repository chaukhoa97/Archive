/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (const i in nums) {
    for (const j in nums) {
      if (i != j && nums[i] + nums[j] == target) {
        return [i, j]
      }
    }
  }
}

twoSum([0, 4, 3, 0], 0)
