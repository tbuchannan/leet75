/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Execution: isValidParentheses('()')
Output: true

isValidParentheses('()[]{}')
Output: true

Execution: isValidParentheses('(]')
Output: false

Time Complexity: O(N)
Space Complexity: O(N)

*/




const isValidParentheses = (str) => {
    if(str.length % 2 != 0) return false
    let pairs = {
        "{":"}",
        "(":")",
        "[":"]"
    }
    let stack = []

    for (let i = 0; i < str.length; i++){
        let char = str[i]
        if(pairs[char]) {
            stack.push(pairs[char])
        } else {
            let temp = stack.pop()
            if(char != temp) return false
        }
    }
    if (stack.length > 0) return false
    return true
}

console.log(isValidParentheses('()')) // -> true
console.log(isValidParentheses('()[]{}')) // -> true
console.log(isValidParentheses('(]')) // -> false
console.log(isValidParentheses('(((((')) // -> false
console.log(isValidParentheses('(')) // -> false