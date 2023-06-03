/* 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Execution: isAnagram("anagram", "nagaram")
Output: true

Execution: isAnagram("rat", "car")
Output: false

Time Complexity: O(N)
Space Complexity: O(N)
*/

export const letterCounter = (str) => {
  let count = {}
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    count[char] ? (count[char] += 1) : (count[char] = 1)
  }
  return count
}

export const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false
  let stringCount = letterCounter(str1)

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i]
    if (stringCount[char]) {
      stringCount[char] -= 1
    } else {
      return false
    }
  }

  return true
}
