/*
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
 
Execution: dailyTemperatures([73,74,75,71,69,72,76,73])
Output: [1,1,4,2,1,1,0,0]

Execution: dailyTemperatures([30,40,50,60])
Output: [1,1,1,0]

Execution: dailyTemperatures([30,60,90])
Output: [1,1,0]

Time Complexity: O(N)
Space Complexity: O(N)
*/

const dailyTemperatures = (temperatures) => {
  let result = new Array(temperatures.length).fill(0)
  let stack = []

  for (let i = 0; i < temperatures.length; i++) {
    let currentTemp = temperatures[i]
    while (stack.length && temperatures[stack[stack.length - 1]] < currentTemp) {
      let location = stack.pop()
      result[location] = i - location
    }
    stack.push(i)
  }

  return result
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])) // => [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30, 40, 50, 60])) // => [1,1,1,0]
console.log(dailyTemperatures([30, 60, 90])) // => [1,1,0]
