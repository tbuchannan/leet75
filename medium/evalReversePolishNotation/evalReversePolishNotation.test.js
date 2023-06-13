import { evalRPN } from './evalReversePolishNotation'

describe('Evaluate Reverse Polish Notation', () => {
  it('should return the correct result with addition', () => {
    expect(evalRPN(['2', '1', '+'])).toEqual(3)
  })
  it('should return the correct result with multiplication', () => {
    expect(evalRPN(['5', '2', '*'])).toEqual(10)
  })
  it('should return the correct result with division', () => {
    expect(evalRPN(['21', '7', '/'])).toEqual(3)
  })

  it('should return the correct result subtraction', () => {
    expect(evalRPN(['567', '45', '-'])).toEqual(522)
  })

  it('should return the value of the first item if there is one item', () => {
    expect(evalRPN(['21'])).toEqual(21)
  })

  it('should return undefined in the event of an empty array', () => {
    expect(evalRPN([])).toEqual(undefined)
  })

  it('should remove decimals and only use whole numbers', () => {
    expect(evalRPN(['4', '13', '5', '/', '+'])).toEqual(6)
  })

  it('should handle negative numbers', () => {
    expect(evalRPN(['4', '-13', '+'])).toEqual(-9)
  })

  it('should handle multiple operations', () => {
    expect(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])).toEqual(
      22,
    )
  })
})
