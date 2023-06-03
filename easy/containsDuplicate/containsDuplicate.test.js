import { containsDup } from './containsDuplicate'

describe('Contains duplicate', () => {
  it('should true if a duplicate is found', () => {
    expect(containsDup([1, 2, 3, 1])).toEqual(true)
  })
  it('should return false if no duplicate is found', () => {
    expect(containsDup([1, 2, 3, 4])).toEqual(false)
  })
})
