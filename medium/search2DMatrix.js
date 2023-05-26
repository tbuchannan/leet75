/* 
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Execution: search2DMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)
Output: true

Execution: search2DMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)
Output: false

*/

const binarySearchArray = (nums, target) => {
  let low = 0
  let high = nums.length - 1

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2)

    if (nums[mid] < target) {
      low = mid + 1
    } else if (nums[mid] > target) {
      high = mid - 1
    } else {
      return true
    }
  }
  return false
}

const search2DMatrix = (matrix, target) => {
  let low = 0
  let high = matrix.length - 1

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2)
    let middleMatrix = matrix[mid]
    if (middleMatrix[0] > target) {
      high = mid - 1
    } else if (middleMatrix[middleMatrix.length - 1] < target) {
      low = mid + 1
    } else {
      return binarySearchArray(matrix[mid], target)
    }
  }
  return false
}

console.log(
  search2DMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3,
  ),
) // true
console.log(
  search2DMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    34,
  ),
) // true
console.log(
  search2DMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13,
  ),
) // false
console.log(
  search2DMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    22,
  ),
) // false
