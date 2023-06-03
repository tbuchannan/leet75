import { twoSum } from './twoSum'

describe('Two Sum', () => {
  it('should find the indices that sum to the target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1])
  })

  it('should find the indices that sum to the target', () => {
    expect(twoSum([3, 2, 4], 7)).toStrictEqual([0, 2])
  })
})
