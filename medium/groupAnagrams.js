/* 
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once

Execution: groupAnagrams(["eat","tea","tan","ate","nat","bat"])
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Execution: groupAnagrams([""])
Output: [[""]]

Execution: groupAnagrams(["a"])
Output: [["a"]])

Time Complexity: O(N*M) N being the length of the array, M being the length of each of the words
Space Complexity: O(N*M) N being the number of keys, M being the value
*/

const letterCounter = (str) => {
  let result = new Array(26).fill(0)
  for (let i = 0; i < str.length; i++) {
    ;+result[str.charCodeAt(i) - 'a'.charCodeAt(0)]++
  }

  return result.join()
}

const groupAnagrams = (strs) => {
  let result = {}
  for (let i = 0; i < strs.length; i++) {
    let wordKey = letterCounter(strs[i])
    if (result[wordKey]) {
      result[wordKey].push(strs[i])
    } else {
      result[wordKey] = [strs[i]]
    }
  }
  return Object.values(result)
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])) // -> [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams(['bdddddddddd', 'bbbbbbbbbbc'])) // -> [["bbbbbbbbbbc"],["bdddddddddd"]]
console.log(groupAnagrams([''])) // -> [[""]]
