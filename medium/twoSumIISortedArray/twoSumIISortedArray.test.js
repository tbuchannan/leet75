import { twoSum } from './twoSumIISortedArray'

describe('Two Sum II Sorted Array', () => {
  it('should find the indices that sum to the target and return them as values in a 1-indexed array', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([1, 2])
  })

  it('should find the indices that sum to the target return them as values in a 1-indexed array', () => {
    expect(twoSum([3, 2, 4], 7)).toStrictEqual([1, 3])
  })

  it('should find the indices that sum to the target return them as values in a 1-indexed array', () => {
    expect(twoSum([3, 9, 11, 22], 33)).toStrictEqual([3, 4])
  })
})
