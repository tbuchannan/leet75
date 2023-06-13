import { search2DMatrix, binarySearchArray } from './search2DMatrix'

describe('Search 2D Matrix', () => {
  it('should return false if the number doesnt exist', () => {
    expect(
      search2DMatrix(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        13,
      ),
    ).toEqual(false)
  })

  it('should return true if the number exists within the later part of the matrix', () => {
    expect(
      search2DMatrix(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        34,
      ),
    ).toEqual(true)
  })

  it('should return true if the number exists within the beginning of the matrix', () => {
    expect(
      search2DMatrix(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        3,
      ),
    ).toEqual(true)
  })
  it('should return false if the number is less than all of the numbers in the matrix', () => {
    expect(
      search2DMatrix(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        -1,
      ),
    ).toEqual(false)
  })
  it('should return false if the number is greater than all of the numbers in the matrix', () => {
    expect(
      search2DMatrix(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        100,
      ),
    ).toEqual(false)
  })

  describe('Search 2d Matrix Helper', () => {
    it('should return true if the number is found in the array', () => {
      expect(binarySearchArray([1, 2, 3, 4, 5], 4)).toEqual(true)
    })
    it('should return false if the number is not found in the array', () => {
      expect(binarySearchArray([1, 2, 3, 4, 5], 9)).toEqual(false)
    })
  })
})
