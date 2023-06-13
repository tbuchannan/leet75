import { MinStack } from './minStack'
// jest.mock('./minStack')

beforeEach(() => {
  jest.resetModules()
})

describe('Min Stack', () => {
  it('should return the min after on insertion', () => {
    const minS = new MinStack()
    minS.push(-2)
    expect(minS.getMin()).toEqual(-2)
  })

  it('should update the min if a new min is set insertion', () => {
    const minS = new MinStack()
    minS.push(0)
    minS.push(-4)
    expect(minS.getMin()).toEqual(-4)
  })

  it('should return the last item from the stack', () => {
    const minS = new MinStack()
    minS.push(5)
    minS.push(2)
    minS.push(1)
    minS.push(1455)
    minS.top()
    expect(minS.top()).toEqual(1455)
  })

  it('should remove the last item from the stack', () => {
    const minS = new MinStack()
    minS.push(2)
    minS.push(9)
    minS.push(123)
    minS.push(1455)
    minS.pop()
    expect(minS.top()).toEqual(123)
  })

  it('should update the min if the last item was the previos min', () => {
    const minS = new MinStack()
    minS.push(2)
    minS.push(9)
    minS.push(-11)
    minS.push(28)
    minS.push(-30)
    minS.pop()
    expect(minS.getMin()).toEqual(-11)
  })
})
