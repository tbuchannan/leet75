/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Execution: containsDup([1,2,3,1])
Output: true

Execution: containsDup([1,2,3,4])
Output: false

Space: O(N)
Time: O(N)
*/

export const containsDup = (nums) => {
  const seen = {}

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (seen[num]) {
      return true
    } else {
      seen[num] = true
    }
  }
  return false
}
