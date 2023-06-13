/*

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

 


twoSum([2,7,11,15], 9)
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

twoSum([2,3,4], 6)
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

twoSum([-1,0], -1)
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
*/

export const twoSum = (arr, target) => {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    if (arr[left] + arr[right] > target) {
      right--
    } else if (arr[left] + arr[right] < target) {
      left++
    } else {
      return [left + 1, right + 1]
    }
  }
}
