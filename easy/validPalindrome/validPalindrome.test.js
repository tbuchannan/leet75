import { isPalindrome } from './validPalindrome'

describe('Is Palindrome', () => {
  it('should return true if string is a palindrome', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toEqual(true)
  })

  it('should return false if string is not a palindrome', () => {
    expect(isPalindrome('race a car')).toEqual(false)
  })

  it('should return true for a blank string', () => {
    expect(isPalindrome(' ')).toEqual(true)
  })
})
