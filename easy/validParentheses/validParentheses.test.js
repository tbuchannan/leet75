import { isValidParentheses } from './validParentheses'

describe('Is Valid Parentheses', () => {
  it('should true return if parentheses are valid', () => {
    expect(isValidParentheses('()')).toEqual(true)
  })
  it('should true return if parentheses are valid', () => {
    expect(isValidParentheses('()[]{}')).toEqual(true)
  })
  it('should false return if parentheses are invalid', () => {
    expect(isValidParentheses('(]')).toEqual(false)
  })
  it('should false return if only opening parentheses are used', () => {
    expect(isValidParentheses('((((((')).toEqual(false)
  })
  it('should false return if odd string length', () => {
    expect(isValidParentheses('(')).toEqual(false)
  })
})
