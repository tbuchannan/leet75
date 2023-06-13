import { threeSum } from './threeSum'

describe('Three Sum', () => {
  it('should return a unique array of numbers that sum to 0', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4]).sort()).toStrictEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ])
  })

  it('should return an empty array if no values sum to 0', () => {
    expect(threeSum([0, 1, 1])).toStrictEqual([])
  })

  it('should return true if the number exists within the beginning of the matrix', () => {
    expect(threeSum([0, 0, 0])).toStrictEqual([[0, 0, 0]])
  })
})
