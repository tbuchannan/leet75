/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Execution: topKFrequent([1,1,1,2,2,3],2)
Output: [1,2]

Execution: topKFrequent([1],1)
Output: [1]

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

const topKFrequent = (nums, k) => {
  const letterCount = {}
  const result = []

  for (let i = 0; i < nums.length; i++) {
    if (letterCount[nums[i]] != null) {
      letterCount[nums[i]].count++
    } else {
      letterCount[nums[i]] = { count: 1 }
    }
  }

  let letterCountArr = []

  for (let key in letterCount) {
    let item = letterCount[key]
    letterCountArr.push({ num: key, count: item.count })
  }

  letterCountArr.sort((a, b) => a.count - b.count)

  let i = letterCountArr.length - 1
  while (result.length < k) {
    result.push(letterCountArr[i].num)
    i--
  }

  return result
}

console.log(topKFrequent([4, 4, 4, 7, 7, 9], 2)) // [4, 7]
console.log(topKFrequent([1], 1)) // [1]
