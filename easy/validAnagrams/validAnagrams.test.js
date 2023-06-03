import { isAnagram, letterCounter } from './validAnagrams'

describe('Valid Anagrams', () => {
  it('should return true if words are anagrams', () => {
    expect(isAnagram('anagram', 'nagaram')).toEqual(true)
  })

  it('should return false if words are not anagrams', () => {
    expect(isAnagram('rat', 'car')).toEqual(false)
  })

  it('should return false if words are different lengths', () => {
    expect(isAnagram('rat', 'crate')).toEqual(false)
  })

  describe('Anagram helper', () => {
    it('should return the count of the letters', () => {
      expect(letterCounter('anagram')).toStrictEqual({ a: 3, n: 1, g: 1, r: 1, m: 1 })
    })
  })
})
