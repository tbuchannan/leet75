import { topKFrequent } from './topKFrequentElement'

describe('Top K Frequent Element', () => {
  it('should return the most k frequent elements', () => {
    expect(topKFrequent([4, 4, 4, 7, 7, 9], 2)).toStrictEqual([4, 7])
  })

  it('should work with arrays of length 1', () => {
    expect(topKFrequent([1], 1)).toStrictEqual([1])
  })
})
