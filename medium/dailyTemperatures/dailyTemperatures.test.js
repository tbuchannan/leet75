import { dailyTemperatures } from './dailyTemperatures'

describe('Daily Temperatures', () => {
  it('should how many days until you reach a higher temp', () => {
    expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toStrictEqual([
      1, 1, 4, 2, 1, 1, 0, 0,
    ])
  })

  it('should how many days until you reach a higher temp, and 0 if the last day is the highest', () => {
    expect(dailyTemperatures([30, 60, 90])).toStrictEqual([1, 1, 0])
  })

  it('should return an empty array if no values', () => {
    expect(dailyTemperatures([])).toStrictEqual([])
  })

  it('should return an array of zeroes if all the values are decreasing', () => {
    expect(dailyTemperatures([90, 60, 30, 20, 15, 5])).toStrictEqual([0, 0, 0, 0, 0, 0])
  })
})
