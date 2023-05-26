/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Execution: binarySearch([-1,0,3,5,9,12], 9)
Output: 4
Explanation: 9 exists in nums and its index is 4

Execution: binarySearch([-1,0,3,5,9,12], 2)
Output: -1
Explanation: 2 does not exist in nums so return -1

*/

const iterativeBinarySearch = (nums, target) => {
  let low = 0
  let high = nums.length - 1

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2)

    if (nums[mid] < target) {
      low = mid + 1
    } else if (nums[mid] > target) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

const recursiveBinarySearch = (nums, target, low = 0, high = nums.length - 1) => {
  if (low <= high) {
    let mid = low + Math.floor((high - low) / 2)
    if (nums[mid] < target) {
      return recursiveBinarySearch(nums, target, mid + 1, high)
    } else if (nums[mid] > target) {
      return recursiveBinarySearch(nums, target, low, mid - 1)
    } else {
      return mid
    }
  } else {
    return -1
  }
}

console.log(iterativeBinarySearch([-1, 0, 3, 5, 9, 12], 9)) // =>  4
console.log(iterativeBinarySearch([-1, 0, 3, 5, 9, 12], 2)) // =>  -1
console.log(iterativeBinarySearch([-1, 0, 3, 5, 9, 12], 12)) // =>  5
console.log(iterativeBinarySearch([5], 0)) // =>  -1

console.log(recursiveBinarySearch([-1, 0, 3, 5, 9, 12], 9)) // =>  4
console.log(recursiveBinarySearch([-1, 0, 3, 5, 9, 12], 2)) // =>  -1
console.log(iterativeBinarySearch([-1, 0, 3, 5, 9, 12], 12)) // =>  5
console.log(recursiveBinarySearch([5], 0)) // =>  -1
