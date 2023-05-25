/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Execution: twoSum([2,7,11,15], 9)
Output: [0,1]

Time Complexity: O(N)
Space Complexity: O(N)
*/

const twoSum = (arr, target) => {
  const complementObj = {}

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    let complement = target - num
    if (complementObj[complement] != undefined) {
      return [complementObj[complement], i]
    } else {
      complementObj[num] = i
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9)) // -> [0,1]
console.log(twoSum([3, 2, 4], 6)) // -> [1,2]
console.log(twoSum([3, 3], 6)) // -> [0,1]
