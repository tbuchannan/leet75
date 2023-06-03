/* You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.
 
Execution: evalRPN(["2","1","+","3","*"])
Output: 9
Explanation: ((2 + 1) * 3) = 9

Execution: evalRPN(["4","13","5","/","+"])
Output: 6
Explanation: (4 + (13 / 5)) = 6
Example 3:


Execution: evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22


Time Complexity: O(N)
Space Complexity: O(N)
*/

const evalRPN = (arr) => {
  if (arr.length == 1) return arr[0]
  if (arr.length == 0) return
  let stack = []
  let operators = {
    '+': (left, right) => parseInt(left) + parseInt(right),
    '-': (left, right) => parseInt(left) - parseInt(right),
    '*': (left, right) => parseInt(left) * parseInt(right),
    '/': (left, right) => Math.trunc(parseInt(left) / parseInt(right)),
  }

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    let operatorFunc = operators[item]
    if (operatorFunc) {
      let right = stack.pop()
      let left = stack.pop()
      stack.push(operatorFunc(left, right))
    } else {
      stack.push(item)
    }
  }

  return stack[0]
}
console.log(evalRPN(['2', '1', '+', '3', '*'])) // => 9
console.log(evalRPN(['4', '13', '5', '/', '+'])) // => 6
console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])) // => 22