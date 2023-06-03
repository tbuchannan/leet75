import { iterativeBinarySearch, recursiveBinarySearch } from './binarySearch'

describe('Binary Search', () => {
  describe('Iterative Search', () => {
    it('should return the index', () => {
      expect(iterativeBinarySearch([-1, 0, 3, 5, 9, 12], 9)).toEqual(4)
    })
    it('should return -1 if not found', () => {
      expect(iterativeBinarySearch([-1, 0, 3, 5, 9, 12], 2)).toEqual(-1)
    })
    it('should return -1 if not found in a small array', () => {
      expect(iterativeBinarySearch([-1, 0, 3, 5, 9, 12], 2)).toEqual(-1)
    })
    it('should return -1 if not found in an empty array', () => {
      expect(iterativeBinarySearch([], 2)).toEqual(-1)
    })
  })

  describe('Recursive Search', () => {
    it('should return the index if found', () => {
      expect(recursiveBinarySearch([-1, 0, 3, 5, 9, 12], 9)).toEqual(4)
    })
    it('should return -1 if not found', () => {
      expect(recursiveBinarySearch([-1, 0, 3, 5, 9, 12], 2)).toEqual(-1)
    })
    it('should return -1 if not found in a small array', () => {
      expect(recursiveBinarySearch([5], 0)).toEqual(-1)
    })
    it('should return -1 if not found in an empty array', () => {
      expect(recursiveBinarySearch([5], 0)).toEqual(-1)
    })
  })
})
