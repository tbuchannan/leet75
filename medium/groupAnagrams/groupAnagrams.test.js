import { groupAnagrams, letterCounter } from './groupAnagrams'

describe('Group Anagrams', () => {
  it('should group anagrams that are anagrams of each other', () => {
    expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'].sort())).toStrictEqual([
      ['ate', 'eat', 'tea'],
      ['bat'],
      ['nat', 'tan'],
    ])
  })

  it('still work with 10 or more occurences of a single letter', () => {
    expect(groupAnagrams(['bdddddddddd', 'bbbbbbbbbbc'].sort())).toStrictEqual([
      ['bbbbbbbbbbc'],
      ['bdddddddddd'],
    ])
  })

  describe('Group anagram helper', () => {
    it('should the string value of the count of the letters', () => {
      expect(letterCounter('anagram')).toEqual(
        '3,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0',
      )
    })
  })
})
